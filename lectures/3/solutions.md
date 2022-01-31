# Solutions 3

## Multi-Yatzy
This page introduces the Multi-Yatzy game. It describes the game background, its rules, and a guide on how to execute it.

### Background

Multi-yatzy is an extension of the popular and well-known Yatzy dice game. It is normally played with 5 6-valued fair dice. However, in this extension the game can be configured with any number of dice between 5 and 20.
An image of a 6-valued dice.

Figure 1: A typical dice used in Yatzy.

This version is played by a single simple computer player.

### Rules

The game consists of playing 15 rounds. In each round, the player makes a single roll of the chosen number of dice. Then the computer calculates the score that can be achieved with the given dice roll and round type, and registers the score in a scoreboard.
Figure 2: Multi Yatzy Scoreboard.

<table>
<tr>
<td>1s</td><td>6534625542</td><td>0</td>
</tr>
<tr>
<td>2s</td><td>1162434514</td><td>2</td>
</tr>
<tr>
<td>3s</td><td>2563244662</td><td>3</td>
</tr>
<tr>
<td>4s</td><td>3336631654</td><td>4</td>
</tr>
<tr>
<td>5s</td><td>2424525144</td><td>10</td>
</tr>
<tr>
<td>6s</td><td>2663423152</td><td>12</td>
</tr>
<tr>
<td>Sum</td><td></td><td>31</td>
</tr>
<tr>
<td>Bonus</td><td></td><td>0</td>
</tr>
<tr>
<td>1 Pair</td><td>4431256466</td><td>12</td>
</tr>
<tr>
<td>2 Pairs</td><td>2554113653</td><td>16</td>
</tr>
<tr>
<td>Three Identical</td><td>4266621354</td><td>18</td>
</tr>
<tr>
<td>Four Identical</td><td>2511131264</td><td>4</td>
</tr>
<tr>
<td>Little Straight</td><td>2333142216</td><td>0</td>
</tr>
<tr>
<td>Big Straight</td><td>2432261151</td><td>20</td>
</tr>
<tr>
<td>House</td><td>1124531332</td><td>13</td>
</tr>
<tr>
<td>Chance</td><td>5425354113</td><td>23</td>
</tr>
<tr>
<td>Yatzy</td><td>1645513364</td><td>0</td>
</tr>
<tr>
<td>Total Score</td><td></td><td>137</td>
</tr>
</table>

### Scoring rules

Single Dice:
    The score of the rounds ones, two, threes, fours, fives, sizes is computes as the number of dices times its face value, e.g. if the roll shows 5 four-dice, the score is 5*4.
Bonus:
    To earn the bonus, at least a score of 30 must be achieved in the single dice rounds combined.
One Pair:
    The dice roll must show at least two dice with identical face value.
And so on
    ...
Yatzy:
    A dice roll is Yatzy if it containts 5 identical dice. A yatzy gives a score of 50.

### Executing the Game

The game is implemented in node.js and assumes that is installed. The game can be started from the command line by executing the command

`command> node ./node.js`

Then it will print out the scoreboard in the terminal, and generate a file "scores.html" that can be viewed in your favourite browser.
Authored by Brian Nielsen [bnielsen@cs.aau.dk](bnielsen@cs.aau.dk). Copyright ©: none whatsoever. Responsibility: none whatsoever.

## Yatzy print scoreboard

```javascript
//change line
function printScoresHTML(scoreTable){
//... Change the line to include alt and title attributes

//res+=`<img src="resources/${imgName}-dice.png" width="20" height="20" >`;
  const imgName=`${scoreTable[round].diceRoll[d]}`;
  res+=`<img src="resources/${imgName}-dice.png" width="20" height="20" alt="dice ${imgName}" title="dice ${imgName}">`;
//...
} 



//solution to exercise 
function printAnchor(url, text){
  return `<a href="${url}"> ${text}</a>`;
}
function generateHelpLinks(){
  const help=printAnchor("resources/help.html","help page");
  const yatzyGame=printAnchor("https://da.wikipedia.org/wiki/Yatzy","Yatzy game");
  let res=`To get help on playing the game, please consult the ${help}, and general description of the ${yatzyGame}`;
return res;
}

//main function for generating the HTML code for the play
function printHTMLPage(scoreTable){
  let page=printHTMLHdr("IWP Yatzy Game");
  page+=generateHelpLinks();
  page+=printHTMLBody(printScoresHTML(scoreTable));
  return page;
}
```

## Configuration form

```html
<form action="/newgame" method="post">
<!-- <form action="https://httpbin.org/post" method="post"> -->
<!-- <form action="https://httpbin.org/get" method="get"-->
  <fieldset>
    <legend>Configure Game:</legend>
    <label for="name_id"> Name</label>
    <input type="text" id="name_id" name="name" placeholder="Navn" autofocus required minlength="1" maxlength="30"> 
    <label for="diceCount_id"> Number of Dice:</label> 
    <input type="number" id="diceCount_id" name="diceCount" placeholder="5" min="5" max="20" required>


    <label for="difficultyLevel_id"> Difficulty Level </label>
    <input type="number" id="difficultyLevel_id" name ="difficultyLevel" value="1.0" step="0.1" min="1.0" max="2.0">
  
    <label for="topDownGame_id">Play Top Down</label>
    <input type="radio" id="topDownGame_id" name="gameOrder" value="topDownOrder" checked required>
    <label for="topDownGame_id">Play Bottom Up</label>
    <input type="radio" id="bottomUpGame_id" name="gameOrder" value="bottomUpOrder">
   
    <input type="submit"  value="New Game">
  </fieldset>
</form>
```
- HTTP:
    1. The requested url is: [https://httpbin.org/post](https://httpbin.org/post) . I.e  protocol-scheme `HTTPS`, domain `httpbin.org`, and resource path `post`. The http-method is `POST`. The fact that the resource name `post` co-insides with the `HTTP` method is an artefact of the function of the server to act as a test site. Don't confuse the two. The resource could have (better) been named `post-test`. On the other hand the `HTTP` methods is fixed by the `HTTP` protocol specification. 
    2. In a post request, the form parameters are transferred in the body. Its content type is : `application/x-www-form-urlencoded`. the actual content is the string: `name=Mickey&diceCount=6&difficultyLevel=1.0&gameOrder=topDownOrder`.
    3. The response is a json (javascript serialized object notation) document: content-type "application/json"  (probably around 1352 bytes long as per the header field)
    4. The request was successful as per the status code "200".

    5. USING GET the URL is: [https://httpbin.org/get?name=Mickey&diceCount=5&difficultyLevel=1.0&gameOrder=topDownOrder](https://httpbin.org/get?name=Mickey&diceCount=5&difficultyLevel=1.0&gameOrder=topDownOrder) I.e protocol-scheme `HTTPS`, domain `httpbin.org`, and resource path `get?name=Mickey&diceCount=5&difficultyLevel=1.0&gameOrder=topDownOrder`. The http-method is `GET`. IE the form data is transferred as part of the URL in the query string. 
    6. The request has no content-type because the `GET` does not carry a body. 
    7. The response is a `json` document. 
    8. The reequest is successfull as per the status code "200"