# Exercises 2

## Part 1. Fun with Functions

In this exercise we will gradually use more and more aspects of JS functions on a simple example.

`let diceRoll = [1,6,6,2,3,4,6];`

  1. Write a function `get6s_v1` that takes an array of numbers (dice values 1..6) as parameter, and prints the indexes and corresponding values of the array where elements are 6's. E.g., 1:6, 2:6, 6:6 ..." excluding other elements. At this stage, just write a basic version, eg. without using functions as parameters
  Apply the function to the above array as argument.
  2. Write a helper function eg `is6(v)` that can test if the supplied parameter value `v` is a 6
  Rewrite `get6s_v1` to `get6_v2` such that it uses the helper function to test if the index/value should be printed.
  Apply the function to the above array.
  3. Now create a `get6s_v3` that rewrites `get6_v2` to accept a dice array as first parameter, and a "compare" function as second parameter.
  Apply the function using the `diceRoll` and function `is6` as actual arguments
  4. Copy and rename the `get6s_v3` function to `findDices_v1(dice,compare)`. Call it with the same arguments as above using the diceRoll and function `is6`
  Then call it using a ***function expression*** (named or anonymous) at the call site, to pass a function that selects 1 dices.
  5. Then call it using a ***lambda expression*** to pass a function that selects dices with values <= 3.

## Part 2. Objects & Arrays

  1. **Declare an object** `msgBoard` that represents a message board that a set of clients can use to exchange messages.
  It should have a property for the name of the message board, initialized to `IWP Chat`, and another property (array) for storing the history of messages.
  Add a function (method) to the object called `putMessage` that takes a string message as argument at stores it in the message array.
  Add a function (method) that prints the received messages to the console. I.e, the messageBoard could be used like:
  ```javascript
  msgBoard.putMessage("Hej, dette er en test");
  msgBoard.putMessage("Hej IWP");
  msgBoard.printMessages();
  ```
  It should result in the following output
  ```console
  Messages History in board IWP Chat:
  Hej, dette er en test
  Hej IWP
  ```

  2. Add a function `register(f)` to the object that clients use to be notified when new messages arrives (a so-called **call-back function**): The register function takes a *function f as argument*, and stores the passed function in a different array `callBacks`. `f` itself takes two parameters: the name of the message board, and the message. Then prints them to the console, possibly in an client specific manner (eg language). 
  Based on the `putMessage` method, add a similar one `sendAndNotify` that in addition to storing the message (eg using `putMessage`) also calls all registered call-back functions whenever a message arrives (supplying the registered function with the new message, and boardname.

  ```javascript
  function briansHandler(boardName,message){
    console.log(`Brian! A message from ${boardName}: ${message}`);
  }
  msgBoard.register(briansHandler);
  msgBoard.register((board,message)=>console.log(`Board ${board} says to Michele: ${message}`));
  msgBoard.sendAndNotifyMessage("URGENT: Opgaveregning nu!")
  ```
  It should result in the following output
  ```console
  Brian! A message from IWP Chat: URGENT: Opgaveregning nu!
  Board IWP Chat says to Michele: URGENT: Opgaveregning nu!
  ```

  3. Make a constructor function MessageBoard(name) that makes message boards.

  Create a few message boards.
  ```javascript
  let board2= new MessageBoard("Opgave Regning");
  board2.putMessage("Hej, dette er en test");
  ```

## Part 3. Yatzy

  1. The following [archive contains V1 (console version) of the Yatzy game](https://www.moodle.aau.dk/pluginfile.php/2447172/mod_page/content/25/Yatzy%20-%20basic%20-%20Short%20-%20Release.zip?time=1642782774937). However, I "forgot" to implement some of the functions for computing the scores. Open the workspace (simply double click the `yatzy.code-workspace` file).
  Add the missing function bodies for computing the score of the rounds `Chance` and `Two pairs`!

  2. Complete the remaining functions.
