var activeButton;

function initMenu() {
  var firstLink = document.getElementById("menu").children[0].children[0];
  firstLink.classList.add('active');
  activeButton = firstLink.id;
}

function changeContentColor(colorName,buttonClicked) {
  document.getElementById("contentContainer").style.color = colorName;
  document.getElementById(activeButton).classList.remove('active');
  document.getElementById(buttonClicked).classList.add('active');
  activeButton = buttonClicked;
}

function init() {
  initMenu();
}
