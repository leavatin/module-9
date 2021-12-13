const server = require("./server");
const express = require("express");
const jsreport = require("jsreport");
const myData = require("./data");

const app = express();

app.listen(3000, ()=>{
    console.log("app is listening to PORT 3000...")
});

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});     

app.get("/report", (req,res)=>{
    jsreport.render({
        template: {name:"temp1"},
        data: myData
    }).then(out =>{
        out.stream.pipe(res);
    }).catch(err =>{
        throw err;
    });
});