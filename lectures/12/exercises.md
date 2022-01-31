[< back](README.md)

# Exercises 12

\[KR\] Chapter 2: P31.

\[KR\] Chapter 3: R8, R14, R15, P27, P44.

Practice:

Implement a basic web-server using TCP sockets. 

- Decide whether you want to use C or Javascript (`require('net');`)
- The server should be able serve a get request for a single resource (eg `/index.html`), and send a "Hello World" HTML document back to the client. 
- Just store the html document as a fixed string in the server application.
- You will have to take care of (summarily) parsing the incoming request, and answer with the proper headers.
- Point your browser to the server, and view the resource. 
- The server need only server a single client at a time. 