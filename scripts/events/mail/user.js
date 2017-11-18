users = {
};

mails = {

};

function User(username, password) {
	this.username = username;
	this.email = username;
	this.password = password;
}

User.prototype.login = function (username, password) {
	return (this.username === username) && (this.password === password)
}

User.get = function (socket) {
	for (var k in users) {
		if (users[k].socket === socket) {
			return user;
		}
	}
	return null;
}

User.register = function (socket, username, password) {
	if (users[username]) {
		return false;
	}
	users[username] = {
		socket: socket,
		user: new User(username, password)
	};
	return true;
};

User.init = function (socket) {
	socket.on("logout", User.logout);
};

User.logout = function (socket) {
	for (var k in users) {
		if (users[k].socket === socket) {
			users[k].socket = null;
			break;
		}
	}
};

User.isLogin = function (socket, username, password) {
	for (var k in users) {
		if (users[k].socket === socket) {
			return true;
		}
	}
	return false;
};

User.login = function (socket, username, password) {
	for (var k in users) {
		if (users[k].user.login(username, password)) {
			if (users[k].socket !== socket) {
				try {
					users[k].socket.close();
				} catch (e) {
					console.log(e);
				}
			}
			users[k].socket = socket;
			return true;
		}
	}
	return false;
};

function Mail(addresss, title, body) {
	this.addresss = addresss;
	this.title = title;
	this.body = body;
}

Mail.addMail = function (addresss, title, body) {
	if (!mails[addresss]) {
		mails[addresss] = [];
	}
	mails[addresss].push({
		read: false,
		email: new Mail(addresss, title, body)
	});
};

Mail.write = function (socket, addresss, title, body) {
	for (var k in users) {
		if (users[k].user.email === addresss) {
			users[k].socket = socket;
			Mail.addMail(addresss, title, body);
			return true;
		}
	}
};

Mail.list = function (addresss) {
	return mails[addresss];
};


exports.User = User;
exports.Mail = Mail;
