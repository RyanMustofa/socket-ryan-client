const { io } = require("socket.io-client");
const generateToken = require("./helpers");

function connect(
	payload = {
		host: "http://127.0.0.1:3000",
		token: null,
	}
) {
	if (!payload.token) {
		return {
			status: "failed",
			success: false,
			message: "token not found",
			socket: null,
		};
	}
	let transportOptions = {};
	if (payload.token) {
		transportOptions = {
			polling: {
				extraHeaders: {
					BearerToken: payload.token,
				},
			},
		};
	}
	const socket = io(payload.host, {
		transportOptions,
		...(payload.extra || {}),
	});

	return {
		status: "success",
		success: true,
		message: "",
		socket,
	};
}

function createToken() {
	return generateToken();
}
module.exports = {
	createToken,
	connect,
};

// (() => {
//   let token = createToken();
//   let { success, socket } = connect({
//     host: "http://localhost:1000",
//     token,
//   });
//
//   if (success) {
//     socket.on("response", (data) => {
//       console.log(data);
//     });
//   }
// })();
