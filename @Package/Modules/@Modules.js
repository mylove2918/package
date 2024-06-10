import { include } from './include';

const myModules = {
  data: {},
  init() {
    include();
  },
};

myModules.init();
