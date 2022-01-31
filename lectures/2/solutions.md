[< back](README.md)

# Solutions 2

## Fun with Functions

```javascript
'use strict'
//SEE: https://javascript.info/strict-mode

console.log("JS er klar!");
let logNo=1;
function sepLog(text=""){
  console.log("--------Exercise " + logNo + " " + text+ "-----------------");
  logNo++;
}
let diceRoll=[1,6,6,2,3,4,6];

sepLog("V1: no func parameters");
/*
Write a function get6s_v1 that takes an array of numbers (dice values 1..6) as parameter, and prints the indexes and corresponding values,
 of the array elements are 6s 1:6, 2:6, 6:6 ..." excluding other elements. At this stage, just write a basic version, eg. without function paramters
Appply the funtion to the above array arr as argument.
*/

function get6s_v1(dice){
  for(let i=0;i<dice.length;i++)
    if(dice[i]===6) 
      console.log(i+":"+dice[i]);
}

get6s_v1(diceRoll);

sepLog("V2: no func parameter, but helper to compare");
/*
  Write a helper function eg "is6(v)" that can test if the supplied parameter value v is a 6 
  Rewrite get6s_v1 to get6_v2 such that it uses the helper function to test if the index/value should be printed.  
  Appply the funtion to the above array arr.
*/

function is6(d){
  if(d===6) return true;
  else return false;
}

//or simply
function is6_v2(d){
  return (d===6);
}

function get6s_v2(dice){
  for(let i=0;i<dice.length;i++)
    if(is6(dice[i])) 
      console.log(i+" "+dice[i]);
}
get6s_v2(diceRoll);

sepLog("V3 compare function parameter");
/*
  Now create a get6s_v3 that rewrites get6_v2 to accept a dice array as first parameter, and a "compare" function as second parameter.
  Apply the function using the diceRoll and function "is6" as actual arguments
*/
function get6s_v3(dice,compare){
  for(let i=0;i<dice.length;i++)
    if(compare(dice[i])) 
      console.log(i+" "+dice[i]);
}
get6s_v3(diceRoll,is6);



sepLog("V4: anonym compare function");

/*
Copy and rename the get6s_v3 function to findDices_v1(dice,compare). Call it with the same arguments as above using the diceRoll and function "is6"
Then call it using a function expression (named or anonymous) at the call site, to pass a function that selects 1 dices.
*/
function findDices_v1(dice,compare){
  for(let i=0;i<dice.length;i++)
   if(compare(dice[i])) 
      console.log(i+" "+dice[i]);
}
findDices_v1(diceRoll,is6);
console.log();
findDices_v1(diceRoll,function (d){return (d===1)});

sepLog("V5: using a lambda expression");
/*
Then call it using ta lambda expession to pass a function that selects dices with values <= 3.
*/

findDices_v1(diceRoll,d=>(d<=3));

sepLog("V6: closures");

/* make a compare function factory "makeIsN(diceN)" that returns a function that compares its parameter value v.
  us it to create a functio is1 that checks if a dices has value 1.
*/

function makeIsN(diceN){
  let isN=function(d){
    return (d===diceN);
  }
  return isN;
}
let is1=makeIsN(1);

findDices_v1(diceRoll,is1);


sepLog("V7: return an array; ussing for-of and array method forEach");

/*
  Now based on findDices_v1 create a version 2 such that it returns an array of the found element instead of printing them to the log.
  print the output (array) when applied to diceRoll, is6. Use the array method forEach to iterate over all dice of the diceRoll, or use for-of.
  Hint: make an variable holding an empty array and use the push method on that to insert the found elements.
*/

function findDices_v2(dice,compare){
  let result=[];
  for(let d of dice)
    if(compare(d))
      result.push(d);
  return result;
}
console.log(findDices_v2(diceRoll,is6));

function findDices_v3(dice,compare){
  let result=[];
  dice.forEach( d => {
   if(compare(d)) 
      result.push(d);
  });
  return result;
}
console.log(findDices_v3(diceRoll,is6));

sepLog("V8: compare to array method filter");
/*
  Consider the following statement "console.log(diceRoll.filter(is6));" and compare that with the code you have written in the function exercise
  Any similarities?
*/
console.log(diceRoll.filter(is6));

sepLog();
```

## Objects: MessageBoard

```javascript
let msgBoard={
  handlers: [],
  messages: [],
  boardName: "IWP Chat",
  register: function(f){
    this.handlers.push(f);
  },
  printMessages: function(){
    console.log("Messages History in board "+ this.boardName+":");
    for(let m of this.messages)
      console.log(m);
  },
  putMessage: function (m){
    this.messages.push(m);
  },
  sendAndNotifyMessage: function(message){
    this.messages.push(message); //better: this.putMessage(message);
    for(let f of this.handlers)
     f(this.boardName,message);
  }
};
     
     
    
msgBoard.putMessage("Hej, dette er en test");
msgBoard.putMessage("Hej IWP");
msgBoard.printMessages();
    
//register eventHandlers (call-back functions)
function briansHandler(boardName,message){
  console.log(`Brian! A message from ${boardName}: ${message}`);
}
msgBoard.register(briansHandler);
msgBoard.register((board,message)=>console.log(`Board ${board} says to Michele: ${message}`));
msgBoard.sendAndNotifyMessage("URGENT: Opgaveregning nu!")
    
/* EXERCISE, brug gerne et constructor funktion til at oprette msgBoards */    
    
function MessageBoard(boardname){
  this.handlers= [];
  this.messages= [];
  this.boardName=boardname;
  this.register= function(f){
    this.handlers.push(f);
  };
  this.printMessages =function(){
    console.log("Messages History in board "+ this.boardName+":");
    for(let m of this.messages)
      console.log(m);
    };
    this.putMessage= function (m){
    this.messages.push(m);
  };
  this.sendAndNotifyMessage= function(message){
    this.messages.push(message); //better: this.putMessage(message);
    for(let f of this.handlers)
      f(this.boardName,message);
  }
}
let board2= new MessageBoard("Opgave Regning");
     
board2.putMessage("Hej, dette er en test");
board2.printMessages();
    
//register eventHandler, get message, call all back
    
board2.register(briansHandler);
board2.register((board,message)=>console.log(`Board ${board} says to Michele: ${message}`));
board2.sendAndNotifyMessage("URGENT: Opgaveregning nu!")
```

## Console Multi Yatsy

```javascript
/* ***************************************************************************************************************
* This program is inspired by Kurt NÃ¸rmarks exam assignment for C-programming for first semester students.
* This version of Yatzy is intentionally programmed as a simple C-style implementation in JavaScript; 
* Hence, more elegant JS implementations can be programmed. For IWP, this imperative style version is perfectly OK! 
**************************************************************************************************************** */
import fs from 'fs';  //enable use of file system
//Note that we use EC6 modules! 
//You may need to add this to the package.json file when using EC6 modules: "type": "module",

/* ***************************************************************************************************************
* First a series of basic constants and functions that are essential to yatzy games
**************************************************************************************************************** */

const M=10; //Number of dice to be used in the game:  >=5 , <=20
const minDice=1; const maxDice=6; //min and max value of a normal dice.

//A Yatzy "play" consists of completing 15 game rounds, plus computing 3 "special" status rounds (sum,bonus,total).
//Here simplified to 18 rounds.
const noRounds=18;
const rounds={ //as C-enums doesn't directly exist in JS, we emulate it using an object
  ones:   0,
  twos:   1,
  threes: 2,
  fours:  3,
  fives:  4,
  sixes:  5,
  sum:    6,
  bonus:  7,
  onePair:   8,
  twoPairs:  9,
  threeId:  10,
  fourId:   11,
  littleS:  12,
  bigS:     13,
  house:    14,
  chance:   15,
  yatzy:    16,
  total:    17
};

function isSpecialRound(round){
  return ((round===rounds.sum || round===rounds.bonus || round===rounds.total));
}

//An Array that contains the textual name of each round; used when printing the scoreboard.  
const roundsText=["1s", "2s",  "3s", "4s", "5s", "6s", "Sum", "Bonus", "1 Pair", "2 Pairs", "Three Identical", "Four Identical",
  "Little Straight",  "Big Straight",   "House",   "Chance",   "Yatzy",  "Total Score"
];

/*
//return a random number between min and max
function random(min,max){
    return Math.floor(Math.random() * (+max + 1 - +min)) + +min;
    //in an expression +var converts var to its numeric value (in case it is called with non-int types)
}
*/
//return a random number between min and max
function random(min,max){
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

//Function diceRoll returns an array that represents the outcome of rolling M dice
//e.g diceRoll [1,6,5,5,2]
function roll(M){
    let diceRoll=[];
    for(let i=0;i<M;i++){
       diceRoll[i]= random(minDice,maxDice);
    }
    return diceRoll;
}

//Function countDice computes an array that counts the number of occurrences of the dice in a given diceRoll.
//if diceRoll is [1,6,5,5,2] it returns diceCount [0,1,1,0,0,2,1]
//ie the number of 1s is stored in index 1; 2s in index 2m etc;
//(remark that index 0 is not used. This is OK as we only store few arrays, and it simplifies the scoring functions as we do not need to adjust array index by 1)
//Also arrays in JavaScript are dynamic; see next lecture ;-)
function countDice(diceRoll){
    let diceCount=[];             //declare empty array
    for(let i=0;i<maxDice+1;i++){ //initialize with 0 counts
      diceCount[i]=0;
    }
    for(let i=0;i<diceRoll.length;i++){ //foreach dice, increment the corresponding count entry
        diceCount[diceRoll[i]]++;
    }
  return diceCount;
}

/* ***************************************************************************************************************
* Definition of the Yatzy Scoreboard
* The scoreboard is an array with an entry per round. Each entry is a "structs" (object) with
* the round id, round name, score, and the original dice roll array, e.g
* [{roundID:0, roundName:"1s",score:4,diceRoll:[1,1,5,2,1,6,1]},...]
**************************************************************************************************************** */


//Function to record the result of playing a round into the scoreboard stored in "scoreBoard"
function noteScore(scoreBoard,round,score,roll){
  scoreBoard[round]= {score: score, diceRoll:roll};
}

//Function to construct and initialize a scoreboard: returns a scoreBoard array
function newScoreBoard(){
  let scoreBoard=[];
  for(let roundNo=0;roundNo<noRounds;roundNo++){
    noteScore(scoreBoard, roundNo, 0,[]);
  }
  return scoreBoard;
}

//two functions to print the score board to console
//padString creates a string of ' ' characters of length 'length'
function paddString(length){
  let padding ="";
  for (;length>0;length--)
    padding+=" ";
  return padding
  //alternative implementation: return " ".repeat(length);
}

//pretty print the scoreboard to a string; then print to console
//1s               5413436214      2
//2s               5464334236      2
//3s               3541661516      3
//etc...
function printScores(scoreBoard){
  for(let round=0;round<scoreBoard.length;round++) {
    let roundName=roundsText[round];
    let score=String(scoreBoard[round].score);

    let dices=""; 
    for(let i=0;i<scoreBoard[round].diceRoll.length;i++)
      dices+= scoreBoard[round].diceRoll[i];
    if(dices.length===0)
      dices+=paddString(M);
    
    let output=roundName;
    output+=paddString(15-roundName.length) + "  " + dices +"  " + paddString(5-score.length)+score;
    console.log(output);
  }
}

/* ***************************************************************************************************************
*  A large collection of helper function to compute scores 
**************************************************************************************************************** */

//Function calcSum computes the sum of the first 6 rounds (1nes to 6es)
//assumes that these values are stored in the given scoreBoard parameter
function calcSum(scoreBoard){
  let sum=0;
  for(let round=rounds.ones; round<=rounds.sixes;round++)
    sum+=scoreBoard[round].score;
  return sum;
}

//Function calcBonus computes if the sum warrants a "bonus"
//with normal 5 dice Yatzy this sum must exceed 63; you may define your own rules!
function calcBonus(sum){
  if(sum>=63)
      return 50;
    else
      return 0;
}
//the scores of single dice. Eg. twos: 2*diceCount[2];
function calcSingle(dice,diceCount){ 
  return dice*diceCount[dice];
}
//function calcIdentical computes the score of N identical dice
//start backwards to find the largest identical N dice
function calcIdentical(diceCount,N){
  for(let dice=maxDice;dice>=minDice;dice--)
  if(diceCount[dice]>=N) 
     return dice*N;
 return 0;
}

//Function to the score of "a pair"
function calcPair(diceCount){
  return calcIdentical(diceCount,2)
}

//computes the score for "two pairs" game
//we need to find the two largest pairs, not being the same dice value
//dicesRoll [2,2,5,5,6,6,6,6]
//diceCount [0,0,2,0,0,2,4] should give 6+6+5+5

function calcTwoPairs(diceCount){
  let noFoundPairs=0;       //number of found pairs
  let pairScore=[0,0];      //the score of pair 1 and 2 respectively
  for(let d=maxDice;d>=minDice && noFoundPairs <2; d--) //take greatest pairs by iterating backwards
   if(diceCount[d]>=2){     //a pair?
      pairScore[noFoundPairs]= d*2;
      noFoundPairs++;
   }
  if(noFoundPairs===2)      //do we have two pairs?
    return pairScore[0]+pairScore[1]; //total score
  else
    return 0;
}

//Little straight: 1-5; big straight: 2-6
function calcStraight(diceCount,start,stop){
  let sum=0;
  for(let d=start;d<=stop;d++)
    if(diceCount[d]<1) return 0; //a required dice is missing:stop!
  else 
    sum+=d;
  return sum;
}

//a house mandates 3 of one kind and 2 of (another) kind
//first find the position of 3 largest identical dice, then 
//the largest 2 (different) identical
function calcHouse(diceCount){
  let found3=-1;    //position where 3 identicals is found: -1 means not found
  let threes=0;     //score of 3 identical
  let twos=0;       //score of 2 identical
  for(let d=maxDice;d>=minDice&&threes===0; d--)
   if(diceCount[d]>=3){ 
      threes= d*3;
      found3=d;     //save position 
   }
  for(let d=maxDice;d>=minDice&&twos===0; d--)
   if(diceCount[d]>=2 && d!==found3){ //skip position of three identical 
      twos= d*2;
   }

  if(twos > 0 && threes > 0) //did we have a house?
    return twos+threes;
   else
    return 0;
}

//chance: calc sum of largest 5 dice
function calcChance(diceCount){
  let remainingDice=5; //Use only 5 (largest) dice 
  let sum=0;
  for(let d=maxDice;d>=minDice && remainingDice>0; d--)
    for(let j=0;j<diceCount[d] && remainingDice>0; j++){
      sum += d;
      remainingDice--;
    }
  return sum;
}

//In this implementation it takes 5 identical to get yatzy!
function calcYatzy(diceCount){
  if(calcIdentical(diceCount,5)>0)
    return 50; //the normal score of a Yatzy: do you want the same in your multiYatzy?
  else
    return 0;
}


//Compute total score of scoreBoard
function calcTotal(scoreBoard){
  let total=0;
  for(let round=rounds.sum ; round<rounds.total;round++){
    total+=scoreBoard[round].score;
  }
  return total;
}

/* ***************************************************************************************************************
*  PLAYING a YATZY GAME: Playing a given round, and (for simplicity) playing all rounds in sequence
**************************************************************************************************************** */

//this function plays the 'roundNo' of 'scoreBoard', given 'diceRoll' 
function playRound(scoreBoard,roundNo,diceRoll){
  let diceCount=countDice(diceRoll);
  let score=0;
  switch(roundNo){
    case rounds.ones:
    case rounds.twos:
    case rounds.threes:
    case rounds.fours:
    case rounds.fives:
    case rounds.sixes:
      score=calcSingle(roundNo+1,diceCount); //eg if 6s: 6*diceCount[6]; 
    break;
    case rounds.onePair:
       score=calcPair(diceCount);
    break;
    case rounds.twoPairs:
      score=calcTwoPairs(diceCount);
    break;
    case rounds.threeId:
      score=calcIdentical(diceCount,3);
    break;
    case rounds.fourId:
      score=calcIdentical(diceCount,4);
    break;
    case rounds.littleS:
      score=calcStraight(diceCount,1,5);
    break;
    case rounds.bigS:
      score=calcStraight(diceCount,2,6);
    break;
    case rounds.house:
      score=calcHouse(diceCount);
    break;
    case rounds.chance:
      score=calcChance(diceCount);
    break;
    case rounds.yatzy:
      score=calcYatzy(diceCount);
    break;
    default:
      console.log("no such game round:"+roundNo);
    }
  noteScore(scoreBoard,roundNo,score,diceRoll); //record the score in scoreboard

  //compute sum,bonus, total and update scoreboard
  let sumScore=calcSum(scoreBoard);
  noteScore(scoreBoard,rounds.sum,sumScore,[]);
  let bonusScore= calcBonus(sumScore);
  noteScore(scoreBoard,rounds.bonus,bonusScore,[]);
  let totalScore=calcTotal(scoreBoard);
  noteScore(scoreBoard,rounds.total,totalScore,[]);
}

//this function simply plays the game sequentially from top to bottum on the scoreboard
function playGame(){
  let scoreBoard1= newScoreBoard();
  for(let roundNo=0;roundNo<noRounds;roundNo++){
    if(!isSpecialRound(roundNo)) {
      let diceRoll=roll(M);  //r=[1,5,5,5,2,2,6]; //M=7
      playRound(scoreBoard1,roundNo,diceRoll);
      //printScores(scoreBoard1); //uncomment if you want to see the progress from every run
    }
  } 

  printScores(scoreBoard1);
  //let scoreTableAsString=printHTMLPage(scoreBoard1);
  //fs.writeFileSync("scores.html", scoreTableAsString);

}

//The programs "MAIN" function
playGame();
```