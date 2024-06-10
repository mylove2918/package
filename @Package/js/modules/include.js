// include 기능
const include = function () {
  window.addEventListener('load', () => {
    const $allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call($allElements, function (el) {
      const include = el.dataset.include;
      if (include) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            el.outerHTML = this.responseText;
          }
        };
        xhttp.open('GET', include, true);
        xhttp.send();
      }
    });
  });
};

export { include };
