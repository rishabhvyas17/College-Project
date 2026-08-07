const express = require("express");
const app = express();

app.get("/home",(req,res)=>{
    console.log(req.query);

    // res.send("Your name is "+req.query.Name + " "+req.query.Surname+" And your number is "+ req.query.number);

    let {Name, Surname, number} = req.query; // Object destructuring

    res.send("Your name is "+Name+" Surname is "+Surname+" Mobile number is "+number);
});

app.listen(3333,()=>{
    console.log("Server started!");
});