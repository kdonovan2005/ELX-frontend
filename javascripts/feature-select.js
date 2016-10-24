document.addEventListener("click", function(e) {
  var target = e.target;

  // if not a li item, ignore click
  if (!target.tagName.toLowerCase() === "li") {
    return;
  }

  // if it doesn't have a data-src, ignore click
  var newSrc = target.getAttribute("data-src");
  if (!newSrc) {
    return;
  }

  // replace original image src with new image src
  var img = document.getElementById("feature-image");
  img.src = newSrc;

  //get and replace feature name
  var newName = target.getAttribute("data-name");
  var str = document.getElementById("feature-name").innerHTML;
  var replace = str.replace(str, newName);
  document.getElementById("feature-name").innerHTML = replace;

  //get and replace feature description
  var newDescription = target.getAttribute("data-description");
  var dstr = document.getElementById("feature-description").innerHTML;
  var dreplace = dstr.replace(dstr, newDescription);
  document.getElementById("feature-description").innerHTML = dreplace;
})
