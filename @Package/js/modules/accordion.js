// accordion 기능
const accordion = function () {
  window.addEventListener('load', () => {
    const $allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call($allElements, function (el) {
      const accordion = el.dataset.accordion;
      if (accordion) {
        // 기능 작성
      }
    });
  });
};

export { accordion };
