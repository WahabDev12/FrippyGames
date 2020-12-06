    const url = "http://api.quotable.io/random";
    const quoteDisplay = document.getElementById("data");
    const quoteInput = document.getElementById("input");  
    const timerElement = document.getElementById("timer");
    const displayScore = document.getElementById("score");


    quoteInput.addEventListener("input",()=>{
        const arrayQuote = quoteDisplay.querySelectorAll("span");
        const arrayValue = quoteInput.value.split("");
        let correct = true;
        arrayQuote.forEach((characterSpan,index)=>{
              const character = arrayValue[index];
              if(character == null){
                characterSpan.classList.remove("correct");
                characterSpan.classList.remove("incorrect");
                correct = false;
              }
              else  if(character === characterSpan.innerText){
                  characterSpan.classList.add("correct");
                  characterSpan.classList.remove("incorrect");
              }
              else{
                characterSpan.classList.add("incorrect");
                characterSpan.classList.remove("correct");
                correct = false;
  
              }
        })

        let score = 0
        if(correct){
            score++
            getNext()
            document.getElementById("input").value = null;  
        }
        displayScore.innerHTML = `${score}`;
        console.log(score)

        
    })

    function getRandom(){
      return fetch(url)
         .then(response => response.json())
         .then(data => data.content)
    }
    
    async function getNext(){
        const quote = await getRandom();
        quoteDisplay.innerHTML = "";
        quote.split("").forEach(character =>{
            const characterSpan = document.createElement("span");
            characterSpan.innerText = character;
            quoteDisplay.appendChild(characterSpan);
        })
        startTimer()
    }
    
    let startTime;
    function startTimer(){
        timerElement.innerText = 0;
        startTime = new Date();
        setInterval(()=>{
            timer.innerText = getTimerTime()
        },1000)
    }

    function getTimerTime(){
        return Math.floor((new Date()-startTime)/1000)
    }
    getNext();
 