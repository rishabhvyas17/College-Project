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

let temp = []

app.get("/users",(req,res)=>{
    console.log(req.query);
    let age = req.query.age
    // res.send("data mil gya" +" name: "+name);
    for(let i=0; i<users.length; i++){
        if(users[i].age>=age){
            temp.push(users[i]);
            console.log(temp);
        }
    }
    res.json(temp);
});

console.log(temp);

app.listen(3030,()=>{
    console.log("Server started!!");
});