$(document).ready(function() {

  $("h2.keyboard-slider").click(function() {
    $("div.slider-div").slideToggle(function() {
      $("ul.flex-container-mylist").slideUp();
    });
  });

  $("div.cancel-button").click(function() {
    $("div.slider-div").slideToggle(function() {
      $("ul.flex-container-mylist").slideDown();
    })
  })

});
