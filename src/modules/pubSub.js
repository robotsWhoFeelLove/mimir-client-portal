
export default function pubSub() {
    const subscribers = {};
    const called = []

    function publish(eventName, data,...args) {
        if(!Array.isArray(subscribers[eventName])) {
            return
        }
        subscribers[eventName].forEach((callback) => {
            console.log({callback,data})
            callback(data,...args)
            !called.includes(eventName) && called.push(eventName);
            console.log({called})
         
        })
    }

    function subscribe(eventName, callback) {
        if (!Array.isArray(subscribers[eventName])) {
           subscribers[eventName] = []
        }
        subscribers[eventName].push(callback)
    }

    function subscribeAll(callback){
        for (const property in subscribers) {subscribers[property.eventName].push(callback)}
       
    }

    function unsubscribe(eventName,callback){
        if (Array.isArray(subscribers[eventName])) {
        const callbackIndex = subscribers[eventName].indexOf(callback);
        subscribers[eventName].splice(callbackIndex,1)
        } 
    }

    function show(){
        console.log({subscribers})
    }

    return {
        publish,
        subscribe,
        unsubscribe,
        show,
        subscribers,
        subscribeAll
    }
}

function testFunc(test){
    console.log(test)
}