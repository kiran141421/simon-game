
const express=require("express");
const bodyParser=require("body-parser");

const app=new express();

app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html"); 
    document.addEventListener("keydown",function(){
        console.log("Key was pressed");
    }); 
});

app.listen(3000,function(req,res){
    console.log("app listening at port 3000");
});