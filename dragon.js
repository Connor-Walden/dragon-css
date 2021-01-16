$(document).ready(function() {
  // Accordion logic
  var acc = $('.accordion-banner');

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      if (this.nextElementSibling.style.display === "block") this.nextElementSibling.style.display = "none"; else this.nextElementSibling.style.display = "block";
      $(this).find('.add-mini-btn').text() == '+' ? $(this).find('.add-mini-btn').text('-') : $(this).find('.add-mini-btn').text('+');
    });
  }

  // Alert close button logic
  $('.close-mini-btn').on('click', function () {
    $(this).parent().remove();
  });
});