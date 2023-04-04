let p1Scores = []; 
let p2Scores = [];
var rollsLeft = 3; 
let highscore = 0;
let p1Turn = true;

let debugMode = true; 

let reeks3 = false;
let reeks2 = false;

let threeOfAKind = false;
let fourOfAKInd = false;
let fullHouse = false;
let smallStraight = false;
let largeStraight = false;
let chance = false;
let yahtzee = false;

let dice = []; 
let diceHold = [];

sc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let scoreSingles = [0,0,0,0,0,0,0];
let scoresnoak = [0,0,0,0,0,0,0];

function roll(){
	/* reset dice */
	if(rollsLeft === 3){
		for (i = 1; i < 6; i++){
			diceHold[i] = 0;
		}
	}

	for(w = 1; w <=6; w++){
		scoresnoak[w] = 0;
		scoreSingles[w] = 0;
		reeks2 = false;
		reeks3 = false;
		fullHouse = false;
	}

	if(rollsLeft > 0){
		for (i = 1; i <= 5; i++){
			if(diceHold[i] === 0){
				dice[i] = Math.floor(Math.random() * 6) + 1;
				document.getElementById("die" + i).setAttribute("src", "Dice-" + dice[i] + ".png");
			}
		}

		rollsLeft--;
		rolls.innerHTML = rollsLeft;
	}

	else console.log("rollsLeft=" + rollsLeft);
	//console.log(dice);

	checkSingles();
	checkNumOfAKind();
	checkFullhouse();
	checkSmallStraight();
	checkLargeStraight();
	checkYahtzee();

	if(debugMode){
		rollsLeft = 1;
	}

	calculatePoints(dice);
}

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

function checkSingles(){
	for(w = 1; w <=6; w++){
		for (i = 1; i <= 5; i++){
			if(dice[i] === w){
				scoreSingles[w] = scoreSingles[w] + w;
			}
		}
	}

	//console.log("scoreSingles = " + scoreSingles[1] + " " + scoreSingles[2]+ " " + scoreSingles[3]+ " " + scoreSingles[4]+ " " + scoreSingles[5]+ " " + scoreSingles[6]);
}

function checkNumOfAKind(){ 
	for(w = 1; w <=6; w++){
		scoresnoak[w] = 0;
	}
    	for(w = 1; w <=6; w++){
		for (d = 1; d <= 5; d++){
			if(dice[d] === w){
				scoresnoak[w]++;
			}
		}
	}
	for(w = 1; w <=6; w++){
		if(scoresnoak[w] === 3){
			threeOfAKind = true;
			console.log("THREE OF A KINDDDDD");
		}
		if(scoresnoak[w] === 4){
			fourOfAKind = true;
			console.log("FOUR OF A KINNDDDD");
		}
		
	}

	//console.log("scoresnoak : " + scoresnoak);	
}

function checkFullhouse(){
	//console.log("checkFullHouse : " + scoresnoak);
	for(w = 1; w <= 6; w++){
		if(scoresnoak[w] === 2) reeks2 = true;
		if(scoresnoak[w] === 3) reeks3 = true;
	}
	if(reeks2 === true && reeks3 === true){
		fullHouse = true;
		console.log("fullhouse :)))");
	}
}

function checkSmallStraight(){
	//console.log("checkSmallStraight : " + scoresnoak);

	if(scoresnoak[1] > 0 && scoresnoak[2] > 0 && scoresnoak[3] > 0 && scoresnoak[4] > 0) smallStraight = true;
	if(scoresnoak[2] > 0 && scoresnoak[3] > 0 && scoresnoak[4] > 0 && scoresnoak[5] > 0) smallStraight = true;
	if(scoresnoak[3] > 0 && scoresnoak[4] > 0 && scoresnoak[5] > 0 && scoresnoak[6] > 0) smallStraight = true;

	if(smallStraight === true)console.log("small straight found!");
}

function checkLargeStraight(){
	//console.log("checkLargeStraight : " + scoresnoak);

	if(scoresnoak[1] > 0 && scoresnoak[2] > 0 && scoresnoak[3] > 0 && scoresnoak[4] > 0 && scoresnoak[5] > 0) largeStraight = true;
	if(scoresnoak[2] > 0 && scoresnoak[3] > 0 && scoresnoak[4] > 0 && scoresnoak[5] > 0 && scoresnoak[6] > 0) largeStraight = true;

	if(largeStraight === true)console.log("large straight found!");
}

function checkYahtzee(){
	for(i = 1; i <= 6; i++) {
		if(dice[1] === i && dice[2] === i && dice[3] === i && dice[4] === i && dice[5] === i){
          	console.log("yahtzee!");
			yahtzee = true;
		}
   	}
}

function calculatePoints(dice){
	var score = 0;
	for (let i = 1; i < 6; i++){
		score = score + dice[i];
	}
	
	acesP1.innerHTML = scoreSingles[1];
	twosP1.innerHTML = scoreSingles[2];
	threesP1.innerHTML = scoreSingles[3];
	foursP1.innerHTML = scoreSingles[4];
	fivesP1.innerHTML = scoreSingles[5];
	sixesP1.innerHTML = scoreSingles[6];

	if(threeOfAKind){
		tkindP1.innerHTML = score;
	}

	if(fourOfAKInd){
		fkindP1.innerHTML = score;
	}

	if(fullHouse){
		fouseP1.innerHTML = 25;
	}

	if(smallStraight){
		smallP1.innerHTML = 30;
	}

	if(largeStraight){
		largeP1.innerHTML = 40;
	}

	
	chanceP1.innerHTML = score;
	

	if(yahtzee){
		yahtzeeP1.innerHTML = 50;
	}
	
	console.log("De score="+ score);

	
}

function lockScore(sc){
	for(i = 1; 1 >= 13; i++){
       	sc[i]++;
   	}
     console.log("je hebt gekozen voor : " + sc); 
}

function totals(){
	//total top
	var totalTop;
	
	//total bottom
	var totalBottom;

	//grand total
	grandP1Locked.innerHTML = totalTop + totalBottom;
}

function swapTurn(){
	if(p1Turn === true){
		p1Turn = false;
	}else if(p1Turn === false){
		p1Turn = true;
	}
}


