// import { BlogModule } from './blogmodule.js';

// alert(JSON.parse(localStorage.getItem('blogEntries')));

import { BlogModule } from './blogmodule.js';

// for index.html

document.addEventListener('DOMContentLoaded', () => {
  BlogModule.renderEntries('blog-container');
});
