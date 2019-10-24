// urlHistory = require("history");

window.addEventListener("load", function () {

  // footText is element where we can display url information on web page
  let footText = document.getElementById("spaFooterText");

  footText.innerHTML = location.href;


  // Attach event listener to all links

  document.getElementsByTagName("a").onclick= function() {
      console.log(this.location);
  };

});


