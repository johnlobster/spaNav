// urlHistory = require("history");

window.addEventListener("load", function () {
  console.log("Hello world");

  console.log("At address " + location.href);

  // footText is element where we can display url information on web page
  let footText = document.getElementById("spaFooterText");

  footText.innerHTML = location.href;


});


