const express = require('express');

const app = express();

app.get("/", async (req,res)=>{
    res.send("First Node.js App on render.com")
 })

app.listen(8000,()=>{
      console.log("server is listening to 8000")
  })