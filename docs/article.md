# Single page app navigation

#### Example1 Basic function

https://johnlobster.github.io/spaNav/example1

#### Deploy to netlify

https://spanav.netlify.com/

https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/

Test that page movement leads to 404

#### Add redirects

https://www.netlify.com/blog/2019/01/16/redirect-rules-for-all-how-to-configure-redirects-for-your-static-site/

https://docs.netlify.com/routing/redirects/redirect-options/

https://docs.netlify.com/routing/redirects/redirect-options/#http-status-codes


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

Don't have to intercept url on javascript start as it is set



#### Add router code to index.js

Not using webpack - router.js shouldn't export module as the files are concatenated by build

Could return 404






