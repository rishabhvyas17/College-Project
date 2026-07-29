const express = require('express');
const app = express()
const port = 3030;

const users = [
    {
        name:"Rishabh",
        age:20
    },
    {
        name:"Vyas",
        age:20
    },
    {
        name:"Prince",
        age:20
    }
]

app.get('/',(req,res)=>{
    res.send("Hello World!");
});

app.get('/about',(req,res)=>{
    res.send("<h1>This is About Page</H1>");
})

app.get('/home',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.get('/user',(req,res)=>{
    res.json(users);
})

app.listen(port, ()=>{
    console.log(`Example app running on port ${port}`);
});