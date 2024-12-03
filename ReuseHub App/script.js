

// local makers
function toggleLocalMakers() {
  const list = document.getElementById('local-makers-list');
  list.style.display = list.style.display === 'none' ? 'block' : 'none';
}

function contactMaker(makerName) {
  alert(`You can now reach out to ${makerName} for tips and help!`);
}

document.querySelectorAll('.sell-button').forEach(button => {
  button.addEventListener('click', () => {
      document.getElementById('sell-item-form').classList.remove('hidden');
  });
});



//project galllery

function toggleLike(button) {
  const likeCount = button.querySelector('.like-count');
  let currentLikes = parseInt(likeCount.textContent, 10);
  
  if (button.classList.contains('liked')) {
      // Unlike
      button.classList.remove('liked');
      likeCount.textContent = currentLikes - 1;
  } else {
      // Like
      button.classList.add('liked');
      likeCount.textContent = currentLikes + 1;
  }
}


document.addEventListener('DOMContentLoaded', function () {
  const diySection = document.getElementById('diy-tutorials');
  const diyContent = document.getElementById('diy-content');

  diySection.addEventListener('click', function () {
      diyContent.style.display = diyContent.style.display === 'block' ? 'none' : 'block';
  });
});

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
