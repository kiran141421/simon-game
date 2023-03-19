
var colours=["green","red","yellow","blue"];
var generatedSequence=[];
var userSequence=[];
var level=1;
var count=0;
var col="green";

document.addEventListener("keydown",gameStart);
var buttons=document.querySelectorAll(".btn");
for(var i=0;i<buttons.length ;i++)
{
    buttons[i].addEventListener("click",function(event){
        makeSound(this.id);
        flash(this.id);
        userSequence.push(this.id);
        console.log("count="+count);
        count++;
        checkSequence(count);
    });
} 

function gameStart()
{   
        document.removeEventListener("keydown",gameStart);
        document.querySelector("#level-title").innerHTML= "LEVEL "+level;
        col=nextSequence();
        makeSound(col);
        flash(col);
        generatedSequence.push(col); 
        
       
}

function nextSequence()
{
    var randomNumber=Math.floor(4*Math.random());
    return colours[randomNumber];
}

function makeSound(name)
{
    var audio=new Audio("public/sounds/"+name+".mp3");
    audio.play();
}

function flash(color)
{
    document.querySelector("#"+color).classList.add("pressed");
    window.setTimeout(function(){
        document.querySelector("#"+color).classList.remove("pressed");
    },100);
}

function checkSequence(num)
{
    if(userSequence[num-1]==generatedSequence[num-1])
    {
        
        if(num==level)
        {
            level++;
            userSequence=[];
            count=0;
            window.setTimeout(gameStart,500);    
        }
    }
    else
    {
        level=1;
        count=0;
        generatedSequence=[];
        userSequence=[];
        makeSound("wrong");
        document.querySelector(".screen").classList.add("game-over");
        setTimeout(function(){
            document.querySelector("body").classList.remove("game-over");
        },100);
        document.querySelector("#level-title").innerHTML="Press A Key to Start";
        document.addEventListener("keydown",gameStart);
    }
}
