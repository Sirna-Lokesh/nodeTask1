const express=require('express');
var url = require('url');
const app=express();

app.get('/',(req,res)=>{
    var q = url.parse(req.url, true);
    var qdata = q.query;
    console.log(qdata.name);
    res.send("Hello World " +qdata.name);
});

app.listen(3000,()=>{
    console.log("server running")
});
