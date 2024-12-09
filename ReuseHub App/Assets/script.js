// Close the dropdown when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.getElementById('dropdownMenu');
  const button = document.querySelector('.menu-button');
  if (!menu.contains(event.target) && event.target !== button) {
      menu.style.display = 'none';
  }
});

// Toggle the dropdown menu visibility
function toggleMenu() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Log out function
function logOut() {
  window.location.href = 'login.html'; // Redirect to login page
}
