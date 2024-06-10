// tab 기능
const tabs = function () {
  window.addEventListener('load', () => {
    const $allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call($allElements, function (el) {
      const tab = el.dataset.tab;
      if (tab) {
        const $tabs = document.querySelectorAll('[data-tab]');
        const $contents = document.querySelectorAll('[data-tab-content]');

        $tabs.forEach(tabs => {
          const tab = {
            name: tabs.dataset.tab,
            initial: tabs.dataset.tabInit,
            trigger: tabs.querySelectorAll('[data-tab-index]'),
          };
          const $tabContent = document.querySelector('[data-tab-content="' + tab.name + '"]');
          const $contents = $tabContent.querySelectorAll('[data-tab-index]');
          function contentDisplay(index) {
            tab.trigger.forEach(tab => {
              tab.dataset.tabIndex === index ? tab.classList.add('on') : tab.classList.remove('on');
            });
            $contents.forEach(content => {
              const contIndex = content.dataset.tabIndex;
              contIndex === index ? content.classList.add('on') : content.classList.remove('on');
            });
          }

          contentDisplay(tab.initial);

          tab.trigger.forEach(trigger => {
            trigger.addEventListener('click', el => {
              trigger.classList.add('on');
              const tabIndex = trigger.dataset.tabIndex;
              contentDisplay(tabIndex);
            });
          });
        });
      }
    });
  });
};

export { tabs };
