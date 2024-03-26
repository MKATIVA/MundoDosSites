/** @format */

$(document).ready(function () {
  var scrollBtn = $(".scroll-up-btn");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      scrollBtn.addClass("show");
    } else {
      scrollBtn.removeClass("show");
    }
  });

  function scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  }

  scrollBtn.click(scrollToTop);
});