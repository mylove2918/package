const tabs = function () {
  window.addEventListener('load', () => {
    const $tabs = document.querySelectorAll('[data-tab]');
    // console.log('Tabs found:', $tabs.length);

    $tabs.forEach(tabElement => {
      const tabName = tabElement.dataset.tab;
      const initialIndex = tabElement.dataset.tabInit;
      const $triggers = tabElement.querySelectorAll('[data-tab-index]');
      const $tabContent = document.querySelector(`[data-tab-content="${tabName}"]`);
      const $contents = $tabContent.querySelectorAll('[data-tab-index]');

      const contentDisplay = index => {
        $triggers.forEach(trigger => {
          trigger.classList.toggle('on', trigger.dataset.tabIndex === index);
        });
        $contents.forEach(content => {
          content.classList.toggle('on', content.dataset.tabIndex === index);
        });
      };

      // Initialize tabs
      contentDisplay(initialIndex);

      // Add event listeners
      $triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
          const tabIndex = trigger.dataset.tabIndex;
          contentDisplay(tabIndex);
        });
      });
    });
  });
};

export { tabs };
