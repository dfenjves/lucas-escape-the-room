console.log("hello world")


let gramaphone = document.querySelector("#gramaphone")

let audioClue = new Audio()
audioClue.src = "moo.wav"


gramaphone.addEventListener("click", (event) => {
  console.log("hi")
  audioClue.play()
  })
