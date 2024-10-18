
require ('dotenv').config()
const express = require('express')  //cretaing n object from express library 
const app = express()  ///variable of express 
var  port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Welcome twitter')
})


app.get('/login',(req,res)=>{
    res.send('<h1>Please login at channel</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Welcome to youtube</h2>')
})

app.get('/home',(req,res)=>{
    res.send('<h1>Welcome to Home</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(` app listening on port ${port}`)
})