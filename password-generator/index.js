

function GeneratePassword(){
    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    const symbols =["~","`","!","@","#","$","%","^","&","*","(",")","_", "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

    const numbers =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    let characters = letters;
    
    const symbolsCheck = document.querySelector('#symbolsOption')
    const numberCheck = document.querySelector('#numberOption')
    const lengthValue = document.querySelector('#passwordLength')

    if (symbolsCheck.checked){
        characters=characters.concat(symbols)
    }
    if(numberCheck.checked){
        characters=characters.concat(numbers)
    }
    let randomIndex = Math.floor((Math.random()*characters.length)+1);

    randomCharacter=characters[randomIndex]
    console.log(randomCharacter)
}
