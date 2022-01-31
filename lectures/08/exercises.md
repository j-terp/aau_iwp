[< back](README.md)

# Exercises 8

1. Server-Sent Events can be enough for a simple quiz application. You can base your code on the SSE chat code and on the BMI calculator from Lecture7. Hints:
    - The server serves what is inside the PublicResources folder (e.g.: an HTML file, a CSS file, a JS file) similarly to the BMI calculator.
    - The server allows the clients to connect and provide a username.
    - The server reads from a local file a list of questions and potential answers. Every minute, it pushes one of them to the connected clients (SSE, event type: question). When the server receives an answer, it compares to the correct answer for the current question and, if correct, it adds one point to the related username, and pushes the new score tables to the clients (SSE, event type: scoretable)
    - The HTML page has 4 areas (DIVs?), one to show the questions, one to allow the user to input an answer to be sent to the server, one to show the scoretable, and a clock.
    - On the client side, they allow to input a username, and use an EventSource to connect to the server.
    - The client allows the user to input an answer to be sent to the server using `fetch()` with a option object to specify the use of the `POST` method.
    - Every time the client receives a scoretable, it shows it in the correct DIV.
    - Every time the client receives a question from the server, it shows it in the correct DIV, and resets the clock in the clock's DIV to show how much time the client has to send an answer. 
2. Implement a chat using websockets. The requirements are the same of the SSE chat, but it must be done using websockets.
3. Design an API for in YAML for financial accounting, generate the code, and implement the business logic. Hints: for implement some logic on the services, and then use Postman (or curl) to experiment with it.
    1. Copy the contents of slide 42 (beware of indenting, [use this file instead](https://www.moodle.aau.dk/pluginfile.php/2447198/mod_page/content/12/yamlExample.yml)) and paste that into editor.swagger.io
    2. Customize it: add endpoints to add create/delete an account (methods: `POST` and `DELETE`), add/remove money from an account (methods: `PUT` and `PUT`), see how much money an account has (method: `GET`)
    3. Generate a server skeleton (type node.js).
    4. Unzip the file, and execute `npm install` in the unzipped folder. Open the `index.js` in visual studio.
    5. Fill up the business logic for the 5 endpoints
    6. Write postman requests to try out the 5 endpoints
