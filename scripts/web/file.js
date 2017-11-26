var http = require('http');
var url = require('url');
var staticRouter = ['/user/login', '/user/register'];

var files = {};


function extract(subHeaders, name, body) {
      var filenames = subHeaders[1].split("; ");
      for(var j = 0; j < filenames.length; j++) {
        if (filenames[j].indexOf(name) !== -1) {
          var filename = filenames[j].split("=");
          files[filename[1]] = body;
          break;
        }
      }
}

function parseContent(header, body) {
  var headers = header.split("\r\n");
  for (var i = 0; i < headers.length; i++) {
    var subHead = headers[i];
    var subHeaders = subHead.split(": ");
    if (subHeaders[0] === 'Content-Disposition') {
      if (subHeaders[1].indexOf('filename') !== -1) {
        extract(subHeaders, 'filename', body);
      } else {
        extract(subHeaders, 'name', body);
      }
    }
  }
}


//create a server object:
http.createServer(function (req, res) {
  var parsed = url.parse(req.url);
  var fileupload = false;
    var splitor = '';
  console.log(req.headers);

  console.log(req.method);
  console.log(req.method);

  if (req.method === "POST") {
    var contentType =  req.headers['content-type'];
    if (contentType.indexOf('multipart/form-data;') !== -1) {
      console.log("inside file upload");
      fileupload = true;
      var splitors = contentType.split("; ");
      console.log(splitors);
      for(var i = 0; i < splitors.length; i++) {
        console.log("inside for");
        var temp = splitors[i];
        console.log(temp);
        if (!temp) {
          continue;
        }
        if (temp.indexOf("boundary=") !== -1) {
          splitor = temp.split("=")[1];
          console.log("splitor = " + splitor);
          break;
        }
      }
    }

    console.log("inside post");
    var data = [];
    var length = 0;
    req.on('data', function (chunk) {
      length += chunk.length;
      data.push(chunk);
    });
    req.on('end', function () {
      data = Buffer.concat(data, length);
      if (fileupload && splitor) {
        // 拆分内容
        var parts = String(data).split("--" + splitor);
        for(var i = 0; i < parts.length; i++) {
            var contents = parts[i].split("\r\n\r\n");
            for (var j = 0; j < contents.length; j++) {
              contents[j] = contents[j].replace(/\r\n$/, '');
              contents[j] = contents[j].replace(/^\r\n/, '');
            }
            parseContent.apply(parseContent, contents);
            parts[i] = contents;
        }
      }
      console.log(files);
      res.write("received:\n");
      res.write(String(data));
      res.end('\ndata received!\n');
    });          
} else {

      res.end('Hello world!\n');
}

}).listen(8080); //the server object listens on port 8080
