const $targetHeader = document.querySelector('.module-header');
const $targetSidebar = document.querySelector('.module-sidebar');
const $targetFooter = document.querySelector('.module-footer');
const pageTitle = $targetHeader.dataset.headerTitle;
let sidebarHtml = ``;
let targetData;

function moduleInclude(data) {
  window.addEventListener('load', () => {
    // 공통 헤더 쓰기
    $targetHeader.innerHTML = `
      <a href="javascript:;" class="module-header__btn btn-back" onclick="history.back(-1)">뒤로가기</a>
      <h1 class="module-header__title">${pageTitle}</h1>
    `;

    // 공통 사이드바 쓰기
    sidebarHtml += `<h2 class="module-sidebar__title">${data.currCategory.toUpperCase()}</h2>`;
    sidebarHtml += `<ul class="module-sidebar__list">`;
    if (data.currCategory === 'Modules') {
      targetData = data.module;
    } else if (data.currCategory === 'Library') {
      targetData = data.library;
    }
    targetData.forEach(res => {
      const activeTitle = $targetSidebar.dataset.sidebarActive;
      sidebarHtml += `<li class="module-sidebar__item">`;
      sidebarHtml += `<a href="${res.href}" class="module-sidebar__link ${res.title === activeTitle ? 'on' : ''}">${res.title}</a>`;
      sidebarHtml += `</li>`;
    });
    sidebarHtml += `</ul>`;
    $targetSidebar.innerHTML = sidebarHtml;

    // 공통 푸터 쓰기
    $targetFooter.innerHTML = `
      <p class="module-footer__copyright">Copyright 2023 양정연 All Rights Reserved.</p>
      <button class="module-footer__btn btn-to-top">최상단으로 이동</button>
    `;
  });
}

export { moduleInclude };
