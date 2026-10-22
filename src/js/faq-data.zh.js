/**
 * Global-PNG FAQ 데이터 (중국어판)
 * - 원본: https://www.global-png.com/act/pngFAQ.html (2026.06판) 에서 변환, 분류 10개 / 질문 60개
 * - 문구는 이 파일에만 둔다. 한국어판은 faq-data.ko.js 를 같은 구조로 만든다.
 * - 답변(a)은 HTML. 안의 [[키]] 는 FAQ_LINKS 의 링크로 바뀐다 (url 이 비어 있으면 글자만 표시).
 * - todo 가 붙은 항목은 확인/교체가 필요한 항목.
 */

// 기능 이동 주소 — url 은 플랫폼을 직접 따라가 보고 채운다 (= 납품물 2번 대응표)
window.FAQ_LINKS = {
  "enterpriseAuth": {
    "label": "用户中心 → 设置 → 企业认证",
    "url": ""
  },
  "materialCode": {
    "label": "用户中心 → 采购管理 → 物料编码",
    "url": ""
  },
  "subAccount": {
    "label": "用户中心 → 企业管理 → 子账号管理",
    "url": ""
  },
  "accountSecurity": {
    "label": "用户中心 → 设置 → 账户安全",
    "url": ""
  },
  "addressManage": {
    "label": "用户中心 → 设置 → 地址管理",
    "url": ""
  },
  "followSupplier": {
    "label": "用户中心 → 关注中心 → 供应商",
    "url": ""
  },
  "afterSalesReturn": {
    "label": "用户中心 → 售后服务 → 退货",
    "url": ""
  },
  "finance": {
    "label": "用户中心 → 财务",
    "url": ""
  },
  "myProject": {
    "label": "我的项目",
    "url": ""
  },
  "supplierJoin": {
    "label": "供应商入驻",
    "url": ""
  },
  "frequentList": {
    "label": "常购清单",
    "url": ""
  },
  "myTender": {
    "label": "我的招标",
    "url": ""
  },
  "freeSample": {
    "label": "免费申样",
    "url": ""
  },
  "domesticAlt": {
    "label": "国产替代专区",
    "url": ""
  }
};

window.FAQ_DATA = {
  "title": "Global-PNG 普恩志 FAQ",
  "version": "2026.06",
  "categories": [
    {
      "id": "about",
      "icon": "🏢",
      "name": "关于平台",
      "items": [
        {
          "id": "q-about-01",
          "q": "Global-PNG란 무엇인가요? 구매자에게 어떤 문제를 해결해 줄 수 있나요?",
          "a": "<p><strong>글로벌-PNG(普恩志) 는</strong><strong>普恩志 테크놀로지 그룹</strong> 이 설립한 <strong>반도체 산업 제품을 위한 원스톱 온라인 B2B 디지털 공급망 플랫폼</strong> 입니다 ." +
              "<br>FPD 디스플레이 장비, 반도체 장비, 태양광 발전 장비, 에너지 저장 장비 등 4대 주요 분야에 집중하며, <strong>신제품, 중고 장비, 예비 부품 및 소모품의</strong> 3가지 범주를 포괄합니다 . " +
              "<br><br> <strong>이 플랫폼의 핵심 가치는 다음과 같습니다 </strong> . " +
              "<br>- <strong>인증된 공급업체</strong> , <strong>AI 기반 지능형 매칭</strong> , <strong>에스크로 거래</strong> , <strong>해외 물류 등 원스톱 서비스를 구매자에게 제공합니다. </strong> " +
              "<br>- <strong>정보 비대칭성과 구매 위험을 줄입니다. </strong>" +
              "<br>- <strong>해외 무역팀이 없는 중소기업도 한국에서 처음으로 장비를 수입할 수 있도록 지원합니다 </strong> .<strong></strong></p>",
          "todo": "크롬 자동번역본 - 원문(중국어)으로 교체 필요"
        },
        {
          "id": "q-about-02",
          "q": "푸엔즈와 알리바바 인터내셔널 스테이션, 메이드인차이나와 같은 종합 B2B 플랫폼의 차이점은 무엇인가요?",
          "a": "<table><thead><tr><th>차원</th></tr></thead><tbody><tr><td><strong>산업 분야 분석</strong></td><td>반도체 산업 전반(FPD/반도체/태양광/에너지 저장/자동차)에 수직적으로 통합되어 있습니다.</td><td>모든 카테고리에 해당됩니다</td></tr><tr><td><strong>공급업체 인증</strong></td><td>산업별 인증(반도체 장비 기술 매개변수 검토)</td><td>일반 자격 심사</td></tr><tr><td><strong>팀 전문성</strong></td><td>해당 팀은 반도체 장비 기술 분야의 경험을 바탕으로 제품 선택에 대한 조언을 제공할 수 있습니다.</td><td>해당 팀은 일반적으로 장비 기술적 배경 지식이 부족합니다.</td></tr><tr><td><strong>국경을 넘는 방향</strong></td><td>저희는 중국-한국 양방향 무역에 중점을 두고 있으며, 한국 공급업체와의 연결을 담당하고 통관 및 물류를 처리하는 전담 인력을 보유하고 있습니다.</td><td>특정 국가에 국한되지 않고 국경을 넘나드는 일반적인 거래입니다.</td></tr><tr><td><strong>거래 보안</strong></td><td>에스크로 거래(에스크로 계좌에 자금 보관) + 제3자 검사 + 리퍼비셔 보증</td><td>이는 주로 정보 매칭에 관련되며, 거래 과정에서 플랫폼의 개입은 미미합니다.</td></tr><tr><td><strong>누구에게 적합한가요?</strong></td><td>해외에서 첫 구매를 진행하지만 아직 공급망을 구축하지 않은 중소기업</td><td>경험이 풍부한 구매자는 구매자를 직접 선별해야 합니다.</td></tr></tbody></table>",
          "todo": "크롬 자동번역본 - 원문(중국어)으로 교체 필요"
        },
        {
          "id": "q-about-03",
          "q": "해당 플랫폼의 두 도메인 이름의 차이점은 무엇인가요?",
          "a": "<p>- <strong>www.global-png.com</strong> " +
              "<br>— 주요 B2B 거래 플랫폼(주로 중국어)으로, 제품 검색, 주문, 구매 관리 등에 사용됩니다. " +
              "<br>최근 <strong>일본어</strong> (global-png.com/jp/) 및 <strong>한국어</strong> (global-png.co.kr/) 버전이 출시되었습니다. " +
              "<br><br>- <strong>www.g-png.com " +
              "<br>— 기업 브랜드 웹사이트(다국어 지원)로, 공급업체, 대리점, 전문가들에게 기업의 강점과 업계 협력 솔루션을 소개합니다. </strong>" +
              "<br><strong>중국어, 영어, 한국어, 일본어, 스페인어 5개 언어를</strong> 지원합니다 .</p>",
          "todo": "크롬 자동번역본 - 원문(중국어)으로 교체 필요"
        },
        {
          "id": "q-about-04",
          "q": "푸엔지(Png)의 회사 배경, 발전 과정 및 규모는 어떻게 되나요?",
          "a": "<p><strong>2010년에 설립된</strong> 이 회사는 2023년 10월에 공식적으로 B2B 플랫폼을 출시했습니다. " +
              "<br>그룹은 중국(허페이, 선전, 베이징), 한국(서울), 홍콩 등 여러 지역에 산업 시설을 완비했습니다. " +
              "<br><strong>주요 이정표</strong> (g-png.com의 \"발전사\"에서 발췌): " +
              "<br>- <strong>2010년</strong> - 그룹 최초의 대리점 사업 회사 설립 " +
              "<br>- <strong>2012년</strong> - 중국 대리점 사업을 위한 그룹 해외 지사 설립 " +
              "<br>- <strong>2014년</strong> - 한중 무역 모델 기반 미래 국제 무역 플랫폼화의 토대 마련 " +
              "<br>- <strong>2017년</strong> - 한중 기술 교류를 연결하는 그룹 허페이 지사 설립 " +
              "<br>- <strong>2020년</strong> - 그룹 홍콩 지사 설립, 반도체 하위 분야 전반을 아우르는 온라인 거래 플랫폼 개념 도입 " +
              "<br>- <strong>2023년 10월</strong> - 푸엔지 반도체 B2B 거래 플랫폼 공식 출시 " +
              "<br><br>- <strong>향후</strong> - 동아시아/남아시아/유럽/북미/호주 지사 설립 예정 청두/선전/우한/미국 사무소 <strong>주요 운영 데이터</strong> (2025년 기준): " +
              "<br>- <strong>70개 이상의</strong> 국가 및 지역 사업 영역 " +
              "<br>- 고객 재구매율 <strong>83.3%</strong> " +
              "<br>- 계약 준수율 <strong>99.98% " +
              "<br>- 한국 자회사, </strong><strong>글로벌 장비 레이더</strong> 시스템 구축 ( <strong>5,000개 이상의</strong> 한국 인증 공급업체 확보) " +
              "<br>- <strong>2026년 1분기</strong> 목표 고객 5만 명 이상 유치 예상(공개 목표).</p>",
          "todo": "크롬 자동번역본 - 원문(중국어)으로 교체 필요"
        },
        {
          "id": "q-about-05",
          "q": "푸엔지의 사명, 비전, 목표는 무엇인가요?",
          "a": "<p>&gt; &gt; &gt;</p>",
          "todo": "크롬 자동번역본 - 원문(중국어)으로 교체 필요"
        },
        {
          "id": "q-about-06",
          "q": "해당 플랫폼의 \"4자 협력\" 비즈니스 모델은 무엇인가요?",
          "a": "<p>Global-PNG는 <strong>4자 협력</strong> 모델을 채택합니다. " +
              "<br><strong>4가지 역할은 다음</strong> 과 같습니다. - <strong>플랫폼</strong> : 자격 검증 + AI 기반 지능형 매칭 + 전 과정 거래 이행 및 사후 서비스 - <strong>유통업체</strong> : 판매 주문 접수 + 현장 기술 지원 - <strong>최종 고객</strong> : 구매 승인 + 지속적인 재구매 + 고객 피드백 최적화 - <strong>공급업체</strong> : 제품 정보, 가격, 재고 업로드 + 플랫폼 인증 완료. 이 플랫폼은 기존의 매칭 모델에서 벗어나 <strong>전체 거래 이행 및 사후 서비스 프로세스를 전담합니다</strong> . <strong>6단계 거래 폐쇄 루프</strong> : 수요 파악 → 지능형 공급 매칭 → 인증 및 위험 관리 → 주문 실행 → 해외 배송 → 사후 재구매</p>",
          "todo": "크롬 자동번역본 - 원문(중국어)으로 교체 필요"
        },
        {
          "id": "q-about-07",
          "q": "플랫폼을 지원하는 생태계는 무엇인가요?",
          "a": "<p>이 플랫폼은 \"커뮤니티 – 전문가 – 연구\"의 세 가지 계층을 중심으로 산업 생태계를 구축합니다. 구체적으로는 다음과 같습니다. - <strong>커뮤니티</strong> : 산업 교류 모임(산업 살롱, 세미나, 엘리트 그룹) - <strong>전문가</strong> : 산업 기술 지원 계층(선정 컨설팅, 프로세스 안내, 사후 서비스) - <strong>연구 기관</strong> : 혁신 주도 계층(백서, 기술 보고서, 산업 연구)</p>",
          "todo": "크롬 자동번역본 - 원문(중국어)으로 교체 필요"
        },
        {
          "id": "q-about-08",
          "q": "이 플랫폼은 어떤 사업 분야에 서비스를 제공할 수 있습니까?",
          "a": "<p>根据 g-png.com 官网，平台提供四大事业领域：- <strong>设备与装置</strong> — 针对 FPD、半导体等专用设备；提供中国本地测试与安装服务；满足客户需求的定制化售后支持 - <strong>生产制造</strong> — PROBE CARD 及各类检测设备的制造；具备本地化生产与工厂运营经验 - <strong>材料与零部件</strong> — 供应电气电子领域所需的关键材料与零部件；依托现有合作伙伴供应链稳定供货 - <strong>项目业务</strong> — 提供中国本地项目投资与融资咨询；技术合作项目咨询；合作伙伴搜索与匹配支持</p>"
        },
        {
          "id": "q-about-09",
          "q": "如何联系平台客服？有没有线下办公点？",
          "a": "<p><strong>线上联系</strong>：- 📞 客服热线：<strong>400-8759987</strong> - 📧 邮箱：<strong>Global@global-png.com</strong> - 💬 QQ：<strong>3696102375</strong> - 📍 注册地址：北京市朝阳区望京 SOHO T1B 座 2806 室 - 平台内提供<strong>在线客服</strong>、<strong>在线留言</strong>、<strong>发布询盘</strong>入口<strong>线下运营中心</strong>：普恩志运营中心位于<strong>深圳</strong>，欢迎预约到访面谈（具体地址请联系客服获取）。</p>"
        }
      ]
    },
    {
      "id": "account",
      "icon": "🔐",
      "name": "注册与账户",
      "items": [
        {
          "id": "q-account-01",
          "q": "如何注册账户？支持哪些方式？",
          "a": "<p>注册仅需<strong>手机号 + 验证码</strong>，填写后勾选同意《用户注册协议》和《隐私政策》即可完成。目前<strong>仅支持个人注册</strong>方式，注册后可进行企业认证。<strong>快捷注册优化</strong>（注册转化提升方向）：未来将支持微信、企业微信、App/小程序一键登录。</p>"
        },
        {
          "id": "q-account-02",
          "q": "如何进行企业认证？",
          "a": "<p>登录后进入<strong>[[enterpriseAuth]]</strong>页面，提交企业相关资料进行认证。认证成功后账户会显示「认证企业」标识。<strong>企业认证是参与平台交易的\"重要前提\"</strong>，可享有的权益：- 专属优惠、样品申领及行业会议资格 - 查看企业认证信息（部分）与用户评价 - 基于用户行为的个性化推荐与服务（千人千面） - 交易匹配中<strong>优先展示</strong></p>"
        },
        {
          "id": "q-account-03",
          "q": "账户安全有哪些设置？",
          "a": "<p>在<strong>[[accountSecurity]]</strong>中可管理：- <strong>手机号码</strong> — 绑定/修改手机号 - <strong>电子邮箱</strong> — 绑定邮箱（可选） - <strong>登录密码</strong> — 6~20 位，英文/数字/符号组合 - <strong>支付密码</strong> — 用于信用支付时的资金安全验证</p>"
        },
        {
          "id": "q-account-04",
          "q": "企业子账号如何管理？",
          "a": "<p>在<strong>[[subAccount]]</strong>中，可以：- <strong>创建子账号</strong> — 输入用户名、国家代码、手机号 - <strong>批量删除</strong>子账号 - 对子账号执行：查看订单、重置密码、编辑、删除 - 按启用状态筛选适合需要多人协作的采购团队。</p>"
        },
        {
          "id": "q-account-05",
          "q": "收货地址如何管理？",
          "a": "<p>进入<strong>[[addressManage]]</strong>，最多可添加 <strong>20 个</strong>收货地址，支持设置默认地址。下单时可选择已保存的地址进行配送。</p>"
        }
      ]
    },
    {
      "id": "product",
      "icon": "🔍",
      "name": "产品与搜索",
      "items": [
        {
          "id": "q-product-01",
          "q": "平台上有哪些产品品类？",
          "a": "<p>平台覆盖泛半导体全产业链（按实际搜索数据）：</p><table><thead><tr><th>品类</th></tr></thead><tbody><tr><td>半导体</td><td>125 件</td><td>胶带、晶圆传送设备、蚀刻机、锡膏、减薄砂轮、划片刀、清洗剂</td></tr><tr><td>传感器</td><td>170 件</td><td>气体/温度/电流/距离/6D 姿态传感器</td></tr><tr><td>清洗设备</td><td>54 件</td><td>超声波清洗机、喷淋清洗机、液晶玻璃清洗机、光学玻璃清洗机</td></tr><tr><td>光伏</td><td>54 件</td><td>光伏玻璃、封装胶、智慧视窗、绝缘胶、抗蚀刻胶</td></tr><tr><td>材料/备件</td><td>511 件</td><td>TIM 导热材料（1W-10W）、薄膜、导电铜粉、TPU 复合材料</td></tr><tr><td>二手设备</td><td>465 件</td><td>TEL 刻蚀机、等离子沉积设备、磁致溅射仪、薄膜测试仪</td></tr><tr><td><strong>合计可见 SKU</strong></td><td><strong>1,400+</strong></td><td>—</td></tr></tbody></table><p><strong>六大核心产业</strong>（按官网\"六大核心产业\"分类）：半导体（Semiconductor）、光伏太阳能（Photovoltaic）、电池/储能（Battery）、汽车（Automotive）、系统/软件（System &amp; SW）、平板显示 FPD。<strong>代表热销物料</strong>（首页推荐位）：半导体晶圆加工 TC、高精度控温超纯水加热、介质刻蚀和硅刻蚀、ASSY RTNR、CHOKE RING、晶圆研磨抛光设备、氙灯、KAPTON 胶带、晶圆清洗测量仪器等。</p>"
        },
        {
          "id": "q-product-02",
          "q": "平台覆盖哪些设备品类（CVD/刻蚀/检测等）？",
          "a": "<p>覆盖泛半导体全品类设备：- <strong>CVD/PVD 薄膜沉积设备</strong>（韩国 Jusung/Wonik 品牌强项） - <strong>刻蚀设备</strong>（TEL/AMAT/LAM 等） - <strong>光刻设备</strong> - <strong>离子注入设备</strong> - <strong>检测量测设备</strong> - <strong>清洗设备</strong>（韩国 SEMES 强项） - <strong>封装设备</strong> - <strong>测试设备</strong>（PROBE CARD） - 各类备件和耗材</p>"
        },
        {
          "id": "q-product-03",
          "q": "如何快速找到需要的设备？三种方式效率对比？",
          "a": "<p><strong>三种方式</strong>：1. <strong>搜索框</strong> — 直接输入设备型号/类型/品牌 2. <strong>按品类筛选</strong> — CVD/刻蚀/检测/清洗 等 3. <strong>提交采购需求单</strong> — 由平台运营团队<strong>人工匹配</strong>推荐供应商<strong>效率对比</strong>：</p><table><thead><tr><th>方式</th></tr></thead><tbody><tr><td>① 搜索框</td><td>⚡⚡⚡</td><td>中</td><td>明确知道自己要什么</td></tr><tr><td>② 品类筛选</td><td>⚡⚡</td><td>中</td><td>想对比同类设备</td></tr><tr><td>③ 需求单</td><td>⚡</td><td>⚡⚡⚡</td><td><strong>采购方首次跨境</strong>、不确定供应商、需多供应商比价</td></tr></tbody></table>"
        },
        {
          "id": "q-product-04",
          "q": "\"国产替代\"专区是什么？包含哪些品类？",
          "a": "<p><strong>国产替代</strong>是平台的特色功能，帮助采购商寻找<strong>进口产品的国产替代方案</strong>。在国产替代搜索页面，输入或选择产品类别（如发泡胶、传感器、膜、导电银浆、蓝膜等），系统会匹配对应的国产供应商和产品。<strong>国产之光专区 Banner</strong>（广告位 A8）—— 平台针对国产替代趋势专门设置的展示位。</p>"
        },
        {
          "id": "q-product-05",
          "q": "\"海外优替\"专区有什么？",
          "a": "<p><strong>海外优替</strong>专区展示进口精品产品，分类为\"一般进口精品\"和<strong>\"海外高精品\"</strong>（海外高性价比产品替代海外尖端技术产品）。包括耐热性聚氨酯粘接结构胶等高品质进口物料，发货周期约 7 天，支持在线询价。<strong>进口产品系列</strong>：- <strong>海外高精品</strong> — 海外高性价比产品替代海外尖端技术产品 - <strong>海外产品</strong> — 一般进口海外商品</p>"
        },
        {
          "id": "q-product-06",
          "q": "产品详情页包含哪些信息？",
          "a": "<p>每个产品详情页包含完整的信息结构：- <strong>基本信息</strong> — 产品名称、订货编码（SKU）、生产状态（现货/待产）、发货周期 - <strong>规格选择</strong> — 多规格可选，显示各规格库存数量 - <strong>价格</strong> — 明码标价或\"在线询价\" - <strong>采购参数</strong> — 起订量（MOQ）、售卖单位（个/套/卷/KG/罐等） - <strong>产品内容</strong> — 产品概述、技术参数、行业知识、应用场景 - <strong>服务保障</strong> — 质量认证、快速发货、技术支持、售后服务 - <strong>操作入口</strong> — 立即询价、加入购物车、加入项目、技术咨询、<strong>申请样品 / 免费申样</strong></p>"
        },
        {
          "id": "q-product-07",
          "q": "\"物料编码\"功能怎么用？",
          "a": "<p>物料编码是企业内部的物料管理工具，位于<strong>[[materialCode]]</strong>。支持：- 按产品名称、订货编码、物料编码、供应商搜索 - <strong>新增物料编码</strong> — 手动添加企业内部编码 - <strong>模版导入</strong> — 批量导入物料编码表 - <strong>快速添加</strong> — 快捷录入适合企业将平台产品与内部 ERP 系统进行编码对应。</p>"
        }
      ]
    },
    {
      "id": "order",
      "icon": "🛒",
      "name": "采购与订单",
      "items": [
        {
          "id": "q-order-01",
          "q": "订单的生命周期是怎样的？",
          "a": "<p>订单在平台上的状态流转：也可能出现 `已取消` 或 `交易关闭` 状态。部分订单支持<strong>齐套发货</strong>（多品类统一发货）。</p>"
        },
        {
          "id": "q-order-02",
          "q": "如何下单采购？有哪几种方式？",
          "a": "<p>平台提供多种采购方式：- <strong>直接下单</strong> — 在产品详情页选择规格和数量，加入购物车后结算 - <strong>在线询价</strong> — 对未标价产品发起询价，与供应商沟通后下单 - <strong>快速下单</strong> — 通过首页快捷入口快速创建订单 - <strong>发布询盘</strong> — 发布采购需求，让供应商主动报价 - <strong>招标</strong> — 通过\"我的招标\"发起正式招标流程 - <strong>常购清单</strong> — 从常购产品中快速复购 - <strong>申请样品</strong> — 免费/付费申样后转为正式订单</p>"
        },
        {
          "id": "q-order-03",
          "q": "\"设计师申请单\"是什么？",
          "a": "<p>设计师申请单（又称采购申请单）是一个<strong>采购审批流程工具</strong>，适合需要内部审批的企业。状态包括：设计师提交采购申请后由管理员审核，审核通过后进入正式采购流程。</p>"
        },
        {
          "id": "q-order-04",
          "q": "常购清单有什么作用？",
          "a": "<p>常购清单帮助你<strong>快速复购</strong>常用物料。系统自动按<strong>近三个月、近半年、今年</strong>三个时间维度统计你的常购产品。从常购清单中可直接对产品发起询价或下单。</p>"
        },
        {
          "id": "q-order-05",
          "q": "投标和招标系统怎么用？",
          "a": "<p>平台内置完整的招标投标系统：- <strong>我的招标</strong> — 发起招标，设定需求规格，邀请供应商投标 - <strong>投标邀请</strong> — 接收供应商发来的投标邀请，查看投标状态（待投标/已结束/已终止） - <strong>合约订单</strong> — 中标后生成合约订单进行履约管理</p>"
        },
        {
          "id": "q-order-06",
          "q": "\"我的项目\"是什么功能？",
          "a": "<p><strong>我的项目</strong>位于采购管理菜单下，可以将多个相关产品归入同一个项目进行管理。在产品详情页可通过\"<strong>加入项目</strong>\"按钮将产品添加到指定项目，方便按项目维度追踪采购进度。</p>"
        },
        {
          "id": "q-order-07",
          "q": "采购流程大概需要多久？各环节时间分布",
          "a": "<p><strong>跨境设备采购</strong>（以韩国二手设备为例，标准流程约 30-45 天）：</p><table><thead><tr><th>环节</th></tr></thead><tbody><tr><td>需求匹配</td><td>3-5 天</td></tr><tr><td>价格谈判</td><td>3-7 天</td></tr><tr><td>合同签订</td><td>1-3 天</td></tr><tr><td>支付</td><td>2-3 天</td></tr><tr><td>韩国发货准备</td><td>3-5 天</td></tr><tr><td>海运（釜山/仁川 → 上海/深圳/天津）</td><td>3-7 天</td></tr><tr><td>中国清关</td><td>5-10 天</td></tr><tr><td>内陆运输</td><td>2-3 天</td></tr></tbody></table><p><strong>国内产品</strong>（标准库存品）发货时间：<strong>5 天内</strong>。平台 2026 年宣称商城所有产品<strong>最快一周内发货</strong>。<strong>进口及设备</strong>：约 30 天。</p>"
        },
        {
          "id": "q-order-08",
          "q": "设备到货后怎么验收？三步验收法",
          "a": "<p><strong>三步验收法</strong>（标准流程）：1. <strong>外观检查</strong> — 确认型号、数量、外观无损；与装箱单核对配件完整性 2. <strong>通电测试</strong> — 检查设备能否正常启动、关键参数是否达标 3. <strong>工艺测试</strong> — 按合同约定的工艺参数进行试运行（如开机率 &gt; 90% 等可量化指标）<strong>验收争议处理</strong>：- 如发现设备与合同不符或存在质量问题，<strong>平台将协助您与供应商协商解决</strong> - 担保交易资金在此期间<strong>不会释放</strong>给供应商 - 合同中约定的验收标准（开机率、关键参数偏差等）是关键依据</p>"
        }
      ]
    },
    {
      "id": "sample",
      "icon": "🧪",
      "name": "样品申请",
      "items": [
        {
          "id": "q-sample-01",
          "q": "平台的样品申请规则是什么？免费申样怎么申请？",
          "a": "<p>平台提供<strong>付费申请样品</strong>和<strong>免费申请样品</strong>两种通道。<strong>免费申样规则</strong>（重点）：- 需通过用户主动申请，根据客服指引提供相关资质信息 - <strong>经普恩志官方审核通过后</strong>开放申样通道 - 用户提交样品申请后，由产品所属供应商进行审核及安排发货 - 用户收到样品后<strong>需在样品订单页面填写测试报告反馈</strong> - <strong>样品无需寄回</strong> - 平台审核测试报告通过后，用户可申请<strong>全额退款</strong><strong>免费申样所需资质</strong>：- 营业执照 - 联系人姓名、电话 - 企业法人（负责人）身份证正反面照片<strong>付费申样规则</strong>：- 资质要求：企业用户（营业执照 + 法人身份证）或个人用户（联系人 + 身份证） - 用户提交申样订单并完成付款，供应商审核后发货 - 样品无需寄回</p>"
        }
      ]
    },
    {
      "id": "cross",
      "icon": "🚚",
      "name": "跨境贸易（中韩双向专题）",
      "items": [
        {
          "id": "q-cross-01",
          "q": "韩国进口设备和国产设备怎么选？三个核心因素",
          "a": "<p><strong>三因素决策法</strong>：1. <strong>工艺精度</strong> — 高端制程进口仍有优势；成熟制程国产差距缩小中 2. <strong>预算</strong> — 进口设备价格高但技术成熟；二手进口设备<strong>性价比最高</strong>（价格通常为新设备的 <strong>30%-50%</strong>） 3. <strong>交付和售后</strong> — 国产售后响应快；进口需考虑海运周期（3-7 天）和海外售后成本</p>"
        },
        {
          "id": "q-cross-02",
          "q": "从韩国买二手半导体设备值不值得？哪些适合买？",
          "a": "<p><strong>值得买（强推荐）</strong>：- <strong>成熟制程设备</strong>（28nm 及以上）—— 二手和翻新设备足以胜任 - <strong>CVD/PVD 沉积设备</strong> —— 韩国 Jusung、Wonik 等品牌二手设备性价比极高 - <strong>清洗设备</strong> —— 韩国 SEMES（三星子公司）二手清洗设备技术成熟 - <strong>检测量测设备</strong> —— 非前沿制程的检测设备二手可满足需求 - <strong>标准备件和耗材</strong> —— 与二手设备配套采购<strong>谨慎考虑</strong>：- 先进制程设备（14nm 以下）—— 来源稀缺且价格高 - 高端光刻机 —— 二手市场受出口管制严格 - 良率要求极高的量产线 —— 建议优先新设备 + 原厂保修<strong>性能数据</strong>：韩国翻新设备可达到<strong>新设备 85-95% 的性能</strong>，价格为新设备的 <strong>30-50%</strong>。</p>"
        },
        {
          "id": "q-cross-03",
          "q": "韩国二手设备市场的规模和特点？",
          "a": "<p><strong>2025 年全球二手半导体设备市场规模约 150 亿美元，韩国市场占比约 35%</strong>。<strong>主要来源</strong>：三星（平泽/华城/器兴）和 SK 海力士（利川/清州）的产线升级淘汰设备。<strong>韩国二手设备特点</strong>：- <strong>使用年限短</strong> —— 三星/SK 设备通常使用 3-7 年即淘汰（设备设计寿命通常 10-15 年） - <strong>品类齐全</strong> —— 从光刻、CVD、刻蚀到检测封装，全品类可寻 - <strong>翻新产业成熟</strong> —— 韩国有完善的设备翻新产业链 - <strong>供给稳定</strong> —— 韩国半导体企业持续投资扩产，二手设备供给源源不断</p>"
        },
        {
          "id": "q-cross-04",
          "q": "韩国设备进口需要什么手续和资质？5 步完整流程",
          "a": "<p><strong>5 步流程</strong>：1. <strong>寻源与供应商筛选</strong>（3-7 天）—— B2B 平台搜索 &gt; SEMICON Korea 展会 &gt; 人脉推荐；至少 3 家比价 2. <strong>验货与合同签订</strong>（3-7 天）—— 委托韩国本地验货机构（费用 1-2%）；明确合同关键条款 3. <strong>支付与外汇</strong>（2-5 天）—— 平台担保交易 &gt; 信用证 L/C &gt; 分批 T/T；<strong>不推荐 100% 预付 T/T</strong> 4. <strong>物流与清关</strong>（15-25 天）—— 海运 3-7 天；清关文件齐备 5. <strong>到货验收</strong>（2-5 天）—— 外观 → 通电 → 工艺测试<strong>中国进口方需要资质</strong>：- 进出口经营权（商务部备案） - 海关进出口货物收发货人备案 - 外汇管理局名录登记（A 类企业） - 如涉及自动进口许可机电产品，需办理自动进口许可证<strong>韩国出口方需要</strong>：- 韩国贸易业者登记 - 如设备受 <strong>Wassenaar 管制</strong>，需韩国产业通商资源部出口许可<strong>清关文件</strong>：商业发票、装箱单、提单、原产地证、设备技术说明、进口许可证（如需）<strong>关税</strong>：半导体设备 HS 编码主要在 <strong>8486 系列</strong>，部分设备<strong>零关税</strong>，0-10% 不等<strong>增值税</strong>：<strong>13%</strong>（一般纳税人可抵扣）</p>"
        },
        {
          "id": "q-cross-05",
          "q": "跨境贸易额外成本估算（100 万美元二手 CVD 案例）",
          "a": "<p><strong>一台 100 万美元的韩国二手 CVD 设备，到中国工厂总成本约 121 万美元</strong>：</p><table><thead><tr><th>成本项</th></tr></thead><tbody><tr><td>设备价款</td><td>100 万美元</td></tr><tr><td>国际海运（釜山 → 上海，40 尺柜）</td><td>约 2,500 美元</td></tr><tr><td>海运保险（货值 0.3%）</td><td>约 3,000 美元</td></tr><tr><td>中国进口关税（假设 5%）</td><td>约 5 万美元</td></tr><tr><td>进口增值税（13%，可抵扣）</td><td>约 13.65 万美元（可抵扣）</td></tr><tr><td>报关/港杂/国内运输</td><td>约 5,000 美元</td></tr><tr><td>第三方验货</td><td>约 1.5 万美元</td></tr><tr><td><strong>合计</strong></td><td><strong>约 121 万美元</strong>（含可抵扣增值税）</td></tr><tr><td><strong>不含增值税的硬成本</strong></td><td><strong>约 107 万美元</strong>（设备价上浮约 7%）</td></tr></tbody></table>"
        },
        {
          "id": "q-cross-06",
          "q": "跨境贸易常见风险与对策",
          "a": "<table><thead><tr><th>风险</th></tr></thead><tbody><tr><td>汇率波动（韩元/人民币）</td><td>合同约定汇率基准或使用美元计价</td></tr><tr><td>海运损坏</td><td>购买海运保险（保费 0.3%-0.5%，保障高）</td></tr><tr><td>清关延误（文件不全、HS 归类错误）</td><td>提前将所有清关文件交报关行预审</td></tr><tr><td>设备与合同不符</td><td><strong>使用平台担保交易</strong>——验收不合格资金不释放</td></tr></tbody></table>"
        },
        {
          "id": "q-cross-07",
          "q": "平台上的价格是最终价格吗？",
          "a": "<p><strong>不是最终价格</strong>。平台展示的是供应商的<strong>参考报价</strong>。最终价格需与供应商直接谈判确定，受采购量、付款条件、售后要求等因素影响。<strong>平台不干预价格谈判过程</strong>。</p>"
        },
        {
          "id": "q-cross-08",
          "q": "哪些设备品类价格区间参考？",
          "a": "<p><strong>CVD（化学气相沉积）设备</strong>：- 新设备（韩国 Jusung/Wonik）：50 万-300 万美元/台 - 二手（使用 3-7 年）：15 万-120 万美元/台 - 翻新设备：20 万-150 万美元/台（含 3-12 月保修）<strong>PVD（物理气相沉积）设备</strong>：- 新设备：80 万-500 万美元/台 - 二手设备：30 万-200 万美元/台<strong>刻蚀设备</strong>（TEL/AMAT/LAM 等）：- 新设备：100 万-600 万美元/台 - 二手设备：40 万-250 万美元/台 - ⚠️ 高端刻蚀设备受出口管制更严格<strong>清洗设备</strong>（韩国 SEMES）：- 新设备：30 万-200 万美元/台 - 二手设备：10 万-80 万美元/台<strong>检测量测设备</strong>：- 新设备：50 万-500 万美元/台（视精度等级） - 二手设备：20 万-200 万美元/台</p>"
        },
        {
          "id": "q-cross-09",
          "q": "二手设备能保修吗？",
          "a": "<p>韩国二手设备通常<strong>无原厂保修</strong>，但：- 平台合作的<strong>翻新商</strong>可提供 <strong>3-12 个月</strong>的有限保修服务 - 保修范围视设备类型和翻新深度而定 - 覆盖关键部件的故障维修 - 具体保修条款在<strong>合同中约定</strong><strong>翻新程度分级</strong>（影响价格和质量）：- <strong>Clean Only</strong> — 只清洗（最便宜） - <strong>Refurbished</strong> — 标准翻新，换易损件 - <strong>Rebuilt</strong> — 深度翻新，换关键部件 + 校准（最贵，溢价 30-50%）</p>"
        }
      ]
    },
    {
      "id": "supplier",
      "icon": "🤝",
      "name": "供应商与代理商合作",
      "items": [
        {
          "id": "q-supplier-01",
          "q": "供应商如何入驻平台？需要什么资质？",
          "a": "<p><strong>入驻完全免费</strong>（入驻手续费 ¥0）。流程：1. 访问平台注册账户并完成<strong>企业认证</strong> 2. 通过首页\"供应商入驻\"入口提交入驻申请 3. 上传<strong>产品信息、价格与库存</strong> 4. 平台审核通过后即可通过认证代理商网络销往全球 70+ 国家<strong>入驻所需资料</strong>（韩国版）：- 营业执照 - 产品认证证书 - 交易合同签订（平台合作） - 产品上传（价格、库存、销售启动）<strong>平台提供</strong>：- 品牌曝光 - AI 数据驱动市场分析 - 技术专家服务连接 - 综合物流与多国支付结算 - 每月中国大型展会产品介绍与宣传</p>"
        },
        {
          "id": "q-supplier-02",
          "q": "供应商会员体系（基础/标准/战略）是什么？",
          "a": "<p>平台供应商分<strong>三档会员</strong>，匹配不同的广告位权益和增值服务：</p><table><thead><tr><th>等级</th></tr></thead><tbody><tr><td><strong>战略会员</strong></td><td>原厂、大型授权分销商</td><td><strong>A1 首页主视觉轮播</strong>（保底 1 个，免费/象征性收费）</td><td>A7 搜索置顶 CPC 优先权 + A3 行业卡片独家冠名</td></tr><tr><td><strong>标准会员</strong></td><td>中型分销商、授权代理</td><td><strong>A4 精选产品推荐</strong>（保底 3 个，免费）</td><td>A7 搜索置顶固定包月 + A2 分类侧边栏</td></tr><tr><td><strong>基础会员</strong></td><td>新入驻或小型贸易商</td><td>无免费广告位</td><td>A4 精选产品 B 级位 + A5 资讯底部</td></tr></tbody></table><p><strong>整合套餐示例</strong>（年费）：- <strong>标准会员-流量加速版</strong> — 标准会员基础服务 + A4 免费 + A7 固定包月（年费 7 折）≈ <strong>标准年费 + ¥70,560</strong> - <strong>标准会员-行业聚焦版</strong> — + A3 行业卡片（年费 7 折）≈ <strong>标准年费 + ¥47,040</strong> - <strong>战略会员-品牌领航版</strong> — 战略会员全服务 + A1 + A8 免费 + 定制化内容 ≈ <strong>战略年费 + ¥100,000 增值溢价</strong></p>"
        },
        {
          "id": "q-supplier-03",
          "q": "广告位规格与定价是什么？",
          "a": "<p><strong>广告位分级与定价（人民币/月）</strong>：</p><table><thead><tr><th>级别</th></tr></thead><tbody><tr><td><strong>S 级</strong></td><td>A1 首页主视觉轮播</td><td>¥25,000</td><td>¥20,000</td><td>¥15,000 或免费</td></tr><tr><td><strong>A 级</strong></td><td>A7 搜索置顶</td><td>¥12,000</td><td>¥9,600</td><td>¥7,200</td></tr><tr><td><strong>A 级</strong></td><td>A3 行业/品类卡片</td><td>¥8,000</td><td>¥6,400</td><td>¥4,800</td></tr><tr><td><strong>A 级</strong></td><td>A8 国产之光专区</td><td>¥10,000</td><td>¥8,000</td><td>¥6,000</td></tr><tr><td><strong>B 级</strong></td><td>A4 精选产品</td><td>¥4,000</td><td>免费（3 个）</td><td>免费（5 个）</td></tr><tr><td><strong>B 级</strong></td><td>A2 分类侧边栏</td><td>¥2,500</td><td>¥2,000</td><td>¥1,500</td></tr><tr><td><strong>B 级</strong></td><td>A5 资讯底部</td><td>¥1,500</td><td>¥1,200</td><td>¥900</td></tr></tbody></table><p><strong>长期折扣</strong>：季度 9 折、半年 8.5 折、全年 7 折。<strong>A1 规格</strong>：1200×400px（PC）；<strong>A3 规格</strong>：Logo/小图+文字链 300×150px；<strong>A8 规格</strong>：960×120px。</p>"
        },
        {
          "id": "q-supplier-04",
          "q": "代理商如何加盟？有什么优势？",
          "a": "<p><strong>代理商加盟模式为\"轻资产零库存\"</strong>：- 平台 AI 精准匹配客户需求 - 专属技术培训支持 - <strong>无需囤货</strong>，平台负责跨境履约 - 对接认证供应商的优质货源访问 <strong>g-png.com 官网</strong>的\"行业合作\"页面或通过平台\"供应商入驻\"入口申请。</p>"
        },
        {
          "id": "q-supplier-05",
          "q": "代理商 90 天陪跑计划是什么？具体怎么走？",
          "a": "<p><strong>普恩志代理商 90 天成长计划</strong> 是平台扶持代理商用户的<strong>专项计划</strong>，分<strong>三个 30 天阶段</strong>：<strong>阶段一（Day 1-30）：基础建设与启动</strong>- 签约 + Onboarding（线上/线下培训，介绍平台、产品线、供应链政策） - 设定 90 天销售指标（营收、订单量、毛利率） - 开通平台后台权限（报价、需求发布、库存查询） - 普恩志协助引荐潜在客户 - 专属客户经理 + 技术顾问全程陪跑<strong>阶段二（Day 31-60）：业务拓展与能力提升</strong>- 推进客户转化，签订首批订单 - 安排技术培训（产品特性、工艺参数、设计方案） - 平台协助协调生产/仓储/交付节点 - 优化库存支持策略（区域备货/安全库存） - 首批订单提供<strong>启动补贴或返点激励</strong><strong>阶段三（Day 61-90）：规模化与持续增长</strong>- 推动第二批及以上订单 - 共同筹划长周期合作项目 - 协助代理商招聘/培养销售+技术团队 - 颁发<strong>返点、市场基金、联合公关资源</strong>等奖励 - 评估 90 天目标，纳入下一阶段（6/12 个月）成长规划<strong>KPI 衡量</strong>：新增客户数 / 90 天订单金额 / 客户响应满意度 / 转化率<strong>激励与共赢机制</strong>：销售返点、市场发展基金、技术扶持、优先供货、品牌联合推广</p>"
        },
        {
          "id": "q-supplier-06",
          "q": "代理商转化路径的三个核心是什么？",
          "a": "<p>来自平台《代理商用户注册转化路径优化方案》，三个核心：1. <strong>资源对接</strong> — 平台 AI 匹配客户需求，代理商无需自己找客户 2. <strong>技术支持</strong> — 专属技术培训 + 平台技术顾问 3. <strong>零库存</strong> — 不需要囤货，平台负责跨境履约</p>"
        },
        {
          "id": "q-supplier-07",
          "q": "专家/学者如何加入平台？",
          "a": "<p>行业专家和学者可通过<strong>专家注册</strong>通道加入平台，获得：- 官方认证身份 - 技术变现机会 - 参与全球半导体产业项目 - 为终端客户提供现场技术支持 - 行业沙龙、研讨会参与机会</p>"
        },
        {
          "id": "q-supplier-08",
          "q": "如何关注和管理供应商？",
          "a": "<p>在<strong>[[followSupplier]]</strong>中查看已关注的供应商列表。每个供应商页面展示：- <strong>热销推荐</strong> — 该供应商的热门产品 - <strong>本月上新</strong> — 最新上架产品 - 可直接对推荐产品发起询价或加购</p>"
        },
        {
          "id": "q-supplier-09",
          "q": "认证企业专区是什么？",
          "a": "<p><strong>认证企业</strong>是导航栏中的专区入口，展示已完成企业认证的供应商和采购商。认证企业享有更高信任等级，在交易匹配中获得<strong>优先展示</strong>，并可进行交易评价，构建可信商业网络。</p>"
        }
      ]
    },
    {
      "id": "pay",
      "icon": "💰",
      "name": "支付与财务",
      "items": [
        {
          "id": "q-pay-01",
          "q": "平台支持哪些支付方式？",
          "a": "<p><strong>B2B 平台支付方式</strong>：- <strong>支付宝</strong> — 集成 APP 支付客户端 SDK - <strong>微信支付</strong> — 集成微信 OpenSDK - <strong>信用支付</strong> — 通过授信申请获得信用额度后使用（需设置支付密码） - <strong>银行转账</strong> — 通过信用账单系统进行汇款 - <strong>银行电汇（T/T）</strong> — 跨境采购常用 - <strong>平台担保交易</strong> — 资金由第三方托管，大额交易强烈推荐 - <strong>信用证 L/C</strong> — 大额跨境交易备选<strong>支付方式优先级推荐</strong>（跨境设备）：</p>"
        },
        {
          "id": "q-pay-02",
          "q": "信用账单系统如何运作？",
          "a": "<p>信用账单是平台的企业授信支付工具：1. 先在<strong>授信申请</strong>页面提交申请，获取信用额度 2. 下单时可选择信用支付（需输入支付密码） 3. 账单状态：`待结算` → `待审核` → `已结算` / `已逾期` 4. 每个账单有明确的<strong>最后结算日</strong> 5. 账单记录包含：账单号、订单号、金额、汇款时间、确认时间</p>"
        },
        {
          "id": "q-pay-03",
          "q": "平台担保交易如何保护买卖双方？",
          "a": "<p><strong>平台担保交易机制</strong>：1. 采购方付款至<strong>第三方托管账户</strong>（非直接到供应商） 2. 供应商按合同发货 3. 采购方按三步验收法（外观/通电/工艺）进行验收 4. 验收合格 → 平台释放资金给供应商 5. 验收不合格 → 平台<strong>协助协商</strong>，资金<strong>不会释放</strong>，可走退货退款流程</p>"
        },
        {
          "id": "q-pay-04",
          "q": "如何管理发票和合同？",
          "a": "<p>在<strong>[[finance]]</strong>中：- <strong>发票</strong> — 查看和管理交易发票 - <strong>合同</strong> — 查看和管理交易合同企业采购全流程的财务凭证都可以在平台上统一管理。</p>"
        },
        {
          "id": "q-pay-05",
          "q": "退货/退款如何处理？",
          "a": "<p>进入<strong>[[afterSalesReturn]]/退款</strong>页面，可提交退货或退款申请。具体退货政策和时效请参考帮助中心或联系客服确认。<strong>特别说明</strong>（免运费专区）：</p>"
        }
      ]
    },
    {
      "id": "know",
      "icon": "📚",
      "name": "行业知识与资源",
      "items": [
        {
          "id": "q-know-01",
          "q": "平台提供哪些行业知识内容？",
          "a": "<p>平台设有<strong>行业知识</strong>专区，内容涵盖：- <strong>行业报告深度分析</strong> — 泛半导体产业结构化综合报告系列 - <strong>新闻资讯</strong> — 行业动态与解读 - <strong>知识宝库</strong> — 技术文章（深紫外光刻、X 射线光刻、CMP 抛光液等）按行业分类浏览：半导体、FPD、光伏、电池&amp;储能。</p>"
        },
        {
          "id": "q-know-02",
          "q": "泛半导体产业结构化综合报告包含什么？",
          "a": "<p>这是一套系统的行业研究报告合集，分为三大篇章：<strong>一、半导体核心产业链</strong>（191 份报告）- 宏观与政策：AI 驱动力（88 份）+ 市场周期（33 份）+ 国产替代（70 份） - 设计与软件层、制造前端等<strong>二、新兴电子与应用领域</strong>- 汽车电子、新能源与光电、物联网与计算<strong>三、配套基础设施与通用材料</strong>- 电子化学品与材料、计算基础设施、PCB 与 IC 载板</p>"
        },
        {
          "id": "q-know-03",
          "q": "\"资料下载\"快捷入口是什么？",
          "a": "<p>顶部导航栏的\"资料下载\"区域提供按产品品类快捷搜索：设备、传感器、胶带、灭火棒、二氧化碳清洗机、导电银浆、蓝膜、工业核心板、气体处理、二手设备、导热硅胶、导电金属粉末、光谱仪等。点击即可跳转到对应产品的搜索结果页。</p>"
        },
        {
          "id": "q-know-04",
          "q": "是否可以收藏文章和产品？",
          "a": "<p>可以。在<strong>关注中心</strong>中管理：- <strong>产品收藏</strong> — 收藏感兴趣的产品，方便后续对比和询价 - <strong>文章收藏</strong> — 收藏行业报告和技术文章 - <strong>我的足迹</strong> — 自动记录浏览历史（251 条上限滚动），支持删除和直接加购</p>"
        },
        {
          "id": "q-know-05",
          "q": "平台是否支持多语言？覆盖哪些站点？",
          "a": "<p><strong>多语言支持</strong>：- <strong>企业品牌官网</strong>（g-png.com）— <strong>5 种语言</strong>：中文、English、한국어（韩语）、日本語（日语）、Español（西班牙语） - <strong>B2B 交易平台</strong>： - 主站（global-png.com）— 中文为主 - 日文站：<strong>global-png.com/jp/</strong> - 韩文站：<strong>global-png.co.kr/</strong> - 部分韩国供应商产品信息含韩文</p>"
        }
      ]
    },
    {
      "id": "new",
      "icon": "🎁",
      "name": "新用户活动与增值服务",
      "items": [
        {
          "id": "q-new-01",
          "q": "免运费专区规则是什么？新用户怎么享受？",
          "a": "<p><strong>新用户专享权益</strong>：1. <strong>参与资格</strong> —— 限平台注册时间 ≤ 30 天的<strong>未下单</strong>新用户（以账户首次注册日期为准，且无历史订单记录） 2. <strong>免运费专区覆盖范围</strong> —— 专属活动页面展示的全部商品 3. <strong>所有商品享受\"零运费\"优惠</strong>（商品价格不含运费，系统自动减免）<strong>特别说明</strong>：- ⚠️ <strong>本权益仅限首单使用</strong>，成功下单后自动失效 - ⚠️ 若发生退货/退款，运费权益不予返还 - ⚠️ 系统保留异常订单处置权 - 专区商品<strong>仅可选择一款</strong>，只能下单<strong>一件</strong>商品</p>"
        },
        {
          "id": "q-new-02",
          "q": "平台还有哪些增值服务？",
          "a": "<p><strong>核心价值输出</strong>（来自\"平台核心价值\"）：<strong>产品层面</strong>：- 海外高精品 / 海外产品 / 国产化产品 / 国产产品 - 实现泛半导体行业<strong>全行业产品覆盖</strong> - 根据用户应用场景实现产品匹配<strong>服务支持层面</strong>：- 专家指导样品测试，缩短测试流程 - 根据应用场景分析所需技术与产品 - 帮助代理商/用户按需求寻找产品 - <strong>部分商品支持免费申请样品</strong> - 用户需求不明确时，提供<strong>选型指导服务</strong><strong>全链路供应资质</strong>：- 丰富的海外供应商资源 - 大量国内供应商（国产替代 + 一般商品） - <strong>进口资质</strong>（特殊海外商品的进口许可） - <strong>海关资质</strong>（特殊商品入关资质） - <strong>外汇储备</strong>（满足进口商品所需资金条件）<strong>行业资讯</strong>：- 泛半导体行业知识科普 - 行业新闻：最新动向、资讯动态 - 热销产品：泛半导体行业热门商品需求及商业线索 - 行业协会资讯<strong>人脉资源</strong>：- 加入多个行业协会 - 海量同行业群 - 发展国内外代理商 - 指导代理商拓展人脉<strong>技术背书</strong>：- 1 对 1 专家在线支持，解决选型难题 - 高纯石英、先进封装等深度技术资料</p>"
        }
      ]
    }
  ]
};
