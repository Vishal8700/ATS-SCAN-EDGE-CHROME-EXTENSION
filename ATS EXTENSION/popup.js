// popup.js

// Function to toggle dark mode
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode); // Save the preference in local storage
  }
  
  // Load the saved mode from local storage
  function loadSavedMode() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      document.body.classList.add('dark-mode');
      document.getElementById('mode-switch').checked = true; // Ensure switch is checked
    } else {
      document.body.classList.remove('dark-mode');
      document.getElementById('mode-switch').checked = false; // Ensure switch is unchecked
    }
  }
  
  // Add event listener to the dark mode switch
  document.getElementById('mode-switch').addEventListener('change', toggleDarkMode);
  
  // Load saved mode on page load
  document.addEventListener('DOMContentLoaded', loadSavedMode);
  
  function showModal(title, content) {
    var modal = document.getElementById('modal');
    var modalText = document.getElementById('modal-text');
    modalText.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    modal.style.display = 'block';
  
    document.querySelector('.close-button').onclick = function() {
      modal.style.display = 'none';
    }
  
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }
  }
  