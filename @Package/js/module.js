import { accordion } from './modules/accordion.js';
import { anchor } from './modules/anchor.js';
import { include } from './modules/include.js';
import { tabs } from './modules/tabs.js';

const moduleInit = {
  data: {},
  init() {
    accordion();
    anchor(50);
    include();
    tabs();
  },
};

moduleInit.init();
