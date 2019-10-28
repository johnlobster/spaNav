# Single page app navigation

Proof of concept

### Single page web app (spa) strengths and weaknesses

#### Summary

Want web app to do the following

- enables internal navigation using `<a>` links, or using new url to directly access a page
- doesn't reload (html, Javascript, css) for internal navigation
- can use back button on browser as internal navigation
- tested on a variety of browsers using browsertool
- accessible 

## process
- create basic web site, with a page navigation mechanism. Test locally
- deploy to Netlify, test build process
- enable Netlify redirects
- add event watcher to all `<a>` tags, check navigation
- add router function, basic routes, enable moving from page to page
- refactor router, add `history` navigation, add 404 result

#### example1 Basic function

https://johnlobster.github.io/spaNav/example1

#### example2 Deploy to Netlify

add build scripts to information to `package.json`

https://spanav.netlify.com/

https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/

Test that page movement leads to 404

Create development server that always returns index.html (copied from create-react-script). Saves time and netlify build minutes.

#### Add redirects

https://www.netlify.com/blog/2019/01/16/redirect-rules-for-all-how-to-configure-redirects-for-your-static-site/

https://docs.netlify.com/routing/redirects/redirect-options/

https://docs.netlify.com/routing/redirects/redirect-options/#http-status-codes


TODO: picture of how Netlify redirect works

TODO: add github connection as a separate picture

copy _redirects file over

https://spanav.netlify.com/page1

had to explicitly copy the _redirects over during build
Can probably do cp *
favicon git checked in by mistake, could remove it

```
# netlify redirect file for single page app spaNav
# Note, the browser still gets the original url and will be able to manage history

/*     /index.html    200
```

When hit sub page, index.html can't find index.js because now the path is wrong

```
<script src="/index.js"></script>
```

When play with different urls, does a complete page reload

Don't have to intercept url on javascript start as it is in location

tested cat of js - ended up checking in dist/index.js which made build fail

use site overview (dashboard) - can immediately see whether build has passed or failed

![Netlify overview](./dashboard.jpg)

#### Attach event handlers to all `<a>` tags, add router function to index.js

```js
  // Attach event listener to all links
  anchors = document.getElementsByTagName("a");
  for (let i = 0; i < anchors.length; i++) { 
    anchors[i].addEventListener("click", function (event) { 
      event.preventDefault(); // prevent browser from navigating to a new link and reloading page
      event.stopPropagation(); // prevent bubbling up. Don't need in this example

      console.log("Clicked button " + this.href) 
    }) 
  }
```

Not using webpack - router.js shouldn't export module as the files are concatenated by build

Could return 404

Assigning an event handler to each `<a>` using a loop. Could use event delegation (bubbling up of event) but not important for a proof of concept

Basic operation requires use of history to push new url, otherwise it never moves from page1

history security issues ?

Spec for router(`newUrl`, `oldUrl`)
- If `newUrl` goes to a different domain, change location. Happens if there is an internal link to a different server
- If `oldUrl` and `newUrl` are the same, don't change anything
- Check `newUrl` against a list of pages. If it doesn't match, then return 404 response
- if `newUrl` matches a page, push the new url into the history 

## Testing

client/browser testing. Using Selenium and a service such as 

Want to text out a variety of platforms/browsers

## Accessability

Accessability is another user interface issue. As we are emulating normal browser behavior using javascript, must check that accessability is good. There are 4 main accessability
1. Use of screen reader and keyboard, no mouse
2. Use of keyboard, no mouse
3. Contrast, particularly text on background
4. Color combinations and contrast still good for colorblind people

3 and 4 are not important for this proof of concept, 2 is really a subset of 1, but can be tested for automatically

So I first checked keyboard operation manually, then screen reader with keyboard, then wrote a keyboard based test which I added into the existing test file.








