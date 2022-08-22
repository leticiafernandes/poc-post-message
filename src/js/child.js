/* MESSAGE SENDER IMPLEMENTATION */
const sendMessageButton = document.getElementById("child--send-message");

sendMessageButton.addEventListener('click', sendMessageToParent);

function sendMessageToParent() {
    console.log("[child.js] will send message to parent");
    
    window.top.postMessage("hello from child", "*"); // the outer iframe is the "top" one
}

/* MESSAGE LISTENER IMPLEMENTATION */

let MESSAGE_COUNT = 1;
function receiver(event) {
    console.log("[child.js] message received from parent");
    document.getElementById("message-child").textContent = `${event.data} - ${MESSAGE_COUNT++}`;
}

window.onmessage = function(e) {
    receiver(e);
}
