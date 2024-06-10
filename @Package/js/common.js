import { accordion } from './modules/accordion';
import { anchor } from './modules/anchor';
import { include } from './modules/include';

('use strict');

const moduleInit = {
  data: {},
  init() {
    accordion();
    anchor();
    include();
  },
};

moduleInit.init();
