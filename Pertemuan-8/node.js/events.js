// import events module
var events = require('events');

//create an eventemitter object
var eventEmitter = new events.EventEmitter();

//create an event handler as follows
var connectHandler = function connected(){
    console.log('connection successful.');

    // fire the data_received event
    eventEmitter.emit('data_received');
}

//bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

//bind the data_received event with the anonymous function
eventEmitter.on('connection', function(){
    console.log('data received successful.');
});

//fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");