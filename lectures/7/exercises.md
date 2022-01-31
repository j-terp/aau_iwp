# Exercises 7

1. (http server) Take one more look at the two web servers we discussed in the videos (BMI app and yatzee server app). In particular, inspect the code to understand what happens in the server every time it receive a http request until the resulting response is sent.


2. (fetch, POST, routing) Make a spy site that receives information on what you are interested into. The spy site (web server you develop) provides the web page.

    a. (client side) The web page has some buttons and images. Any time your mouse hovers over an element on the page, this is caught by a `onmouseover` event-handler, and the web page performs a `POST` (using the `fetch()` method) to an endpoint in the server.

    b. (server side) The HTTP server has endpoints to serve HTML web pages, and one endpoint to receive the POST requests from the "onmouseover" event handler. The HTTP server will route the request to a function that receives the POST data and performs a console.log of the received data.


3. (file handling) Change the HTTP server from point 2 to append the data received by `onmouseover` event handler to a local file. Consider which data must be received to uniquely identify which computer the data was received from (address of the client? port?). After using the system for a couple of minutes, open the local file and see the data that was logged.


4. (cookies) Create one more endpoint on the HTTP server. From this endpoint, serve a HTML page that uses Javascript to manage a cookie. The key-value pair `("visit", "")` on the cookie is used to count how many times the user visits the page. Every time the page is loaded, the Javascript on the client will access the cookie to print on the web pages "you visited the page --- times", and add 1 to the key `visit` of the cookie. After trying this out a few times, delete the cookie from the "Privacy and Security" panel of the "Settings", and revisit the page, to see that it appears to be the first time you visit it.