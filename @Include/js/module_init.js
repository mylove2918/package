import { moduleInclude } from '../../@Include/js/module_include.js';

('use strict');

const moduleInit = {
  data: {
    currCategory: window.location.href.split('/%40')[1].split('/')[0],
    module: [
      { title: 'Accordion', href: '../accordion/accordion.html' },
      { title: 'Dropdown', href: '../dropdown/dropdown.html' },
      { title: 'Include', href: '../include/include.html' },
      { title: 'Modal', href: '../modal/modal.html' },
      { title: 'Tab', href: '../tab/tab.html' },
    ],
    library: [
      { title: 'Carousel.js', href: '' },
      { title: 'Chart.js', href: '' },
      { title: 'Fancybox.js', href: '' },
      { title: 'Fullpage.js', href: '' },
      { title: 'jQuery', href: '' },
      { title: 'Slick.js', href: '' },
      { title: 'Swiper.js', href: '' },
      { title: 'SyntaxHighlighter.js', href: '' },
    ],
  },
  init() {
    moduleInclude(this.data);
  },
};

moduleInit.init();
