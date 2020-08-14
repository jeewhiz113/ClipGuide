const express = require('express');

const app = express();

app.listen(3000, ()=>{
  console.log("app listening for requests on port 3000");
})