import { BlogModule } from './blogmodule.js';

// for index.html

document.addEventListener('DOMContentLoaded', () => {
  BlogModule.renderEntries('blog-container');
});

