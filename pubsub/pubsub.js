
// First off, we create an object, which we’ll call subscribers, to keep track of registered subscriber
// callbacks. Inside this object, we will eventually store events key/value pairs. Each event will
// have a key corresponding to the event name and a value set to an array. In this array, 
// we will register/store subscriber callbacks. These callbacks are invoked whenever 
// the event gets triggered and we may have several of such callbacks firing for any given event.

let subscribers = {};

module.exports = {
  publish(event, data) {
    if (!subscribers[event]) return;

    subscribers[event].forEach(subscriberCallback => subscriberCallback(data));
  },

 // modules will use this to register a subscriber callback.

//  Our subscribe method will accept two arguments. The first is the event name being subscribed to and the second is the callback 
//  to be invoked when the event is published.

// First, we check if there are any subscribers that have registered for the event. If there aren’t, we can return early from the publish method since
//  we have no subscribers with callbacks to invoke. If there are subscribers, we loop through the events array and invoke each subscriber callback 
//  that has been pushed into the event array. We also pass through any data that may have been provided to each of the callbacks.

  subscribe(event, callback) {
    let index;

    if (!subscribers[event]) {
      subscribers[event] = [];
    }

    index = subscribers[event].push(callback) - 1;

    return {
      unsubscribe() {
        subscribers[event].splice(index, 1);
      }
    };
  }
};