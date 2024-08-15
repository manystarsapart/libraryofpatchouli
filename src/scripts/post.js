import { BlogModule } from './blogmodule.js';
const submitButton = document.getElementById('submit-button');

// for post.html

document.addEventListener('DOMContentLoaded', () => {

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    const titleField = document.getElementById('title-field');
    const contentField = document.getElementById('content-field');
    
    const title = titleField.value.trim();
    const content = contentField.value.trim();
    
    if (title && content) {
      BlogModule.addEntry(title, content);
      

      titleField.value = '';
      contentField.value = '';

      alert('Blog post submitted successfully!');
      
    } else {
      alert('Please fill in both title and content fields.');
    }
  });
});
