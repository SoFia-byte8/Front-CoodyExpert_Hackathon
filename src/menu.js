
$(window).scroll(function () {
  if ($("#menu").offset().top > 90) {
    $("#menu").addClass("main");
  } else {
    $("#menu").removeClass("main");
  }
});
