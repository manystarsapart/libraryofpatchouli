// note: with export, we can use blogmodule elsewhere with "import { BlogModule } from './blog.js';"

export const BlogModule = {
    getEntries() {
      return JSON.parse(localStorage.getItem('blogEntries')) || [];
    },
  
    addEntry(title, content) {
      const entries = this.getEntries();
      const newEntry = {
        id: Date.now(),
        title,
        content,
        date: new Date().toLocaleDateString()
      };
      entries.unshift(newEntry);
      localStorage.setItem('blogEntries', JSON.stringify(entries));
    },
  
    renderEntries(containerId) {
      const container = document.getElementById(containerId);
      const entries = this.getEntries();
      
      container.innerHTML = entries.map(entry => `
        <article class="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-8">
          <h2 class="text-xl md:text-2xl font-bold mb-2">${entry.title}</h2>
          <p class="text-sm md:text-base text-gray-600 mb-3 md:mb-4">${entry.date}</p>
          <div class="prose prose-sm md:prose">${entry.content}</div>
        </article>
      `).join('');
    }
  };
  