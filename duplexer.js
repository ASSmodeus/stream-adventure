var duplex = require("duplexer");
var spawn = require("child_process").spawn;

module.exports = function(cmd, args) {
	var sp = spawn(cmd, args);
	return duplex(sp.stdin, sp.stdout);
}