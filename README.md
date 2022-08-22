# POC - Cross Document Communication

The goal of this repository is to try-out the [postMessage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to communicate between parent-child iframes.

### Brief explanation

- [index.html](./src/html/index.html) - The "parent" ifame;
- [child.html](./src/html/child.html) - The "child" ifame.

### Running locally

```
$ npm i

$ npm start
```

### Funcionality

The `MESSAGE TO CHILD` call to action implementation benefits from the [contentWindow.postMessage](./src/js/index.js) method to send the message to the **child iframe**.

The `MESSAGE TO PARENT` call to action implementation benefits from the [window.top.postMessage](./src/js/child.js) method to send the message to the **parent iframe**.


### Attention points

- If the iframes are hosted in different domains, it's necessary to include CORs configurations to the domain (more info [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#security_concerns)).

- Map the target origins that will be used as the `postMessage` method second parameter (more info [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#syntax)).

- Useful links:
   - [Web messaging](https://en.wikipedia.org/wiki/Web_Messaging)
