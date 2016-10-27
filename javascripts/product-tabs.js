function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

window.onload = function() {
  //default open tab
  defaultOpen = document.getElementById("defaultOpen");
  defaultOpen.click();

  //default open feature
  defaultOpenFeature = document.getElementById("defaultOpenFeature");
  defaultOpenFeature.click();

  //my-list-modal
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
