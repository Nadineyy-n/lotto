
let input = document.getElementById("nums");
let btn = document.getElementById("btn");
let numbers = document.getElementById("myNums");
let results = document.getElementById("actNums");
let pp = document.getElementById("p");
let cc = document.getElementById("cc");

let playerNumbers = [];
let actualNumbers = [];
let counter = 0;
let points = 0;

btn.onclick = function(){
   main()
}

 document.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {  
        main(); 
      }
    });

function generateNumbers(){
     let i = 0
     while (i < 7){
     let y = Math.floor((Math.random() * 49) + 1);

     if (!actualNumbers.includes(y)){
      actualNumbers[i] = y;
      i++;
     }
     
   }
}

function winning(){

  for (let i = 0; i < 7 ; i++){
    
    let a = playerNumbers[i];

    for(let j = 0;j < 7;j++){
      if (actualNumbers[j] == a){
        points++;
      }
    }
  }
}

function main(){
    let x = input.value;
    let y = x.toString()

    if(counter >= 7){
        cc.textContent = "You have already entered the 7 numbers!"
        return
   }

    else if(y.includes('.')){
        cc.textContent = "Numbers with decimals are not allowed!"
    }

    else if (playerNumbers.includes(x)){
        cc.textContent = "You have already chosen this number!"
       
    }

    else if( x < 1 || x > 49){
         cc.textContent = "Eligible numbers are from 1 to 49!"
    }

    else{
        playerNumbers.push(x);
        cc.textContent = "";
        counter += 1
    }
       
  input.value = "";
  playerNumbers.sort((a,b) => a - b);
  numbers.textContent = "YOUR NUMBERS   : " + playerNumbers;
 
  work(counter)
}

function work(num){
    if (num === 7){
        generateNumbers();

        actualNumbers.sort((a,b) => a - b);
    
        results.textContent = "ACTUAL RESULTS : " + actualNumbers;
       
        winning()
        if (points === 0){
            pp.textContent = "Lucky is not your thinggg!!!";
        }

        else if(points === 1){
            pp.textContent = "You got " + points + " number!";
        }

        else{
            pp.textContent = "You got " + points + " numbers!";
        }
        
    }
}