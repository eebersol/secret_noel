const fs 			=	require('fs');
const Mailer	=	require('./mail.js');

class SecretNoel {

	constructor() {
		this.member_list  = fs.readFileSync('list_member.txt').toString().split("\n");
		this.random_list = [];
		this.i = 0;


		this._getinfo();
		// this._displayinfo();
		// console.log('\n');
		this._sortinfo();
		// this._displayfinalinfo();
		this._sendmail();
	}

  _getinfo() {
		for(this.i = 0; this.i < (this.member_list.length - 1); this.i++) {
			let random =  Math.random();
			let split_array = this.member_list[this.i].toString().split(":")
			this.random_list.push({name:split_array[0],mail:split_array[1],id:random});
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
		let k = this.random_list.length - 1;
		for (this.i = 0; this.i < this.random_list.length; this.i++) {
				if (this.i == k) {
					new Mailer (this.random_list[this.i], this.random_list[k].name)
					return ;
				} else 
					new Mailer (this.random_list[this.i], this.random_list[k].name);
			k--;
		}
	}
}

new SecretNoel();