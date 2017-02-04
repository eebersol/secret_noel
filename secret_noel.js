const fs 			=	require('fs');
const Mailer		=	require('./mail.js')

module.exports = class SecretNoel {
	constructor() {
		setTimeout(() => {
		this.idea_list = fs.readFileSync('idea_list.txt').toString().split("\n");
		this.member_list  = fs.readFileSync('idea_member.txt').toString().split("\n");
		this.random_list = [];
		this.i = 0;
		this._getinfo();
		// this._displayinfo();
		// console.log('\n');
		this._sortinfo();
		// this._displayfinalinfo();
		this._sendmail();
		 }, 1000 * 5);
	}

  _getinfo() {
		for(this.i = 0; this.i < (this.member_list.length - 1); this.i++) {
			let random =  Math.random();
			let idea_tab = this.idea_list[this.i].toString().split(":");
			let idea_name = idea_tab[0];
			idea_tab = arr.slice(1, idea_tab.length);
			let split_array = this.member_list[this.i].toString().split(":")
			this.random_list.push({name:split_array[0],mail:split_array[1],id:random, idea:idea_tab});
		}
	}

	// _displayinfo() {
	// 	for(this.i = 0; this.i < this.random_list.length; this.i++)
	// 		console.log("Name :- " + this.random_list[this.i].name + " Mail :- "  + this.random_list[this.i].mail + " id:- "  + this.random_list[this.i].id);
	// }

  _sortinfo() {
    for (this.i = 0; this.i < 100; this.i++) {
			let k = 0
			let j = 1;
			for (j; j < (this.random_list.length - 1); j++) {
				if (this.random_list[k].id > this.random_list[j].id) {
						let b = this.random_list[k];
						this.random_list[k] = this.random_list[j];
						this.random_list[j] = b;
				}
				k++;
			}
		}
	}

	// _displayfinalinfo () {
	// 		for(this.i = 0; this.i < this.random_list.length; this.i++)
	// 			console.log("Name :- " + this.random_list[this.i].name + " Mail :- "  + this.random_list[this.i].mail + " id:- "  + this.random_list[this.i].id);
	// }

	_sendmail() {
		let k = 0;
		let j = 0
		for (let i = 1; i < this.random_list.length - 1; i++) {
			console.log(`${this.random_list[k]} -- ${this.random_list[i].name}`);
			new Mailer (this.random_list[k], this.random_list[i].name, this.random_list[i].idea);
			k++;
		}
		if (this.random_list.length % 2 != 0) {
			// console.log(`${this.random_list[this.random_list.length - 1]} -- ${this.random_list[0].name}`);
			new Mailer (this.random_list[this.random_list.length - 1], this.random_list[0].name, this.random_list[0].idea);
		}
		fs.unlink("member_list.txt");

	}
}
