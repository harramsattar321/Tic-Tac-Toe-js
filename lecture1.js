let box = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let turnO = true;
let count=0;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const enabledboxes =()=>{
    for (let b of box){
        b.disabled = false;
        b.innerText = ''; 
    }
}
const disabledboxes =()=>{
    for (let b of box){
        b.disabled = true; 
    }
}
const resetgame=()=>{
    turnO=true;
    enabledboxes();
    msgcontainer.classList.add('hide');

}
const showwinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    disabledboxes();
}
const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1=box[pattern[0]].innerText;
        let pos2=box[pattern[1]].innerText;
        let pos3=box[pattern[2]].innerText;

        if(pos1 != '' && pos1 === pos2 && pos2 === pos3){
            showwinner(pos1);
        }
        
    }
};

const boxx = (box) =>{
    count=count+1;
    if(turnO){
        box.innerText = 'O';
        turnO = false;
    }
    else{
        box.innerText = 'X';
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
    if (count === 9){
        msg.innerText = `OOPs! Game Draw`;
        msgcontainer.classList.remove('hide');
    }

}
const boxes= (box) => {
    box.addEventListener("click",()=>boxx(box))
}

box.forEach(boxes);

newbtn.addEventListener('click',resetgame);
resetbtn.addEventListener('click',resetgame);