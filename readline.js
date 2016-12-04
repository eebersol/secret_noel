const readline 	 = require("readline");
const fs		 = require('fs');
const os 		 = require("os");
const Secretnoel = require("./secret_noel.js");

class Readline {
	constructor() {
		console.log("Welcome to secret_noel");
		this.readline = readline.createInterface(process.stdin, process.stdout);
		this.readline.setPrompt(`\x1b[32m< ❉\x1b[0m\x1b[31m Choose num\x1b[0m\x1b[32mber of player \x1b[0m\x1b[31m❉ >\x1b[0m`, 25);
		this.readline.on("line", this.on_command.bind(this));
  		this.readline.prompt();
  		this.number_player = 1;
  		this.add_player = 1;
  		this.finish = 0;
	}
	on_command(cmds) {
		let opts = cmds.split(' ');

		if (opts[0] == "exit")
			process.exit();
		if (this.number_player != 1 && this.add_player <= this.number_player && opts.length == 2) {
			if (this.number_player > this.add_player) {
				new Secretnoel();
				this.finish = 1;
			} else {
				this.add_player++;
				let player = opts[0].concat(":");
				player = player.concat(opts[1]);
				fs.appendFile("list_member.txt", player + os.EOL, function(err) {
   					if (err)
						return console.log(err);
				});
			}
    	}	
		else if (this.number_player == 1) {
			if (parseInt(opts[0]) == NaN) {
				this.numer_player = 1;
				console.log(`\x1b[32m${opts[0]} is \x1b[0m\x1b[31mnot a number.\x1b[0m`)
			} else
				this.number_player = parseInt(opts[0]);
			if ((this.number_player % 2) != 0 || this.number_player == 0) {
				console.log("\x1b[31mInvalid num\x1b[0m\x1b[32mber of player.\x1b[0m")
				this.number_player = 1;
			}
		}
		if (this.number_player != 1 && this.finish == 0)
			this.readline.setPrompt(`\x1b[32mEnter name and mail  \x1b[0m\x1b[31m${this.add_player}\x1b[0m\x1b[32m on ${this.number_player} >\x1b[0m`, 68);
		else if (this.number_player == 1 && this.finish == 0) {
		this.readline.setPrompt(`\x1b[32m< ❉\x1b[0m\x1b[31m Choose num\x1b[0m\x1b[32mber of player \x1b[0m\x1b[31m❉ >\x1b[0m`, 25);
		}
		if (this.finish == 0)
			this.readline.prompt();
		else
			console.log("\x1b[31mSending \x1b[0m\x1b[32mMail at players\x1b[0m");
	}
}

new Readline;