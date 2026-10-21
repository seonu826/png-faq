/**
 * Global-PNG FAQ 페이지 기능
 *
 * - 데이터: js/faq-data.zh.js 의 window.FAQ_DATA / window.FAQ_LINKS 를 읽어서 화면을 그린다.
 * - 이 파일에는 문구를 쓰지 않는다 (문구는 데이터 파일에만 → 한국어판은 데이터 파일만 바꾸면 됨).
 * - 상태 클래스: is-open(펼침), is-active(현재 분류), is-target(URL로 들어온 질문), is-show(맨 위로 버튼 보임)
 *
 * [완료] 3-1 화면 그리기 / 3-2 링크 바꾸기 / 3-3 접기·펼치기 / 3-4 분류 클릭 이동(CSS) / 3-5 스크롤 연동 강조
 * [TODO] 3-6 맨 위로 버튼 / 3-7 URL 바로가기 / 3-8 검색 / 3-9 모바일 분류 버튼
 */
(function () {
  'use strict';

  /* =========================================================
     0. 준비: 데이터와 화면 요소 찾아 두기
     ========================================================= */
  const DATA = window.FAQ_DATA;
  const LINKS = window.FAQ_LINKS || {};

  // index.html 에서 id 로 찾아 둔다 (여러 번 찾지 않도록 한 곳에 모음)
  const el = {
    nav: document.getElementById('categoryNav'),
    list: document.getElementById('faqList'),
    mobileNavList: document.getElementById('mobileNavList'),
    mobileNavCurrent: document.getElementById('mobileNavCurrent'),
    mobileNavToggle: document.getElementById('mobileNavToggle'),
    searchInput: document.getElementById('searchInput'),
    searchClear: document.getElementById('searchClear'),
    searchResult: document.getElementById('searchResult'),
    searchEmpty: document.getElementById('searchEmpty'),
    backToTop: document.getElementById('backToTop')
  };

  // 데이터 파일이 없거나 순서가 바뀌어 먼저 실행되면 여기서 멈추고 원인을 알려준다
  if (!DATA || !DATA.categories) {
    console.error('[FAQ] FAQ_DATA 가 없습니다. index.html 에서 faq-data.zh.js 를 faq.js 보다 먼저 불러왔는지 확인하세요.');
    return;
  }


  /* =========================================================
     공통 도구
     ========================================================= */

  // 글자를 HTML 에 넣기 전에 < > & " ' 를 안전한 글자로 바꾼다.
  // (질문·분류 이름처럼 "글자"로 넣을 곳에 사용. 답변은 원래 HTML 이라 쓰지 않음)
  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }


  /* =========================================================
     3-2. 답변 속 [[키]] → 기능 이동 링크
     ========================================================= */

  // 예: "<p>进入[[enterpriseAuth]]页面</p>"
  //  → url 있음: <a class="faq-link" href="url" target="_blank" rel="noopener">用户中心 → 设置 → 企业认证</a>
  //  → url 없음: 用户中心 → 设置 → 企业认证 (글자만)
  function renderLinks(html) {
    return html.replace(/\[\[(\w+)]]/g, function (match, key) {
      const link = LINKS[key];

      if (!link) {
        console.warn('[FAQ] FAQ_LINKS 에 없는 키:', key);
        return match; // 오타를 바로 찾을 수 있게 [[키]] 를 그대로 둔다
      }

      const label = escapeHtml(link.label);
      if (!link.url) {
        return label; // 주소를 아직 못 찾은 링크는 글자만
      }

      return '<a class="faq-link" href="' + escapeHtml(link.url) + '" target="_blank" rel="noopener">' + label + '</a>';
    });
  }


  /* =========================================================
     3-1. 화면 그리기 (분류 목록 + Q&A)
     ========================================================= */

  // 분류 링크 하나: <li><a class="faq-nav__link" href="#about" data-id="about">关于平台<span>9</span></a></li>
  function navItemHtml(category) {
    return (
      '<li>' +
        '<a class="faq-nav__link" href="#' + category.id + '" data-id="' + category.id + '">' +
          escapeHtml(category.name) +
          '<span class="faq-nav__count">' + category.items.length + '</span>' +
        '</a>' +
      '</li>'
    );
  }

  // 질문 하나
  function itemHtml(item) {
    return (
      '<div class="faq-item" id="' + item.id + '">' +
        '<button type="button" class="faq-question" aria-expanded="false" aria-controls="' + item.id + '-answer">' +
          '<span class="faq-question__badge">Q</span>' +
          '<span class="faq-question__text">' + escapeHtml(item.q) + '</span>' +
          '<span class="faq-question__arrow" aria-hidden="true">▼</span>' +
        '</button>' +
        '<div class="faq-answer" id="' + item.id + '-answer">' + renderLinks(item.a) + '</div>' +
      '</div>'
    );
  }

  // 분류 하나 (제목 + 그 안의 질문들)
  function sectionHtml(category) {
    return (
      '<section class="faq-section" id="' + category.id + '">' +
        '<h2 class="faq-section__title">' +
          '<span class="faq-section__icon" aria-hidden="true">' + (category.icon || '') + '</span>' +
          escapeHtml(category.name) +
        '</h2>' +
        category.items.map(itemHtml).join('') +
      '</section>'
    );
  }

  function render() {
    const navHtml = DATA.categories.map(navItemHtml).join('');

    el.nav.innerHTML = navHtml;
    if (el.mobileNavList) {
      el.mobileNavList.innerHTML = '<ul class="faq-nav__list">' + navHtml + '</ul>'; // 모바일 목록도 같은 HTML 재사용
    }
    el.list.innerHTML = DATA.categories.map(sectionHtml).join('');
  }


  /* =========================================================
     3-3. 접기 / 펼치기
     ========================================================= */

  // 질문 하나를 열거나 닫는다. open 을 안 넘기면 반대로 바꾼다(토글).
  function setOpen(itemEl, open) {
    const isOpen = (open === undefined) ? !itemEl.classList.contains('is-open') : open;
    itemEl.classList.toggle('is-open', isOpen);
    itemEl.querySelector('.faq-question').setAttribute('aria-expanded', String(isOpen));
  }

  // 질문 60개에 각각 이벤트를 달지 않고, 부모(#faqList) 하나에만 단다 (이벤트 위임)
  function initToggle() {
    el.list.addEventListener('click', function (e) {
      const question = e.target.closest('.faq-question');
      if (!question) return; // 답변 안의 링크 등 다른 곳 클릭은 무시
      setOpen(question.closest('.faq-item'));
    });
  }


  /* =========================================================
     3-4. 분류 클릭 → 해당 위치로 이동
     ========================================================= */
  // JS 필요 없음: 분류 링크가 href="#about" 이고,
  // CSS 의 html { scroll-behavior: smooth } + .faq-section { scroll-margin-top } 이 부드럽게 이동시킨다.


  /* =========================================================
     3-5. 스크롤하면 왼쪽 분류 자동 강조
     ========================================================= */

  // 지금 보고 있는 분류를 강조 (PC 왼쪽 목록 + 모바일 목록 + 모바일 버튼 글자)
  function setActiveCategory(id) {
    const links = document.querySelectorAll('.faq-nav__link');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.toggle('is-active', links[i].getAttribute('data-id') === id);
    }

    if (el.mobileNavCurrent) {
      const category = DATA.categories.filter(function (c) { return c.id === id; })[0];
      if (category) el.mobileNavCurrent.textContent = category.name;
    }
  }

  function initScrollSpy() {
    const sections = el.list.querySelectorAll('.faq-section');

    // 오래된 브라우저(IntersectionObserver 없음)는 강조만 빠지고 나머지는 정상 동작
    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    // 화면 위쪽 20%~30% 사이 띠에 걸친 분류를 "지금 보고 있는 분류"로 본다
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActiveCategory(entry.target.id);
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    for (let i = 0; i < sections.length; i++) {
      observer.observe(sections[i]);
    }

    setActiveCategory(sections[0].id); // 처음엔 첫 분류 강조
  }


  /* =========================================================
     3-6. 맨 위로 버튼                                   ← TODO
     ========================================================= */
  function initBackToTop() {
    // TODO
    // 1) index.html 에서 버튼이 hidden 이므로 먼저 el.backToTop.hidden = false;
    //    (보이기/숨기기는 CSS 의 .is-show 로 한다 → 서서히 나타나는 효과)
    // 2) window 에 'scroll' 이벤트:
    //    window.scrollY > window.innerHeight 이면 el.backToTop.classList.add('is-show'), 아니면 remove
    // 3) 버튼 'click' → window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  /* =========================================================
     3-7. URL 로 특정 질문 바로 열기 (#q-order-03)        ← TODO
     ========================================================= */
  function openFromHash() {
    // TODO
    // 1) const id = location.hash.slice(1);   // "#q-order-03" → "q-order-03"
    // 2) id 가 'q-' 로 시작하지 않으면 return (분류 #order 는 CSS 가 알아서 이동)
    // 3) const item = document.getElementById(id); 없으면 return
    // 4) setOpen(item, true);  ← 위에서 만든 함수 재사용
    // 5) item.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // 6) item.classList.add('is-target'); setTimeout 으로 2초 뒤 remove
  }

  function initHash() {
    // TODO
    // 1) openFromHash();  ← 페이지 처음 열 때
    // 2) window.addEventListener('hashchange', openFromHash);  ← 페이지 안에서 주소만 바뀔 때
  }


  /* =========================================================
     3-8. 검색                                            ← TODO (가장 어려움)
     ========================================================= */
  function initSearch() {
    // TODO 순서
    // 1) el.searchInput 에 'input' 이벤트 + 디바운스(300ms): setTimeout / clearTimeout
    // 2) 검색어가 비면 → render(); initScrollSpy(); 로 원래대로 + 안내/지우기 버튼 숨김
    // 3) 질문마다 item.textContent.toLowerCase().includes(검색어.toLowerCase()) 로 비교
    //    - 맞으면 setOpen(item, true), 아니면 item.hidden = true
    //    - 안에 보이는 질문이 하나도 없는 .faq-section 도 hidden = true
    // 4) 강조: ⚠ innerHTML.replace 금지 (태그가 깨지고 XSS 위험)
    //    → document.createTreeWalker(item, NodeFilter.SHOW_TEXT) 로 "글자 노드만" 돌면서
    //      맞는 부분을 splitText 로 잘라 document.createElement('mark') 로 감싼다
    // 5) 결과 수: el.searchResult.textContent = '找到 N 条相关问题'; hidden = false
    //    0개면 el.searchEmpty.hidden = false
    // 6) el.searchClear 클릭 → 검색창 비우고 2) 와 같이 원래대로
  }


  /* =========================================================
     3-9. 모바일 분류 버튼                                 ← TODO
     ========================================================= */
  function initMobileNav() {
    // TODO
    // ⚠ 먼저 index.html 28줄 aria-controls="MobileNavList" → "mobileNavList" (소문자 m) 로 고치기
    // 1) el.mobileNavToggle 'click' → el.mobileNavList.hidden 반대로,
    //    aria-expanded 도 'true' / 'false' 로 같이 바꾸기
    // 2) el.mobileNavList 'click' → e.target.closest('.faq-nav__link') 이면 목록 닫기 (hidden = true)
    //    (이동은 href="#분류" 가 알아서 함)
  }


  /* =========================================================
     시작
     ========================================================= */
  function init() {
    render();          // 3-1, 3-2
    initToggle();      // 3-3
    initScrollSpy();   // 3-5
    initBackToTop();   // 3-6 TODO
    initHash();        // 3-7 TODO
    initSearch();      // 3-8 TODO
    initMobileNav();   // 3-9 TODO
  }

  init();
})();
