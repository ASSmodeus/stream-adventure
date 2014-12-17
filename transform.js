var through = require("through");
var tr = through(writeFunc);
process.stdin.pipe(tr).pipe(process.stdout);

function writeFunc(buf) {
	this.queue(buf.toString().toUpperCase());
}
