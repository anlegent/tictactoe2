let startcpubtn = document.querySelector(".newgamecpu")
let startbtn = document.querySelector(".newgameplayer")

let restartbtn = document.querySelector(".redobtn")
let confirmredo = document.querySelector("#confirmredo")
let cancelredo = document.querySelector("#cancelredo")

let newgame = document.querySelector(".newgame")
let game = document.querySelector(".game")

let p1windiv = document.querySelector(".p1win")
let p2windiv = document.querySelector(".p2win")

let tie = document.querySelector(".tie")
let restart = document.querySelector(".restart")
let faded1 = document.querySelector("#fadedbg1")
let faded2 = document.querySelector("#fadedbg2")
let faded3 = document.querySelector("#fadedbg3")
let faded4 = document.querySelector("#fadedbg4")

addEventListener("load", () =>{
    game.classList.add("hide")
    p1windiv.classList.add("hide")
    p2windiv.classList.add("hide")
    tie.classList.add("hide")
    restart.classList.add("hide")
faded1.classList.add("hide")
faded2.classList.add("hide")
faded3.classList.add("hide")
    faded4.classList.add("hide")
})

startcpubtn.addEventListener("click", ()=>{
alert("this functionality is not available yet.")
console.log("this functionality is not available yet.")
})
startbtn.addEventListener("click", ()=>{
    console.log("starting game...")
    game.classList.remove("hide")
    newgame.classList.add("hide")
})

restartbtn.addEventListener("click", ()=>{
    console.log("restart?")
    restart.classList.remove("hide")
    faded4.classList.remove("hide")
})
cancelredo.addEventListener("click", ()=>{
    console.log("restarting cancelled")
    restart.classList.add("hide")
    faded4.classList.add("hide")
})
confirmredo.addEventListener("click", ()=>{
    console.log("restarting...")
    restart.classList.add("hide")
    game.classList.add("hide")
    faded4.classList.add("hide")
    newgame.classList.remove("hide")
})