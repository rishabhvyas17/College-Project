const express = require('express');
const app = express();

app.get("/users/:id", (req,res)=>{
    console.log(req.params.id);
    res.send(req.params.id);
})

app.get("/post/:id/username/:username", (req,res)=>{
    let {id, username} = req.params;
    res.send(id+username);
    console.log(id,username);
})
app.listen(3000,()=>{
    console.log("Server started!");
})