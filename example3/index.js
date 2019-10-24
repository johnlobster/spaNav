// urlHistory = require("history");

window.addEventListener("load", function () {

  // footText is element where we can display url information on web page
  let footText = document.getElementById("spaFooterText");

  footText.innerHTML = location.href;


  // Attach event listener to all links
  
  document.getElementsByTagName("a").onclick= function(event) {
    event.preventDefault(); // prevent browser from navigating to a new link and reloading page
    console.log("Clicked on a link");
    console.log("href was " + this.href);
  };

});


