var through = require("through");
var split = require("split");
var total = 0;
var tr = through(writeFunc);

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

function writeFunc(buf) {
	total++;
	this.queue(total % 2 === 0 ? buf.toString().toUpperCase() + "\n" : buf.toString().toLowerCase() + "\n");
}