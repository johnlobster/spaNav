// function to intercept clicks on links (router)

spaRouter = (newUrl) => {
  console.log("clicked on a link, href= " + newUrl);
}
// end of router function


// urlHistory = require("history");

window.addEventListener("load", function () {

  // footText is element where we can display url information on web page
  let footText = document.getElementById("spaFooterText");

  footText.innerHTML = location.href;


  // Attach event listener to all links
  anchors = document.getElementsByTagName("a");
  for (let i = 0; i < anchors.length; i++) { 
    anchors[i].addEventListener("click", function (event) { 
      event.preventDefault(); // prevent browser from navigating to a new link and reloading page
      event.stopPropagation(); // prevent bubbling up. Don't need in this example
      spaRouter(this.href);
    }) 
  }


});


