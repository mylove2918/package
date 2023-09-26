'use strict';

// include 기능 작성
window.addEventListener('load', function () {
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
