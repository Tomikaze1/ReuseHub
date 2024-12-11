const cardImages = document.querySelectorAll(".card-image");
const cardTitles = document.querySelectorAll(".card-title");
const cardDescriptions = document.querySelectorAll(".card-description");
const cardMediaIcons = document.querySelectorAll(".card-mediaIcons a");
const cardImgs = document.querySelectorAll(".card-image img");
const cardTitleSpans = document.querySelectorAll(".card-title span");
const cardDescSpans = document.querySelectorAll(".card-description span");
const mediaIcons = document.querySelectorAll(".card-mediaIcons a i");

const renderCard = () => {
  
  cardImages.forEach((cardImage) => {
    cardImage.classList.remove("loading");
  });
  cardTitles.forEach((cardTitle) => {
    cardTitle.classList.remove("loading");
  });
  cardDescriptions.forEach((cardDescription) => {
    cardDescription.classList.remove("loading");
  });
  cardMediaIcons.forEach((cardMediaIcon) => {
    cardMediaIcon.classList.remove("loading");
  });

  
  cardImgs.forEach((cardImg) => {
    cardImg.style.visibility = "visible";
  });
  cardTitleSpans.forEach((cardTitleSpan) => {
    cardTitleSpan.style.visibility = "visible";
  });
  cardDescSpans.forEach((cardDescSpan) => {
    cardDescSpan.style.visibility = "visible";
  });
  mediaIcons.forEach((mediaIcon) => {
    mediaIcon.style.visibility = "visible";
  });
}


setTimeout(() => {
  renderCard();
}, 1000);



  


function toggleMenu() {
  const dropdownMenu = document.getElementById("load");
  dropdownMenu.style.display = dropdownMenu.style.display === 'dropdownMenu' ? 'flex' : 'none';
}

function logOut() {
  window.location.href = 'flex';
}
