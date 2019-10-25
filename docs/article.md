# Single page app navigation

### Single page web app (spa) strengths and weaknesses

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

https://spanav.netlify.com/

https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/

Test that page movement leads to 404

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

#### Add router code to index.js

Not using webpack - router.js shouldn't export module as the files are concatenated by build

Could return 404


## Testing





