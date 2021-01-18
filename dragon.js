$(document).ready(function() {
  // Accordion logic
  var acc = $('.accordion-banner');

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      if (this.nextElementSibling.getAttribute("style") === "display: inline-block;") this.nextElementSibling.setAttribute("style", "display: none; overflow: hidden;"); else this.nextElementSibling.setAttribute("style", "display: inline-block;");
      $(this).find('.add-mini-btn').text() == '+' ? $(this).find('.add-mini-btn').text('-') : $(this).find('.add-mini-btn').text('+');
    });
  }

  // Alert close button logic
  $('.close-mini-btn').on('click', function () {
    $(this).parent().remove();
  });
});