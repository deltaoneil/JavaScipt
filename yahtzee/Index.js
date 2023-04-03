let p1Scores = []; 
let p2Scores = [];
var rollsLeft = 3; 
let highscore = 0;
let p1Turn = true; 

let dice = []; 
let diceHold = [];

function roll(){
	/* reset dice */
	if(rollsLeft === 3){
		for (let i = 1; i < 6; i++){
			diceHold[i] = 0;
		}
	}

	if(rollsLeft > 0){
		for (let i = 1; i < 6; i++){
			if(diceHold[i] === 0){
				dice[i] = Math.floor(Math.random() * 6) + 1;
				document.getElementById("die" + i).setAttribute("src", "Dice-" + dice[i] + ".png");
			}
		}	
		rollsLeft--;
		rolls.innerHTML = rollsLeft;
	}
	else console.log("rollsLeft=" + rollsLeft);
	calculatePoints(dice);
	console.log(dice);
}

function nOfAKind(num,dice){ 
    let points;
    return points;
}

function fullHouse(dice){}

function smallStraight(){}

//funtion largeStraight(){}

function yahtzee(){

    /* check voor yahtzee, als alle dobbelstenen hetzelfde waarde hebben */
    for(i=1 ; i<=6; i++) {
 
    	/* loop over alle 5 dobbelstenen*/
    	score = 0;
    	for(d=1 ; d<=5; d++) {
    	       if(dice[d] === i) score++;
    	}
    	/* score=5 betekent dat we alle 5 gelijke waarden hebben */
    	if (score === 5) {
		console.log("yahtzee!");
    	}
    }
}

function chance(){}

function single(num,dice){}

function lockDie(die){
	did =  "die" + die;
	if(diceHold[die]){
		/* unHold */
		document.getElementById(did).setAttribute("style", "width: 85px; height: 85px;");
		diceHold[die] = 0;
	}
	else{
		/* hold */
		document.getElementById(did).setAttribute("style", "width: 70px; height: 70px;");
		diceHold[die] = 1;
	}
}

function calculatePoints(dice){
	var score=0;
	for (let i = 1; i < 6; i++){
		score = score + dice[i];
	}
	console.log("De score="+ score);
}

function swapTurn(){
	if(p1Turn === true){
		p1Turn = false;
	}else if(p1Turn === false){
		p1Turn = true;
	}
}

