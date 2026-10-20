"""저장한 pngFAQ.html → js/faq-data.zh.js 변환 (원문 재저장 후 다시 실행하면 됨)"""
import re, sys, json
from bs4 import BeautifulSoup

src, out = sys.argv[1], sys.argv[2]
soup = BeautifulSoup(open(src, encoding='utf-8').read(), 'html.parser')
for f in soup.find_all('font'):  # 크롬 번역 흔적 제거
    f.unwrap()

CAT_IDS = ['about', 'account', 'product', 'order', 'sample', 'cross', 'supplier', 'pay', 'know', 'new']
ALLOWED = {'p', 'strong', 'b', 'em', 'br', 'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'th', 'td'}

# 답변 안의 메뉴 경로 → 링크 키 (URL은 직접 사이트를 따라가서 채운다)
PATH_LINKS = {
    '用户中心 → 设置 → 企业认证': 'enterpriseAuth',
    '用户中心 → 采购管理 → 物料编码': 'materialCode',
    '用户中心 → 企业管理 → 子账号管理': 'subAccount',
    '用户中心 → 设置 → 账户安全': 'accountSecurity',
    '用户中心 → 设置 → 地址管理': 'addressManage',
    '用户中心 → 关注中心 → 供应商': 'followSupplier',
    '用户中心 → 售后服务 → 退货': 'afterSalesReturn',
    '用户中心 → 财务': 'finance',
}
# 작업 지시서에 이름이 나온 기능 (본문에 어떻게 쓰였는지 보고 [[키]]를 직접 넣는다)
DOC_LINKS = {
    'myProject': '我的项目', 'supplierJoin': '供应商入驻', 'frequentList': '常购清单',
    'myTender': '我的招标', 'freeSample': '免费申样', 'domesticAlt': '国产替代专区',
}

ko = lambda t: len(re.findall(r'[가-힣]', t))
zh = lambda t: len(re.findall(r'[一-鿿]', t))

def clean_html(node):
    for t in node.find_all(True):
        if t.name not in ALLOWED:
            t.unwrap()
        else:
            t.attrs = {}
    html = node.decode_contents()
    html = re.sub(r'\s+', ' ', html).strip()
    html = re.sub(r'>\s+<', '><', html)
    for path, key in PATH_LINKS.items():
        html = html.replace(path, f'[[{key}]]')
    return html

cats, flagged, used = [], [], set()
sections = [s for s in soup.select('.faq-section') if s.select('.faq-item')]
for ci, sec in enumerate(sections):
    title = sec.select_one('.section-title').get_text(' ', strip=True)
    icon = title.split(' ')[0]
    name = re.sub(r'^\S+\s+', '', title)                      # 이모지 제거
    name = re.sub(r'^[一二三四五六七八九十]+、|^[IVX]+\.\s*', '', name)  # 번호 제거
    name = re.sub(r'（新增专题）', '', name)
    cid = CAT_IDS[ci]
    items = []
    for qi, it in enumerate(sec.select('.faq-item'), 1):
        q = it.select_one('.faq-question h3').get_text(' ', strip=True)
        a = clean_html(it.select_one('.faq-answer'))
        used.update(re.findall(r'\[\[(\w+)\]\]', a))
        item = {'id': f'q-{cid}-{qi:02d}', 'q': q, 'a': a}
        if ko(q + a) > zh(q + a):
            item['todo'] = '크롬 자동번역본 - 원문(중국어)으로 교체 필요'
            flagged.append(item['id'])
        items.append(item)
    cats.append({'id': cid, 'icon': icon, 'name': name, 'items': items})

if ko(cats[0]['name']) > 0:
    cats[0]['name'] = '关于平台'   # 크롬 번역된 분류명 → 원문 (다른 분류 형식과 동일)

links = {k: {'label': p, 'url': ''} for p, k in PATH_LINKS.items()}
links.update({k: {'label': v, 'url': ''} for k, v in DOC_LINKS.items()})

total = sum(len(c['items']) for c in cats)
js = f"""/**
 * Global-PNG FAQ 데이터 (중국어판)
 * - 원본: https://www.global-png.com/act/pngFAQ.html (2026.06판) 에서 변환, 분류 {len(cats)}개 / 질문 {total}개
 * - 문구는 이 파일에만 둔다. 한국어판은 faq-data.ko.js 를 같은 구조로 만든다.
 * - 답변(a)은 HTML. 안의 [[키]] 는 FAQ_LINKS 의 링크로 바뀐다 (url 이 비어 있으면 글자만 표시).
 * - todo 가 붙은 항목은 확인/교체가 필요한 항목.
 */

// 기능 이동 주소 — url 은 플랫폼을 직접 따라가 보고 채운다 (= 납품물 2번 대응표)
window.FAQ_LINKS = {json.dumps(links, ensure_ascii=False, indent=2)};

window.FAQ_DATA = {json.dumps({'title': 'Global-PNG 普恩志 FAQ', 'version': '2026.06', 'categories': cats}, ensure_ascii=False, indent=2)};
"""
open(out, 'w', encoding='utf-8').write(js)
print(f'categories={len(cats)} items={total} flagged={flagged}')
print('links used in answers:', sorted(used))
txt = ' '.join(i['a'] for c in cats for i in c['items'])
print('doc-link names in text:', {v: txt.count(v) for v in DOC_LINKS.values()})
