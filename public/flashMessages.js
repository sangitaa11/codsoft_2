// public/flashMessages.js

document.addEventListener('DOMContentLoaded', function() {
    const flashMessages = JSON.parse(document.getElementById('flashMessages').textContent);
    
    if (flashMessages.error) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error';
      errorDiv.textContent = flashMessages.error;
      document.body.appendChild(errorDiv);
    }
  
    if (flashMessages.success) {
      const successDiv = document.createElement('div');
      successDiv.className = 'success';
      successDiv.textContent = flashMessages.success;
      document.body.appendChild(successDiv);
    }
  });
  