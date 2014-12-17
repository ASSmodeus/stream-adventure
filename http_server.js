var http = require("http");
var through = require("through");
var tr = through(convertFunc);
var server = http.createServer(serveFunc);

function serveFunc(req, res) {
	if (req.method === "POST") req.pipe(tr).pipe(res);
	else res.end("I accept only POST");
}

function convertFunc(buf) {
	this.queue(buf.toString().toUpperCase());
}

server.listen(process.argv[2]);