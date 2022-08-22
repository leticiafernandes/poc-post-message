/* MESSAGE SENDER IMPLEMENTATION */
const sendMessageButton = document.getElementById("parent--send-message");

sendMessageButton.addEventListener('click', sendMessageToChild);

function sendMessageToChild() {
    console.log("[index.js] will send message to child");
    const childIframe = document.getElementById("child");
    childIframe.contentWindow.postMessage("hello from parent", "*"); // the second parameter should be the target origin
}


/* MESSAGE LISTENER IMPLEMENTATION */
let MESSAGE_COUNT = 1;
function receiver(event) {
    console.log("[index.js] message received from child");
    document.getElementById("message-parent").textContent = `${event.data} - ${MESSAGE_COUNT++}`;
}

window.onmessage = function(e) {
    receiver(e);
}
