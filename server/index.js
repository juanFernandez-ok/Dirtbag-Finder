"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const port = 8899;

express()

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // endpoints here 👇

.get("/test", (req, res) => {
    res.status(200).json({data: "hello"})
})









  // this is my catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })


  .listen(port, () => console.log(`Listening on port ${port}`));
