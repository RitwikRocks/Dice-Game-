function random(){
    var num=Math.floor(6*Math.random()+1)
    return num;
}
 var name1=prompt("Enter the Name of First Player");
 var name2=prompt("Enter the Name of Second Player");
// var loop=prompt("Enter the number of turns");
// var name1="Ritwik";
// var name2="Aastha";
 document.querySelector("#p1").innerHTML=name1;
 document.querySelector("#p2").innerHTML=name2;

//document.querySelector("#dice1").innerHTML=n1;
// document.querySelector("#dice2").innerHTML=n2;
function main()
{
    var n1=random();
    var n2=random();
if(n1===1)
document.querySelector("#dice1").src="one.png";
if(n1===2)
document.querySelector("#dice1").src="two.png";
if(n1===3)
document.querySelector("#dice1").src="three.png";
if(n1===4)
document.querySelector("#dice1").src="four.png";
if(n1===5)
document.querySelector("#dice1").src="five.png";
if(n1===6)
document.querySelector("#dice1").src="six.png";
if(n2===2)
document.querySelector("#dice2").src="two.png";
if(n2===3)
document.querySelector("#dice2").src="three.png";
if(n2===4)
document.querySelector("#dice2").src="four.png";
if(n2===5)
document.querySelector("#dice2").src="five.png";
if(n2===6)
document.querySelector("#dice2").src="six.png";
if(n2===1)
document.querySelector("#dice2").src="one.png";
if(n1>n2)
{
    // if(n1==1)
    // document.querySelector("#dice1").src="Dice_Game\images\one.png";
    document.querySelector(".heading").innerHTML=name1+ " Wins";

    
}
if(n1<n2)
document.querySelector(".heading").innerHTML=name2+" Wins";
if(n1==n2)
document.querySelector(".heading").innerHTML="Match is Tie";
}

document.querySelector(".btn").addEventListener("click",main);