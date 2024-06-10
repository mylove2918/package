import { include } from './modules/include';

('use strict');

const moduleInit = {
  data: {},
  init() {
    include();
  },
};

moduleInit.init();
