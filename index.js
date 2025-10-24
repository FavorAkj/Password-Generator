let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15
let genBtn = document.getElementById("gen-btn")
let leftText = document.getElementById("left-text")
let rightText = document.getElementById("right-text")

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
function copy(){
    navigator.clipboard.writeText(
        document.getElementById("left-icon").textContent
    )

}
function copyParagraphText() {
  const paragraph = document.getElementById("left-text");
  const textToCopy = paragraph.innerText; // Get the text content of the paragraph
  const copyMessage = document.getElementById("copyMessage");

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      // Success: Show a message and then hide it
      copyMessage.style.display = "inline";
      setTimeout(() => {
        copyMessage.style.display = "none";
      }, 2000); // Hide after 2 seconds
    })
    .catch(err => {
      // Error: Handle potential issues (e.g., user denied permission)
      console.error("Failed to copy text: ", err);
      alert("Failed to copy text. Please try again.");
    });
}
function copyParagraphText() {
  const paragraph2 = document.getElementById("right-text");
  const textToCopy2 = paragraph2.innerText; // Get the text content of the paragraph
  const copyMessage2 = document.getElementById("copyMessage");

  navigator.clipboard.writeText(textToCopy2)
    .then(() => {
      // Success: Show a message and then hide it
      copyMessage2.style.display = "inline";
      setTimeout(() => {
        copyMessage2.style.display = "none";
      }, 2000); // Hide after 2 seconds
    })
    .catch(err => {
      // Error: Handle potential issues (e.g., user denied permission)
      console.error("Failed to copy text: ", err);
      alert("Failed to copy text. Please try again.");
    });
}