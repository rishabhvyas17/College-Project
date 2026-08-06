const express = require("express");
const app = express();

app.get("/home",(req,res)=>{
    console.log(req.query);

    res.send("Your name is "+req.query.Name + " "+req.query.Surname+" And your number is "+ req.query.number);
});

app.listen(3333,()=>{
    console.log("Server started!");
});