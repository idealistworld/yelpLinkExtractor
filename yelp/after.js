var keypad1 = document.createElement("div");
keypad1.innerHTML = "<div style='z-index:100; margin-top: 100px'><button id='cool-button' style='font-size: 50px'>Get Links</button></div>";
var output = document.createElement("div");

document.body.prepend(output);
document.body.prepend(keypad1);

function doThing() {
  var links = document.querySelectorAll(".css-19v1rkv");
  var linkArray = [];

  for (var x = 5; x < links.length - 1; x++) {
    linkArray.push(links[x]); // Get the text content of each link
  }

  // Construct HTML with each link on a separate line
  var linksHtml = linkArray.map(function(link) {
    return "<p>" + link + "</p>";
  }).join('');

  output.innerHTML = linksHtml;
}

document.getElementById("cool-button").addEventListener("click", doThing);