
function genRand(lower, upper){
    let rand = (Math.floor(Math.random() * upper +1));
        if (rand <= lower){ 
            
            genRand(lower, upper);
        }
    return rand;   
}
//---------------------------------------------
function genMagicNo(){
    magic = genRand(19,120); //generate magic number between 19 & 120 per requirements
    
    $("#number").html("Magic Number: " + magic);
    tempSum=0;
    return magic;
}

//---------------------------------------------
function check(x,y){
    if(x === y){
        wins++;
        alert("You win!!");
        " "("wins: " +wins);
        DOMuWL(wins,losses);
        tempSum=0;
        DOMuNo(tempSum);
        genMagicNoMagic();
        
        buttons();
    }
    if(x > y){
        losses++;
        
        DOMuWL(wins,losses);
        alert("Magic number exceeded!! You lose." );

        // ???? can we add sound?
        tempSum=0;
        DOMuNo(tempSum);
        genMagicNo();
       
        buttons();  
    }

}
//---------------------------------------------
function DOMuNo(x){
    $("#yourNum").html("Your Number: " + x);
}
//---------------------------------------------
function DOMuWL(wins,losses){
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
}
//---------------------------------------------

function buttons(){ 
    btns.length = 0; 
    tempArray.length = 0;
    for (let i=0; i<=3; i++){
        tempArray[i] = genRand(1,12); 
    }
    
    tempArray.sort(); 
    

    for (let i=0; i<=3; i++){ 
        if (tempArray[i] === tempArray[i+1]){
            
            buttons(); 
        } else {
            btns[i] = tempArray[i]; 
        }
    }
    
    //---------------------------------------------

    function arraySum(total, num) { 
        return total + num;
      }
        let buttonSum = 0;  
        buttonSum = btns.reduce(arraySum);
        
        if (buttonSum > magic){
          
            buttons();
        }    
    };
    
    //---------------------------------------------
    function play(){
        $("#green").on("click", function(event){
            tempSum += btns[0]; 
            DOMuNo(tempSum);
            check(tempSum,magic);
        })
        $("#red").on("click", function(event){
            tempSum += btns[1]; 
            DOMuNo(tempSum);
            check(tempSum,magic);
        })
        $("#purple").on("click", function(event){
            tempSum += btns[2]; 
            DOMuNo(tempSum);
            check(tempSum,magic);
        })
        $("#blue").on("click", function(event){
            tempSum += btns[3]; 
            DOMuNo(tempSum);
            check(tempSum,magic);
        })
        
    }

//---------------------------------------------

let btns = [];
let losses = 0;
let magic = 0;
let tempArray = [];
let tempSum = 0;
let wins = 0;




genMagicNo();
buttons();
play();



