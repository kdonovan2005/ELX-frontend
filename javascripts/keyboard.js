$(function(){
  var $write = $('#write'),
  shift = false;

  $('#keyboard li').click(function(){
    var $this = $(this),
    character = $this.html();

  // Shift keys
  if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
    $('.symbol span').toggle();

    shift = (shift === true) ? false : true;
    return false;
  }

  // Delete
  if ($this.hasClass('delete')) {
    var html = $write.val();

    $write.val(html.substr(0, html.length - 1));
    return false;
  }

  // Special characters
  if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
  if ($this.hasClass('space')) character = ' ';

  // Add the character
  $write.val($write.val() + character);
  });
});
