let audio = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;

function changeTurn () {
    if(turn === "X"){
        return turn = "O";
    }
    else{
        return turn = "X";
    }
}

function checkWin(){
    let boxTexts = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2,0,0.5,4],
        [3,4,5,0,0.5,12],
        [6,7,8,0,0.5,20],
        [0,3,6,90,12,7.5],
        [1,4,7,90,12,-0.5],
        [2,5,8,90,12,-8.5],
        [0,4,8,45,9.2,8],
        [2,4,6,-45,-8,8.8]
    ]
    wins.forEach(e =>{
        if(boxTexts[e[0]].innerText === boxTexts[e[1]].innerText && boxTexts[e[2]].innerText === boxTexts[e[1]].innerText && boxTexts[e[0]].innerText !== ""){
            document.querySelector("p").innerText = boxTexts[e[0]].innerText + " Won";
            isGameOver = true;
            document.querySelector(".image").getElementsByTagName("img")[0].style.width = "150px";
document.querySelector(".line").style.display =   "block";

    document.querySelector(".line").style.transform =   `rotate(${e[3]}deg) translate(${e[4]}vw,${e[5]}vw)`;
        }
    })
}


let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    
    element.addEventListener("click",function(){
        let boxText = element.querySelector(".boxText");
        if(boxText.innerText === ""){
                boxText.innerText = turn;
                checkWin()
                changeTurn();
                audio.play();
                if(isGameOver === false){
                    
                    document.querySelector("p").innerText = "Turn: "+turn;
                }
            }
      
    })
})
function reset(){
    turn = "X"
    isGameOver = false;
Array.from(boxes).forEach(element =>{
    element.querySelector(".boxText").innerText = "";
    document.querySelector("p").innerText = "Turn: "+turn;

})
document.querySelector(".line").style.display =   "none";
document.querySelector(".image").getElementsByTagName("img")[0].style.width = "0px";

}