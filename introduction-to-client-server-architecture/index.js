import express from 'express'
const app = express()

app.get('/Home',(req,res)=> {
    res.send('Home')
})

app.get('/About',(req,res)=> {
    res.send('About')
})

app.get('/Support',(req,res)=> {
    res.send('This is Support Page')
})

app.listen(3022, ()=>{
    console.log('Server is running on port: 3022 ')
})