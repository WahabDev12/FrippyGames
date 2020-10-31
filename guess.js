const myInput = document.getElementById("input");
myInput.addEventListener("keyup",(e)=>{
    if(e.keyCode === 13){
        document.getElementById("btn").click()
    }
})


document.getElementById("btn").addEventListener("click",guessNumber)
function guessNumber(){
    const myNumber = document.getElementById("input").value;
    const botNumber = Math.floor(Math.random()*50);
    if(parseInt(myNumber) === botNumber ){
        document.getElementById("result").innerHTML = "You Won 🥳🥳";
        document.getElementById("input").value = "";
        document.getElementById("stats").innerHTML = "Your Number is " + myNumber + "\n" + "Bot Number is also " + botNumber;
    }

    else{
        document.getElementById("result").innerHTML = "You Lost ❌❌";
        document.getElementById("input").value = "";
        document.getElementById("stats").innerHTML = "Your Number is " + myNumber + "\n" + "Bot Number is " + botNumber;
    }
    
     if(parseInt(myNumber) == 0){
        document.getElementById("result").innerHTML = "Number should be greater than 0";
        document.getElementById("stats").style.display = "none";

    }

    if(parseInt(myNumber) >= 51){
        document.getElementById("result").innerHTML = "You are out Of Range ❌❌ ";
        document.getElementById("stats").style.display = "none";

    }

}



