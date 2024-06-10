const include = function () {
  window.addEventListener('load', async () => {
    const $includes = document.querySelectorAll('[data-include]');
    // console.log($includes);

    const fetchIncludeContent = async (el, url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const html = await response.text();
          el.outerHTML = html;
        } else {
          console.error('Failed to fetch content from', url);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    $includes.forEach(el => {
      const include = el.dataset.include;
      if (include) {
        fetchIncludeContent(el, include);
      }
    });
  });
};

export { include };
