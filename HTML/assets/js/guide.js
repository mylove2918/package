import data from '../data/guide.json' assert { type: 'json' };

('use strict');

const guide = {
  pgList: {
    pgData: data.pgList,
    init() {
      const $target = document.querySelector('.pg-list__tbody');
      this.pgData.forEach(res => {
        $target.innerHTML += `
        <tr class="pg-list__tr">
          <td class="pg-list__td">${res.category}</td>
          <td class="pg-list__td">${res.depth_1}</td>
          <td class="pg-list__td">${res.depth_2}</td>
          <td class="pg-list__td">${res.depth_3}</td>
          <td class="pg-list__td">${res.depth_4}</td>
          <td class="pg-list__td">${res.depth_5}</td>
          <td class="pg-list__td">${res.type}</td>
          <td class="pg-list__td">
            <a href="${res.directory}" target="_blank">${res.directory}</a>
          </td>
          <td class="pg-list__td">${res.date}</td>
          <td class="pg-list__td">${res.etc}</td>
        </tr>
        `;
      });
    },
  },
  init() {
    this.pgList.init();
  },
};

window.addEventListener('load', () => {
  guide.init();
});
