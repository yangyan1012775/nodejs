const User = require("./user").User;
const Mail = require("./user").Mail;

const states = [
    'not-login', // 这时可以 login, register
    'login',  // 这时可以logout  // 查看邮件， 写邮件， 
    'mail-write',   // 编写邮件
    'mail-read',    // 阅读邮件, 删除邮件
];

function StateProcessor() {
    this.state = 'not-login';
    this.action = '';
}

let mailCaches = {

};

StateProcessor.prototype.process = function (socket, data) {
    console.log("inside process");
    switch (this.state) {
        case 'login':
            this.processStateLogin(socket, data);
            break;
        case 'mail-write':
            this.processMailWrite(socket, data);
            break;
        case 'mail-read':
            this.processMailRead(socket, data);
            break;
        default:
            this.processStateNotLogin(socket, data);
            break
    }

}

StateProcessor.prototype.getInputString = function (socket, data) {
    let string = new String(data);
    string = string.replace(/(\n|\r)+$/, '');
    return string;
}


StateProcessor.prototype.processStateNotLogin = function (socket, data) {
    console.log("this.action === " + this.action);
    if (!this.action) {
        socket.write("\n欢迎使用邮件服务系统\n\t1.注册\n\t2.登陆\n请输入：")
        this.action = "wait";
    } else {
        switch (this.action) {
            case 'wait':
                let input = this.getInputString(socket, data);
                if (input === '1') {
                    socket.write('\n请输入你要注册的邮箱和密码，格式： 邮箱 密码\n');
                    this.action = 'register';
                } else if (input === '2') {
                    socket.write('\n请输入您的邮箱和密码，格式： 邮箱 密码\n');
                    this.action = 'login';
                } else {
                    socket.write('\n输入错误，请重新输入：\n\t1.注册\n\t2.登陆\n\n');
                }
                break;
            case 'register':
                this.processUserRegister(socket, data);
                break;
            case 'login':
                this.processUserLogin(socket, data);
                break;

        }
    }
};

StateProcessor.prototype.processUserRegister = function (socket, data) {
    console.log("inside register");
    let input = this.getInputString(socket, data);
    input = input.split(" ");
    if (input.length === 2) {
        if (User.register(socket, input[0], input[1])) {
            socket.write('\n注册成功！\n');
            socket.write('\n请输入您的邮箱和密码，格式： 邮箱 密码\n');
            this.action = 'login';
        } else {
            socket.write("用户已经存在！\n");
        }
    } else {
        socket.write("输入有误，请重新输入！格式： 邮箱 密码\n");
    }
};

StateProcessor.prototype.processUserLogin = function (socket, data) {
    console.log("inside login");
    let input = this.getInputString(socket, data);
    input = input.split(" ");
    console.log("input =" + input);
    if (input.length === 2) {
        if (User.login(socket, input[0], input[1])) {
            socket.write('\n登录成功！\n');
            this.state = 'login';
            this.action = '';
            this.process(socket);
        } else {
            socket.write("登录失败！用户名与密码不匹配！\n");
        }
    } else {
        socket.write("输入有误，请重新输入！格式： 邮箱 密码\n");
    }
};

StateProcessor.prototype.processStateLogin = function (socket, data) {
    console.log("this.action === " + this.action);
    if (!this.action) {
        socket.write("\n你已经成功登录邮件系统\n\t1.编写邮件\n\t 2.查看邮件\n请输入：")
        this.action = "wait";
    } else {
        switch (this.action) {
            case 'wait':
                let input = this.getInputString(socket, data);
                if (input === '1') {
                    socket.write('\n请输入你要发送到的用户地址与标题以及正文内容，以空格区分！\n');
                    this.action = 'write';
                } else if (input === '2') {
                    socket.write('\n请输入你要读取的邮件ID\n');
                    this.action = 'read';
                } else {
                    socket.write('\n输入错误，请重新输入：\n\t1.注册\n\t2.登陆\n\n');
                }
                break;
            case 'register':
                this.processMailWrite(socket, data);
                break;
            case 'login':
                this.processMailRead(socket, data);
                break;

        }
    }
}

StateProcessor.prototype.processMailWrite = function (socket, data) {
    console.log("inside write");
    let input = this.getInputString(socket, data);
    input = input.split(" ");
    if (input.length === 3) {
        if (Mail.write(socket, input[0], input[1], input[3])) {
            socket.write('\n邮件发送成功！\n');
            socket.write('\n请输入您的邮箱和密码，格式： 邮箱 密码\n');
            this.action = 'login';
        } else {
            socket.write("接收用户没有找到！\n");
        }
    } else {
        socket.write("输入有误，请重新输入！格式： 邮箱 密码\n");
    }
};




exports.Processor = StateProcessor;