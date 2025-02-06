let startcpubtn = document.querySelector(".newgamecpu")
let startbtn = document.querySelector(".newgameplayer")

let newgame = document.querySelector(".newgame")
let game = document.querySelector(".game")

let notice = document.querySelector(".notice")

addEventListener("load", () =>{
    game.classList.add("hide")
    // notice.classList.add("hide")
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