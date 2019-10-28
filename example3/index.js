
// helper functions

addClass = (element, newClass) => {
  // can add multiple classes
  element.className = element.className + " " + newClass;
}

removeClass = (element, classToDelete) => {
  // search for any instances of classToDelete in the class string and delete
  // should only be 1, but added g to replace them all
  // cannot delete multiple classes using this function
  const regex = new RegExp (`\\b${classToDelete}\\b`, "g");
  const oldClasses = element.className
  let newClasses = oldClasses.replace( regex, "");
  element.className = newClasses;
}

//////////////////////////////////////////////////////////////////////////////////
// function to intercept clicks on links (router)

// void = spaRouter( newUrl:string, oldUrl:string)
spaRouter = (newUrl, oldUrl) => {
  console.log("spaRouter Old " + oldUrl + " New " + newUrl);
  
  // split urls. Might be simpler to pass in domain and path separately
  const spaNavUrlRegexp = /\/\/([^\/]+)\/(\w+)?\/?$/;
  const newUrlArray = newUrl.match(spaNavUrlRegexp);
  const oldUrlArray = oldUrl.match(spaNavUrlRegexp);
  console.log("newUrlArray " + newUrlArray[1] + " " + newUrlArray[2] );
  console.log("oldUrlArray " + oldUrlArray[1] + " " + oldUrlArray[2] );

  if (oldUrlArray[1] !== newUrlArray[1]) {
    // if the domains are not the same, navigate to newUrl
    location.href = newUrl; // go to new page
  }

  if ( oldUrl === newUrl) {
    // if the url hasn't changed, then no navigation is required
    console.log("No url change, Don't navigate");
    return;
  }

  if (! newUrlArray[2]) {
    newPathname = "/page1";
  } else {
    newPathName = newUrlArray[2];
  }
  if (!oldUrlArray[2]) {
    oldPathname = "/page1";
  } else {
    oldPathName = oldUrlArray[2];
  }
  console.log( "newPathName " + newPathName + " oldPathName " + oldPathName);

  // check against list of valid pages
  let pathMatch = false;
  const pageList = [ "page1", "page2", "page3"];
  for( let i=0; i < pageList.length; i++) {
    if ( pageList[i] === newPathName) {
      pathMatch = true;
    }
  }
  if (! pathMatch ) {
    // newPathName is not a valid path, show 404
    console.log("404 for " + newUrl);
    // app should show a 404 error instead of a valid page
    return;
  }
  
  ///////////////////////////////////////////////////////////////////////////
  // Navigate to new spa page

  // change the tab
  const oldLink = document.getElementById(`${oldPathName}Link`);
  const newLink = document.getElementById(`${newPathName}Link`);
  removeClass(oldLink,"active");
  addClass(newLink,"active");
  // have to change the ARIA attributes as well
  oldLink.setAttribute("aria-selected", "false");
  newLink.setAttribute("aria-selected", "true");

  // change the page
  const oldPage = document.getElementById(oldPathName);
  const newPage = document.getElementById(newPathName);
  removeClass(oldPage,"active");
  removeClass(oldPage,"show");
  addClass(newPage,"show active");

  // add to browser history
  history.pushState(null, "", newPathName);

}
// end of router function


// urlHistory = require("history");

window.addEventListener("load", function () {

  // BUG - if go to page1/ ends up with duplicate /page1/page1 and gets very confused

  
  // on start, check url, add /page1 if bare, modify history
  // page1 is the default page in html. Modify state and call spaRouter if different url from default
  const inputUrl = location.origin + "/page1"; 
  console.log("URL " + inputUrl + " Page " + location.pathname);
  if ( (! location.pathname)  || (location.pathname === "/")) {
    history.replaceState(null, null, "/page1");
    console.log("Replaced state");

  }
  console.log( "New location " + location.href);
  spaRouter(location.href, inputUrl)

  // Attach event listener to all links
  anchors = document.getElementsByTagName("a");
  for (let i = 0; i < anchors.length; i++) { 
    anchors[i].addEventListener("click", function (event) { 
      event.preventDefault(); // prevent browser from navigating to a new link and reloading page
      event.stopPropagation(); // prevent bubbling up. Don't need in this proof of concept
      spaRouter(this.href, location.href);
    }) 
  }


});


