
document.addEventListener('click', function(event) {
  const menu = document.getElementById('dropdownMenu');
  const button = document.querySelector('.menu-button');
  if (!menu.contains(event.target) && event.target !== button) {
      menu.style.display = 'none';
  }
});


function toggleMenu() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
}


function logOut() {
  window.location.href = 'login.html'; 
}
