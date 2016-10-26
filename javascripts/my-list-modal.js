window.onload = function() {
  var modal = document.getElementsByClassName("my-list-modal")[0];

  var btn = document.getElementById("my-list-image");

  var close = document.getElementsByClassName("close-modal-button")[0]

  btn.onclick = function() {
    debugger
    modal.style.display = "block";
  }

  close.onclick = function() {
    modal.style.display = "none";
  }
}
