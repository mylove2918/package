import { include } from './modules/include.js';

const commonFunc = {
  data: {},
  init() {
    include();
  },
};

commonFunc.init();
