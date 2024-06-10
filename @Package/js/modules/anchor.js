// anchor 기능
const anchor = function () {
  window.addEventListener('load', () => {
    const $allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call($allElements, function (el) {
      const anchor = el.dataset.anchor;
      if (anchor) {
        // 기능 작성
      }
    });
  });
};

export { anchor };
