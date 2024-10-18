
require ('dotenv').config()
const express = require('express')  //cretaing n object from express library 
const app = express()  ///variable of express 
var  port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/login',(req,res)=>{
    res.send('<h1>Please login </h1>')
})


app.listen(process.env.PORT, () => {
  console.log(` app listening on port ${port}`)
})