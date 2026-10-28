/**
 * Global-PNG FAQ 页面功能
 *
 * - 数据：读取 js/faq-data.zh.js 中的 window.FAQ_DATA / window.FAQ_LINKS 渲染页面。
 * - 本文件不写页面文案（文案只放在数据文件中 → 其他语言版本只需替换数据文件）。
 * - 状态类名：is-open（展开）、is-active（当前分类）、is-target（URL 直达的问题）、
 *            is-show（显示：回到顶部 / 搜索提示）、is-searching（搜索中）
 *
 * 功能：1 页面渲染 / 2 功能链接替换 / 3 折叠展开 / 4 分类跳转（CSS 实现）/ 5 滚动联动高亮
 *       6 回到顶部 / 7 URL 直达问题 / 8 搜索 / 9 移动端分类菜单
 */
(function () {
  'use strict';

  /* =========================================================
     0. 准备：读取数据，获取页面元素
     ========================================================= */
  const DATA = window.FAQ_DATA;
  const LINKS = window.FAQ_LINKS || {};
  const UI = (DATA && DATA.ui) || {};

  // 统一在这里获取 index.html 中的元素，避免重复查找
  const el = {
    nav: document.getElementById('categoryNav'),
    list: document.getElementById('faqList'),
    mobileNavList: document.getElementById('mobileNavList'),
    mobileNavCurrent: document.getElementById('mobileNavCurrent'),
    mobileNavToggle: document.getElementById('mobileNavToggle'),
    search: document.querySelector('.faq-search'),
    searchInput: document.getElementById('searchInput'),
    searchClear: document.getElementById('searchClear'),
    searchResult: document.getElementById('searchResult'),
    searchEmpty: document.getElementById('searchEmpty'),
    backToTop: document.getElementById('backToTop')
  };

  // 数据文件缺失或加载顺序错误时，停止执行并在控制台提示原因
  if (!DATA || !DATA.categories) {
    console.error('[FAQ] 未找到 FAQ_DATA，请确认 index.html 中 faq-data.zh.js 在 faq.js 之前加载。');
    return;
  }


  /* =========================================================
     通用工具
     ========================================================= */

  // 把 < > & " ' 转成实体，防止文字被当作 HTML 解析（用于问题、分类名称等纯文本）
  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }


  /* =========================================================
     2. 答案中的 [[key]] → 功能页面链接
     ========================================================= */

  // 例："<p>进入[[enterpriseAuth]]页面</p>"
  //  → 有 url：<a class="faq-link" href="url">用户中心 → 设置 → 企业认证</a>（当前窗口跳转）
  //  → 无 url：只显示文字
  function renderLinks(html) {
    return html.replace(/\[\[(\w+)]]/g, function (match, key) {
      const link = LINKS[key];

      if (!link) {
        console.warn('[FAQ] FAQ_LINKS 中没有这个 key：', key);
        return match; // 保留 [[key]]，方便发现拼写错误
      }

      const label = escapeHtml(link.label);
      if (!link.url) {
        return label;
      }

      return '<a class="faq-link" href="' + escapeHtml(link.url) + '">' + label + '</a>';
    });
  }


  /* =========================================================
     1. 页面渲染（分类导航 + 问答列表）
     ========================================================= */

  // 分类导航一项
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

  // 一个问题。答案外层用于折叠动画，内层放内容
  function itemHtml(item) {
    return (
      '<div class="faq-item" id="' + item.id + '">' +
        '<button type="button" class="faq-question" aria-expanded="false" aria-controls="' + item.id + '-answer">' +
          '<span class="faq-question__badge">Q</span>' +
          '<span class="faq-question__text">' + escapeHtml(item.q) + '</span>' +
          '<span class="faq-question__arrow" aria-hidden="true"></span>' +
        '</button>' +
        '<div class="faq-answer" id="' + item.id + '-answer">' +
          '<div class="faq-answer__inner">' + renderLinks(item.a) + '</div>' +
        '</div>' +
      '</div>'
    );
  }

  // 一个分类（标题 + 问题列表）
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
      el.mobileNavList.innerHTML = '<ul class="faq-nav__list">' + navHtml + '</ul>'; // 移动端列表复用同一份 HTML
    }
    el.list.innerHTML = DATA.categories.map(sectionHtml).join('');
  }


  /* =========================================================
     3. 折叠展开
     ========================================================= */

  // 展开/收起一个问题。不传 open 时切换状态
  function setOpen(itemEl, open) {
    const isOpen = (open === undefined) ? !itemEl.classList.contains('is-open') : open;
    itemEl.classList.toggle('is-open', isOpen);
    itemEl.querySelector('.faq-question').setAttribute('aria-expanded', String(isOpen));
  }

  // 事件委托：只在父元素 #faqList 上绑定一次点击事件
  function initToggle() {
    el.list.addEventListener('click', function (e) {
      const question = e.target.closest('.faq-question');
      if (!question) return; // 点击答案中的链接等其他位置时忽略
      setOpen(question.closest('.faq-item'));
    });
  }


  /* =========================================================
     4. 点击分类 → 滚动到对应位置
     ========================================================= */
  // 无需 JS：分类链接 href="#about"，
  // 配合 CSS 的 html { scroll-behavior: smooth } 和 .faq-section { scroll-margin-top } 平滑滚动。


  /* =========================================================
     5. 滚动时自动高亮当前分类
     ========================================================= */

  // 高亮当前分类（PC 左侧导航 + 移动端列表 + 移动端按钮文字）
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

  let spyObserver = null;

  function initScrollSpy() {
    if (spyObserver) spyObserver.disconnect(); // 重新渲染后先断开旧的监听

    const sections = el.list.querySelectorAll('.faq-section');

    // 不支持 IntersectionObserver 的旧浏览器：仅没有高亮，其他功能正常
    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    // 进入屏幕上方 20%~30% 区域的分类视为“当前分类”
    spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActiveCategory(entry.target.id);
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    for (let i = 0; i < sections.length; i++) {
      spyObserver.observe(sections[i]);
    }

    setActiveCategory(sections[0].id); // 初始高亮第一个分类
  }


  /* =========================================================
     6. 回到顶部
     ========================================================= */
  function initBackToTop() {
    if (!el.backToTop) return;

    // 取消 HTML 中的 hidden（显示/隐藏由 CSS 的 .is-show 控制，带过渡动画）
    el.backToTop.hidden = false;

    // 向下滚动超过一屏时显示
    window.addEventListener('scroll', function () {
      el.backToTop.classList.toggle('is-show', window.scrollY > window.innerHeight);
    }, { passive: true });

    // 点击平滑回到顶部
    el.backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* =========================================================
     7. URL 直达问题（#q-order-03）
     ========================================================= */
  function openFromHash() {
    const id = decodeURIComponent(location.hash.slice(1)); // "#q-order-03" → "q-order-03"

    // 分类锚点（#order）由浏览器 + CSS 处理，这里只处理问题锚点
    if (id.indexOf('q-') !== 0) return;

    const item = document.getElementById(id);
    if (!item) return; // 不存在的问题 ID

    setOpen(item, true);
    item.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // 高亮 2 秒
    item.classList.add('is-target');
    setTimeout(function () {
      item.classList.remove('is-target');
    }, 2000);
  }

  function initHash() {
    openFromHash();                                      // 页面首次打开时
    window.addEventListener('hashchange', openFromHash); // 页面内只改变 # 时
  }


  /* =========================================================
     8. 搜索
     ========================================================= */

  // 用 <mark> 包裹关键词。
  // 不使用 innerHTML.replace：会改坏 <a href> 等标签内的文字，并有 XSS 风险；
  // 这里只处理“文字节点”。
  function highlight(root, keyword) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode); // 先收集，避免边遍历边修改

    const lower = keyword.toLowerCase();

    nodes.forEach(function (node) {
      let idx = node.nodeValue.toLowerCase().indexOf(lower);

      while (idx !== -1) {
        const match = node.splitText(idx);            // 在关键词前切开
        const rest = match.splitText(keyword.length); // 在关键词后切开 → match 只剩关键词
        const mark = document.createElement('mark');
        match.parentNode.replaceChild(mark, match);
        mark.appendChild(match);

        node = rest;                                  // 继续在剩余文字中查找
        idx = node.nodeValue.toLowerCase().indexOf(lower);
      }
    });
  }

  // 搜索提示文字（位置固定，只做淡入淡出，不会挤动下方内容）
  function showSearchInfo(text) {
    el.searchResult.textContent = text;
    el.searchResult.classList.toggle('is-show', !!text);
  }

  function setSearching(on) {
    if (el.search) el.search.classList.toggle('is-searching', on);
  }

  function doSearch(keyword) {
    // 1) 重新渲染，清除上次搜索的隐藏、高亮、展开状态
    render();
    el.searchEmpty.hidden = true;
    el.searchClear.hidden = (keyword === '');
    setSearching(false);

    // 2) 关键词为空 → 恢复初始状态
    if (keyword === '') {
      showSearchInfo('');
      initScrollSpy();
      return;
    }

    // 3) 在问题 + 答案的全部文字中查找
    const lower = keyword.toLowerCase();
    const items = el.list.querySelectorAll('.faq-item');
    let count = 0;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.textContent.toLowerCase().includes(lower)) {
        setOpen(item, true);
        highlight(item, keyword);
        count++;
      } else {
        item.hidden = true;
      }
    }

    // 4) 没有匹配问题的分类整体隐藏
    const sections = el.list.querySelectorAll('.faq-section');
    for (let i = 0; i < sections.length; i++) {
      if (!sections[i].querySelector('.faq-item:not([hidden])')) {
        sections[i].hidden = true;
      }
    }

    // 5) 显示结果数量 / 无结果提示（文案来自数据文件 FAQ_DATA.ui）
    if (count > 0) {
      showSearchInfo((UI.searchResult || '{n}').replace('{n}', count));
    } else {
      showSearchInfo('');
      el.searchEmpty.hidden = false;
    }
  }

  function initSearch() {
    let timer;

    // 输入停止 0.3 秒后再搜索（防抖）；等待期间显示“搜索中”状态
    el.searchInput.addEventListener('input', function () {
      clearTimeout(timer);
      const keyword = el.searchInput.value.trim();
      el.searchClear.hidden = (keyword === '');

      if (keyword) {
        setSearching(true);
        showSearchInfo(UI.searching || '');
      }

      timer = setTimeout(function () {
        doSearch(keyword);
      }, 300);
    });

    // 回车立即搜索
    el.searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        clearTimeout(timer);
        doSearch(el.searchInput.value.trim());
      }
    });

    // “清除”按钮：清空关键词并恢复
    el.searchClear.addEventListener('click', function () {
      clearTimeout(timer);
      el.searchInput.value = '';
      doSearch('');
      el.searchInput.focus();
    });
  }


  /* =========================================================
     9. 移动端分类菜单
     ========================================================= */
  function setMobileNavOpen(open) {
    el.mobileNavList.hidden = !open;
    el.mobileNavToggle.setAttribute('aria-expanded', String(open));
    el.mobileNavToggle.classList.toggle('is-open', open);
  }

  function initMobileNav() {
    if (!el.mobileNavToggle || !el.mobileNavList) return;

    // 按钮：展开 / 收起
    el.mobileNavToggle.addEventListener('click', function () {
      setMobileNavOpen(el.mobileNavList.hidden);
    });

    // 选择分类后收起列表（跳转由 href="#分类" 完成）
    el.mobileNavList.addEventListener('click', function (e) {
      if (e.target.closest('.faq-nav__link')) {
        setMobileNavOpen(false);
      }
    });
  }


  /* =========================================================
     启动
     ========================================================= */
  function init() {
    render();          // 1、2
    initToggle();      // 3
    initScrollSpy();   // 5
    initBackToTop();   // 6
    initHash();        // 7
    initSearch();      // 8
    initMobileNav();   // 9
  }

  init();
})();
