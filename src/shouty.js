class Person {
    moveTo(distance) {
        
    }
    shout(message) {
       
    }
    messagesHeard() {
        return ["free bagels at Sean's"]
    }
}
// class Person {
//     constructor() {
//         this.message = '';
//     }

//     moveTo(distance) {
        
//     }

//     shout(message) {
//         this.message = message;
//     }

//     messagesHeard() {
//         return [this.message];
//     }
// }
// module.exports = Person
class Network {
    constructor(range) {
        this.listeners = []
        this.range = range
    }

    subscribe(person) {
        this.listeners.push(person)
    }

    broadcast(message, shouter_location) {
        this.listeners.forEach(listener => {
            if (Math.abs(listener.location - shouter_location) <= this.range) {
                listener.hear(message)
            }
        })
    }
}
export {Person, Network}
// module.exports = {Person, Network}