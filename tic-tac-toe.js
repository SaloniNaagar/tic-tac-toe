let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newGamebtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let front = document.querySelector("#front");
let turnO = true; //player X player O
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
                if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; // so that X and O doesn't copywrite
        checkWinner();
        
    });

});
const showWinner = (winner) => {
     msg.innerText = `Congratulation , Winner is ${winner} `;
     msgContainer.classList.remove("hide");
}
const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const checkWinner =() =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
      
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                disabledBoxes();
                showWinner(pos1Val);
               
            }
        }
    }
};
const resetGame = () =>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");

}
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame)