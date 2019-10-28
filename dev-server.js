// development server, provides single route that always returns index.html

const PORT = process.env.PORT || 3001;
const path = require("path");
const express = require("express");
const app = express();

const staticFiles = process.argv[2]; // first argument to dev-server.js

if ( ! staticFiles) {
  throw new Error("ERROR - static file directory must be given as argument to server")
}

console.log("Serving static files from " + staticFiles);
app.use(express.static(staticFiles));

app.get("*", function (req, res) { 
  res.sendFile(path.join(__dirname, "./example3/index.html")); 
});

app.listen(PORT, () => { 
  console.log(`🌎 ==> spaNav development server listening on port ${PORT}`); 
});
