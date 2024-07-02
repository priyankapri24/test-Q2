let btn=document.querySelector(".btn")


btn.addEventListener("click",gamestart)


var attemt=0
var game=false
var randomnum=Math.floor(Math.random()*10+1)
var input;

function gamestart(){
    game=true
    while(game!==false){
        input=parseInt(prompt("Guess the number between 1 and 10:"))
        attemt=attemt+1
        if (isNaN(input) || input < 1 || input > 10) {
            alert("Please enter a valid number between 1 and 10.");
            
        }

        if(input===randomnum){
            alert(`Congratulation! you guessed the correct number ${input} in ${attemt} attempt `)
            game=false

        }
        else(
            comprasion(randomnum,input)
    
        )
    }
}


function comprasion(random,input) {
   
    if(random<input){
        alert("Your guess is too hig. Try again!")
    }
    else{
        alert("Your guess is too low. Try again!")

    }

    
}
