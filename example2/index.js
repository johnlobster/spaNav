// urlHistory = require("history");

window.addEventListener("load", function () {
  console.log("Hello world");

  console.log("At address " + location.href);
  console.log("path is " + location.path);
  console.log("# is" + location.hash);
  console.log("host is " + location.host);

  // footText is element where we can display url information on web page
  let footText = document.getElementById("spaFooterText");

  footText.innerHTML = location.href;


});


