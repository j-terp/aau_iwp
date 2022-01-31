# Exercises 6

1. \[fetch\] Start with completing exercise 6c from lecture 5, which is an exercise on the use of `fetch()`.

2. \[exceptions\] According to an old kids' song (see [https://www.youtube.com/watch?v=PB9Mr1k_3KQ](https://www.youtube.com/watch?v=PB9Mr1k_3KQ)
), little monkeys like to jump on beds. Develop a script to perform the validation of the number of little monkeys jumping on the bed, which must be a number `x` between 1 and 5. When the user inputs the number, you either output a message such as "... little monkeys are jumping on the bed" for x times, or you wait 2 seconds and then complain to the user. You can use the same `<div>` element for the message and for the complaint. Use exceptions (e.g.: "not a number", "too many monkeys", "at least one monkey please") for the validation. You can start from the following HTML code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>IWP Validation Exercise</title>
  <meta charset="UTF-8">
<script>
function monkeysJump(event) {
  event.preventDefault()
  ...
}
</script>
</head>
<body>
  <form id="myForm" >
    How many little monkeys are jumping on the bed? <input type="text" id="monkeys" value="" >
  </form>
  <div id="message" style="white-space: pre;" />

<script>
  document.getElementById("myForm").addEventListener("submit", monkeysJump);
</script>
</body> 
```

## Questions:

- What is the meaning of `event.preventDefault()` in monkeysJump?

- Why do I use `style="white-space: pre;"` in the message div?


1. a) \[promise\] Write a promise based code that allows a function that is executed on a mouse-click on a button. The function will:

    1. Wait 2 seconds `then()" print (`console.log`) "Hej". After that, the program will

    2. Wait for 2 seconds and `then()` print "IWP". After that, it will

    3. Wait for 2 more seconds and `then()` print "I am done".

The hard part of the exercise is implementing promises that wait for the 2 seconds. Inspire yourself to slides 36-37 to see how to encapsulate other async mechanisms into promises.

b) \[async / await\] Change the previous cose to use async functions and the await keyword. Is it possible to remove all `then()` usage?


4. \[fetch\] When a fetch fails. Write a function where you fetch a resource, and try to parse it as JSON data (or plain text). `console.log()` different error messages for the different issues you can have 

    1. Try to fetch a URL of a server that doesn't exist; ([http://ikkeensite.dk/](http://ikkeensite.dk/)), 
    2. Try to access a json object that does not exist; (on the Yatzy server: `http://127.0.0.1:3000/html/findesej.json`
    3. A non-JSON wrong content type: this can just be an HTML document).   `http://127.0.0.1:3000/html/exercisesDom1.html` (or what your html page is called for the solution of ex 6)
    4. A legal json resource from a different origin than your document: e.g `http://people.cs.aau.dk/~bnielsen/IWP/scores.json`
    5. To demonstrate the differences you may develop a HTML page with 4 buttons, one for each outcome described above. To handle the errors and show good information to the user, you may be inspired by the fetch error handling code on page \[DF\] 356/357 

## Supplementary exercises:

5. a) \[parallel fetch\] Create a page with 100 images that are not loaded yet (for example, `<div>`'s), and one button. When the button is clicked, you load all 100 images at the same time (`Promise.all`) and `console.log` the time it takes.

b) \[for await + fetch\] Redo 4.a, but this time load the images one at a time with a for await cycle, and `console.log` the total time it takes.