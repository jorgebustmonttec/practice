const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const symbolsCheck = document.querySelector('#symbolsOption')
const numberCheck = document.querySelector('#numberOption')
const lengthValue = document.querySelector('#passwordLength')

function GeneratePassword(){
    console.log("button press")
    if(symbolsCheck.checked){
        console.log("symbols checked")
    }
    if(numberCheck.checked){
        console.log("numbers checked")
    }
    if(parseInt(lengthValue.value)>parseInt(lengthValue.max)){
        console.log(parseInt(lengthValue.max))
    } else if(parseInt(lengthValue.value)<parseInt(lengthValue.min)){
        console.log(parseInt(lengthValue.min))
    }else{
        console.log(parseInt(lengthValue.value))
    }
}


