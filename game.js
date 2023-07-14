var h1 = document.querySelector(".container h1");
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var p1 = Math.round((Math.random()*5) + 1);
var p2 = Math.round((Math.random()*5) + 1);

if(p1==1)
{
    img1.setAttribute("src","DiceGame/dice1.png");
}
else if (p1==2)
{
    img1.setAttribute("src","DiceGame/dice1.png");
}
else if (p1==3)
{
    img1.setAttribute("src","DiceGame/dice1.png");
}
else if (p1==4)
{
    img1.setAttribute("src","DiceGame/dice1.png");
}
else if (p1==5)
{
    img1.setAttribute("src","DiceGame/dice1.png");
}
else if (p1==6)
{
    img1.setAttribute("src","DiceGame/dice1.png");
}

if(p2==1)
{
    img2.setAttribute("src","dice1.png");
}
else if (p2==2)
{
    img2.setAttribute("src","dice2.png");
}
else if (p2==3)
{
    img2.setAttribute("src","dice3.png");
}
else if (p2==4)
{
    img2.setAttribute("src","dice4.png");
}
else if (p2==5)
{
    img2.setAttribute("src","dice5.png");
}
else if(p2==6)
{
    img2.setAttribute("src","dice6.png");
}

if(p1>p2){
h1.textContent = "🏁Player 1 Win";
}
else if (p1<p2) 
{
    h1.textContent = "Player 2 Win🏁";
}
else if (p1==p2)
{
    h1.textContent = "Try again its a Draw";
}


