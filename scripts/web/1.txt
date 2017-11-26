var http = require('http');
var sessions = {};


//create a server object:
http.createServer(function (req, res) {
  function setCookie() {
    let id = new Date().getTime();
    cookie = "sid" + id;
    sessions[id] = "saved session" + id;
    content = sessions[id];
    res.writeHead(200, {
      "Set-Cookie": "sid=" + id
    });

  }
  var cookie = req.headers.cookie;
  console.log(cookie);
  var options = {};
  var content = "";
  if (!cookie) {
    setCookie();

  }
  var cookies = cookie.split("; ");
  console.log(cookies);

  if (!cookies.length) {
    setCookie();
  } else {
    console.log(sessions);
    for(var i = 0; i < cookies.length; i++) {
      kv = cookies[i].split("=");
      if (kv[0] === 'sid') {
        console.log("inside  = " + kv[0]);
        content = sessions[kv[0]];
        if (!content) {
          let id = new Date().getTime();
          content = "saved session" + id;
          sessions[kv[0]] = content;
        }
        res.writeHead(200, {
          "Cookie": "sid=" + kv[0] 
        });
        break;
      }
    }
    if (!content) {
      setCookie();
    }
  }
  res.write(content); //write a response to the client
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
