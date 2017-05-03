function initMenu() {
  $("#menu li:first-child a").addClass('active');
  $("#menu li a").click(function() {
    changeContentColor($(this).attr('data-color'));
  });
}

function changeContentColor(colorName) {
  $("#contentContainer").css("color",colorName);
  $("#menu .active").removeClass('active');
  $("#menu li a[data-color=" + colorName + "]").addClass('active');
}

function init() {
  initMenu();
}
