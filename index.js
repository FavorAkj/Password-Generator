let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15
let genBtn = document.getElementById("gen-btn")
let leftText = document.getElementById("left-text")
 let rightText = document.getElementById("right-text")
const leftIcon = document.getElementById("left-icon")
const rightIcon =document.getElementById("right-icon")

function getRandomCharacter(){
   let oneCharacter = Math.floor(Math.random()* characters.length)
   return characters[oneCharacter]
}
function generateRandomPassword(){
    let passWord = ""
    for(i=0; i<passwordLength; i++){
        passWord +=getRandomCharacter()
    }
    return passWord
}
genBtn.addEventListener("click", function(){
     leftText.textContent =   generateRandomPassword()
     rightText.textContent =  generateRandomPassword()
})

rightIcon.addEventListener("click", function() {
    navigator.clipboard.writeText(rightText.value).then(() => {      
    }).catch(err => {
  console.error("Error copying text: ", err)
    })  
})

leftIcon.addEventListener("click", function() {
    navigator.clipboard.writeText(leftText.value).then(() => {      
    }).catch(err => {
  console.error("Error copying text: ", err)
    })  
})