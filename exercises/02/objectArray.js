function MessageBoard(name) {
  this.name = name,
  this.history = [],
  this.callbacks = [],
  this.printMessages = function() {
    console.log(`Messages History in board ${name} Chat:`);
    this.history.forEach(msg => console.log(msg))
  },
  this.putMessage = function(string) {this.history.push(string)},
  this.register = function(f) {this.callbacks.push(f)},
  this.sendAndNotify = function(string) {
    this.putMessage(string);
    this.callbacks.forEach(pipe => pipe(this.name, string));
  }
}

let msgBoard = new MessageBoard("IWP Chat");

msgBoard.putMessage("Hej, dette er en test");
msgBoard.putMessage("Hej IWP");
msgBoard.printMessages();

function briansHandler(boardName,message){
  console.log(`Brian! A message from ${boardName}: ${message}`);
}
msgBoard.register(briansHandler);
msgBoard.register((board,message)=>console.log(`Board ${board} says to Michele: ${message}`));
msgBoard.sendAndNotify("URGENT: Opgaveregning nu!")