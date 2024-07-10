const welcomeMessage = document.getElementById('welcome-message');
const logoutButton = document.getElementById('logout-button');

// Check if username is stored in local storage
const storedName = localStorage.getItem('name');

if (storedName) {
  welcomeMessage.textContent = `${storedName}!`;
}


logoutButton.addEventListener('click', function() {
  localStorage.removeItem('username');
  window.location.href = 'index.html';
});
