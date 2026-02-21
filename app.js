let gameseq=[];
let userseq = [];

let btns = ["yellow","red","purple","green"]
let started = false;

let level =0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function()
{
   if(started==false)
   {
    started = true;
    levelup();
   }
});
function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
       btn.classList.remove("flash"); 
    },250);
}

function levelup()
{
    userseq =[];
    level++;
    h2.innerText = `Level ${level}`;
    let randomidx = Math.floor(Math.random()*btns.length);
    let randcol = btns[randomidx];
    let randbtn = document.querySelector(`.${randcol}`);
    // console.log(randbtn);
    // console.log(randcol);
    gameseq.push(randcol);
    btnflash(randbtn);
}

function checkans(idx)
{
    if(userseq[idx] === gameseq[idx])
    {
        if(userseq.length == gameseq.length)
        {
            setTimeout(levelup,1000);
        }
    }
   else {
    h2.innerText = `Your score is ${level*100}. Game Over! Press any key to restart`;

    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
    }
}

function btnpress(){
    let btn = this;
    btnflash(btn);
   let usercol = btn.getAttribute("id");
    userseq.push(usercol);
    checkans(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns)
{
    btn.addEventListener("click",btnpress)
}