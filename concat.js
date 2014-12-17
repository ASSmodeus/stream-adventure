var concat = require("concat-stream");

process.stdin.pipe(concat(rev));

function rev(inp) {
	console.log(inp.toString().split("").reverse().join(""));
}