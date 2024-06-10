const accordion = function () {
  window.addEventListener('load', () => {
    const $accordions = document.querySelectorAll('[data-accordion]');

    $accordions.forEach(el => {
      const type = el.dataset.accordion;
      const names = el.querySelectorAll('.acco-name');

      names.forEach(name => {
        name.addEventListener('click', () => {
          const listItem = name.closest('li');
          const isOpen = listItem.classList.contains('open');

          if (type === 'single') {
            el.querySelectorAll('li').forEach(item => {
              item.classList.remove('open');
            });
          }

          if (!isOpen || type !== 'single') {
            listItem.classList.toggle('open');
          }
        });
      });
    });
  });
};

export { accordion };
