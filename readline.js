const readline 	 = require("readline");
const fs		 = require('fs');
const os 		 = require("os");
const Secretnoel = require("./secret_noel.js");

class Readline {
	constructor() {
		this.number_player = 0;
  		this.add_player = 0;
  		this.finish = 0;
		console.log("\x1b[31m< ❉\x1b[0m\x1b[32mWelcome to\x1b[0m\x1b[31m secret_noel\x1b[0m\x1b[32m❉ >\x1b[0m\n");
		this.readline = readline.createInterface(process.stdin, process.stdout);
		this.readline.setPrompt(`\x1b[32m< ❉ \x1b[0m\x1b[31m Choose num\x1b[0m\x1b[32mber of player \x1b[0m\x1b[31m❉ >\x1b[0m `, 80);
		this.readline.on("line", this.on_command.bind(this));
  		this.readline.prompt();
	}
	on_command(cmds) {
		let opts = cmds.split(' ');

		if (this.number_player == 0)
		{
			if (!parseInt(opts[0]))
				console.log(`\x1b[32m${opts[0]} is \x1b[0m\x1b[31mnot a number.\x1b[0m`);
			else
				this.number_player = parseInt(opts[0]);
		}
		else if (opts[1]) {
			if (!this.validinfo(opts[1]))
				console.log("\x1b[31mInvalid\x1b[0m \x1b[32madress\x1b[0m \x1b[31mmail.\x1b[0");
			else if (this.add_player < this.number_player) {
				let player = opts[0].concat(":");
				player = player.concat(opts[1]);
				fs.appendFile("list_member.txt", player + os.EOL, function(err) {
   					if (err)
						return console.log(err);
				});
				this.add_player++;
				console.log(`${this.add_player} || ${this.number_player}`);
			 }
		}
		if (this.add_player == this.number_player) {
			this.finish = 1;
			new Secretnoel();
		}
		if (opts[0] == "exit")
			process.exit();
		else if (this.number_player > 0 && this.finish == 0)
			this.readline.setPrompt(`\x1b[31m< ❉\x1b[0m\x1b[32mEnter \x1b[31mname\x1b[0m\x1b[32m and \x1b[0m\x1b[31mmail\x1b[0m \x1b[0m\x1b[32m${(this.add_player)}\x1b[0m\x1b[32m on \x1b[0m\x1b[31m${this.number_player}\x1b[0m\x1b[32m ❉ >  \x1b[0m`, 80);
		else if (this.number_player == 0 && this.finish == 0)
				this.readline.setPrompt(`\x1b[32m< ❉ \x1b[0m\x1b[31m Choose num\x1b[0m\x1b[32mber of player \x1b[0m\x1b[31m❉ >\x1b[0m  `, 80);
		if (this.finish == 0)
			this.readline.prompt();
		else
			console.log("\x1b[31mSending \x1b[0m\x1b[32mMail at players\x1b[0m");
}
	validinfo(email) {
		let regex_email =  /\S+@\S+\.\S+/;
		
		return regex_email.test(email);
	}
}

new Readline;