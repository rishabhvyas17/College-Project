const express = require("express");
const app = express();

let users = [
    {
        name: "Rishabh",
        age : 20
    },
    {
        name: "Rajat",
        age : 20
    },
    {
        name: "Prince",
        age : 20
    },
];

app.get("/users",(req,res)=>{
    console.log(req.query);
    let name = req.query.name
    // res.send("data mil gya" +" name: "+name);
    for(let i=0; i<users.length; i++){
        console.log(users[i].name == name);
        if(users[i].name == name){
            console.log("aaaaaaaaaaaa")
            return res.json(users[i]);
        }
    }
});

app.listen(3030,()=>{
    console.log("Server started!!");
});