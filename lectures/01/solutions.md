[< back](README.md)

# Solutions 1

## Triangle
```javascript
function triangle(){
  let s="";
  for(let i=0;i<7;i++){
    s+="#";
    console.log(s);
  }
}

triangle();
```

## ChessBoard
```javascript
function chessBoard(size){
  //const size=8;

  for(let i=0;i<size;i++){
    let line="";
    for(let j=0;j<size;j++) {
      if(i%2===0)
        if(j%2===0) 
          line+="#";
        else 
          line+=" ";
      else
        if(j%2===0)
          line+=" ";
        else line+="#";
    }
    console.log(line);
  }
}
//chessBoard(8);
function chessBoard2(size){
  //const size=8;

  for(let i=0;i<size;i++){
    let line="";
    for(let j=0;j<size;j++) {
      if((i+j)%2===0)
        line+="#";
      else 
        line+=" ";
    }
    console.log(line)
  }
}
chessBoard2(8);
chessBoard2(7);
```

## renderPage
```javascript
function renderPage_concat(title,heading,demoString) {
  let s="<!DOCTYPE html>\n";
  s+="<html lang=\"da\">\n";
  s+="<head>\n";
  s+="  <meta charset=\"utf-8\">\n";
  s+="  <title>"+title+"</title>\n";
  s+="</head>\n";
  s+="<body>\n";
  s+="  <!-- page content -->\n";
  s+="  <h1>"+heading+"</h1>\n";
  s+="  <script>";
  s+="    console.log(\"" + demoString+ "\");";
  s+="  </script>\n";
  s+="</body>\n";
  s+="</html>";
  return s;
 }
 console.log(renderPage_concat("Simpel IWP Demo", "IWP demo","JS Script er kÃ¸rt"));

function renderPage_stringLitt(title,heading,demoString) {
  let s=`\
  <!DOCTYPE html>
  <html lang="da">
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
    </head>
    <body>
      <!-- page content -->
      <h1> ${heading} </h1>
      <script>
        console.log("${demoString}");
      </script>
    </body>
  </html>`;
  return s;
}

console.log(renderPage_stringLitt("Simpel IWP Demo", "IWP demo","JS Script er kÃ¸rt"));
```

## AVG WordLength
```javascript
let testWords=["Hejsa", "med", "dig!"];
function avgWordLen(words){
  let totalLength=0;
  for(let i=0;i<words.length;i++)
    totalLength+=words[i].length;
  return totalLength/words.length;
}
console.log(avgWordLen(testWords));
```