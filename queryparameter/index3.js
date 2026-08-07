// Add new user with property id , name and age

const express = require('express');
const app = express();

let users = [{"id":1,"name":"anuj","age":"22"},{"id":2,"name":"rishabh","age":"22"},{"id":3,"name":"prince","age":"22"},{"id":6,"krishna":"anuj","age":"22"},{"id":5,"name":"mayank","age":"22"}];

app.get("/signup/:name/:age", (req,res)=>{
    let {name , age} = req.params;
    let id =Math.ceil(Math.random()*100000);
    let newUser = {
        id:id,
        name:name,
        age:age
    };
    users.push(newUser);
    res.send(users);
})

//delete user

app.get("/delete/:id", (req,res)=>{
    let id = req.params.id;
    for(let user in users){
        console.log(user)
        if(users[user].id==id) {
            console.log(user);
            users.splice(user,1);
            break;
        }
    } 
    res.send(users);
})


//update user details

app.get("/update/:id/field/:field/value/:value", (req,res)=>{
    let {id,field,value} = req.params;
    for(let user in users){
        if(users[user].id==id){
            if(field=="id") users[user].id = value;
            else if(field=="name") users[user].name = value;
            else if(field=="age") users[user].age = value;
        }
    }
    res.json(users)
})

app.listen(3000,()=>{
    console.log("Server started!!");
})