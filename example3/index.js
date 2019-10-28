
// helper functions

addClass = (element, newClass) => {
  // can add multiple classes
  element.className = element.className + newClass;
}

removeClass = (element, classToDelete) => {
  // search for any instances of classToDelete in the class string and delete
  // should only be 1, but adding g will replace them all
  // cannot delete multiple classes using this function
  regex = new RegExp ("\\b${classToDelete}\\b", "g")
  let newClasses = element.className.replace( regex, "");
  element.className = newClasses;
}

//////////////////////////////////////////////////////////////////////////////////
// function to intercept clicks on links (router)

spaRouter = (newUrl, oldUrl) => {
  console.log("clicked on a link, href= " + newUrl);

  

  if ( oldUrl === newUrl) {
    // if the url hasn't changed, then no navigation is required
    console.log("No url change, Don't navigate");
    return;
  }
  const spaNavUrlRegexp = /\/\/([^\/]+)\/page(\d)+/;
  const newUrlArray = newUrl.match( spaNavUrlRegexp );
  const oldUrlArray = oldUrl.match(spaNavUrlRegexp);

  if ( ! newUrlArray) {
    // match failed
    console.log("No match, was an external link, need to add code to navigate there");
    return;
  }

  const oldUrlPage = oldUrlArray[2];
  // const newUrlDomain = newUrlArray[1];
  const newUrlPage = newUrlArray[2];

  console.log(`Old url ${oldUrl} page ${oldUrlPage}`);
  console.log(`New url ${newUrl} page ${newUrlPage}`);

  ///////////////////////////////////////////////////////////////////////////
  // Navigate to new spa page

  // change the tab
  const oldLink = document.getElementById(`page${oldUrlPage}Link`);
  const newLink = document.getElementById(`page${newUrlPage}Link`);
  removeClass(oldLink,"active");
  addClass(newLink,"active");
  // have to change the ARIA attributes as well
  oldLink.setAttribute("aria-selected", "false");
  newLink.setAttribute("aria-selected", "true");

  // change the page
  const oldPage = document.getElementById(`page${oldUrlPage}`);
  const newPage = document.getElementById(`page${newUrlPage}`);
  removeClass(oldPage,"active");
  removeClass(oldPage,"show");
  addClass(newPage,"show active");

}
// end of router function


// urlHistory = require("history");

window.addEventListener("load", function () {

  console.log("New load from server");

  // on start, check url, add /page1 if bare, modify history

  // footText is element where we can display url information on web page
  let footText = document.getElementById("spaFooterText");
  footText.innerHTML = location.href;

  // Attach event listener to all links
  anchors = document.getElementsByTagName("a");
  for (let i = 0; i < anchors.length; i++) { 
    anchors[i].addEventListener("click", function (event) { 
      event.preventDefault(); // prevent browser from navigating to a new link and reloading page
      event.stopPropagation(); // prevent bubbling up. Don't need in this example
      spaRouter(this.href, location.href);
    }) 
  }


});


