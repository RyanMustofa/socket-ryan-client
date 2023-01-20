# Socket Express

## Custom Socket with express

this socket client is use full for client node js

## Features

- fast connection with [socket-ryan](https://www.npmjs.com/package/socket-ryan) server

## Installation

SocketRyan requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm install socket-ryan-client
```

## Usage

Usage Package Socket Ryan for server

Start App:

```js
const { connect, createToken } = require("socket-ryan-client");

(() => {
	let token = createToken();
	let { success, socket } = connect({
		host: "url socket",
		token,
		extra, // optional
	});
	if (success) {
		socket.on("response", (data) => {
			console.log(data);
		});
	}
})();
```

with server [socket-ryan](https://www.npmjs.com/package/socket-ryan)

## License

MIT

**Free Software, Hell Yeah!**
