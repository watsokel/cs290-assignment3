/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  var obj = { 
    type: 'Goldfish',
    brand: 'Pepperidge Farm',
    flavor: 'Cheddar',
    count: 2000
  };
  return obj; //Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function MessageLog(user){
  this.user = user;
  this.messagesSent = 0;
  this.messagesReceived = 0;
  this.sentArray = [];
  this.mostRecentlyReceived = '';
  this.logMessage = function(messageText, direction) {
    if(direction === 0) {  //sent
      //if(this.sentArray.length > 5) {
        this.sentArray.unshift(messageText);
        this.sentArray.length = 5;
        //var temporaryObject = {direction: 0, message: messageText};
        //this.sentArray[0] = temporaryObject;
        this.messagesSent++;
      //}
      //else {
        //var temporaryObject = {direction: 0, message: messageText};
        //this.sentArray.push(temporaryObject);
        //this.messagesSent++;
      //}
    }
    else if(direction === 1) { //received
      mostRecentlyReceived = messageText;
      this.messagesReceived++; 
    }
  }
  this.getSentMessage = function(n) {
    if(n>=0 && n<=5) return this.sentArray[n]
    else 
      return 'Out of range. Please specify a message number between 0 and 4: ';
  }
  this.totalSent = function() {
    return this.messagesSent;
  }
  this.totalReceived = function() {
    return this.messagesReceived;
  }
}
//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.lastReceivedMessage = function(){ return mostRecentlyReceived; }
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

var mLog = new MessageLog('BlackHatGuy');
//your code here

//end your code
