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
  
  document.getElementsByTagName("a").foreach( (element) => {
    element.addEventListener("click", function(event) {
      event.preventDefault(); // prevent browser from navigating to a new link and reloading page
      event.stopPropagation(); // prevent bubbling up. Don't need in this example

      console.log("Clicked on a link");
      console.log("href was " + this.href);
    });
  });

});


