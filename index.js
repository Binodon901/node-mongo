const express=require('express')

const app=express();

app.get('/',(req,res)=>{
    res.send("Thank yoy for calling me")
})

app.get('/fruit',(req,res)=>{
    res.send({fruit:'Banana',quqntity:'100',price:100})
})

app.listen(3000,()=>{
    console.log('listen port 3000');
})