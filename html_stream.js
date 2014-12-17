var trumpet = require("trumpet");
var trump = trumpet();
var through = require("through");
var thr = through(writeFunc);

var loud = trump.select(".loud").createStream();

loud.pipe(thr).pipe(loud);

process.stdin.pipe(trump).pipe(process.stdout);

function writeFunc(buf) {
	this.queue(buf.toString().toUpperCase());
}