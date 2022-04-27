const express=require('express')

const app=express();

app.get('/',(req,res)=>{
    res.send("Thank yoy for calling me")
})

app.listen(3000,()=>{
    console.log('listen port 3000');
})