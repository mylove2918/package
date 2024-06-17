// anchor 기능
const anchor = function (offset = 0) {
  window.addEventListener('load', () => {
    const $anchors = document.querySelectorAll('[data-anchor]');
    $anchors.forEach(anchorEl => {
      anchorEl.addEventListener('click', e => {
        e.preventDefault(); // 기본 동작 방지

        const targetSelector = e.target.dataset.anchor;
        const $target = document.querySelector(targetSelector);

        if ($target) {
          const targetPosition = $target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      });
    });
  });
};

export { anchor };
