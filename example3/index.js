// function to intercept clicks on links (router)

// end of router function


// urlHistory = require("history");

window.addEventListener("load", function () {

  // footText is element where we can display url information on web page
  let footText = document.getElementById("spaFooterText");

  footText.innerHTML = location.href;


  // Attach event listener to all links
  
  document.getElementsByTagName("a").onclick= function(event) {
    event.preventDefault(); // prevent browser from navigating to a new link and reloading page
    event.stopPropagation(); // being paranoid, not using bubbling up in this app

    console.log("Clicked on a link");
    console.log("href was " + this.href);
  };

});


