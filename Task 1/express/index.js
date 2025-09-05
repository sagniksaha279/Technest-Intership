const express = require("express");
const app = express();

const port = 3000;

app.get("/hello",(req,res)=>{
    res.json({ message: "Hello, API!" });
});

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
});