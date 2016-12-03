const fs 			= require('fs');
const Mailer     	= require('mail.js');

class SecretNoel {

	constructor() {
		this.member_list  = fs.readFileSync('list_member.txt').toString().split("\n");
		this.random_list = [];


		for(let i = 0; i < (this.member_list.length - 1); i++) {
		   let random =  Math.random();
		   let split_array = this.member_list[i].toString().split(":")
		   this.random_list.push({name:split_array[0],mail:split_array[1],id:random});
		}
		for(let i = 0; i < this.random_list.length; i++){
  		 	console.log("Name :- " + this.random_list[i].name + " Mail :- "  + this.random_list[i].mail + " id:- "  + this.random_list[i].id);
  		}
  		for (let i = 0; i < 100; i++) {
  			let k = 0
  			let j = 1;
  			for (j; j < (this.random_list.length - 1); j++) {
  				console.log(this.random_list[k].id > this.random_list[j].id)
  			if (this.random_list[k].id > this.random_list[j].id) {
  				let b = this.random_list[k];
				this.random_list[k] = this.random_list[j];
				this.random_list[j] = b;
  			}
  			k++;
  		}
  	}
  		for(let i = 0; i < this.random_list.length; i++){
  		 	console.log("Name :- " + this.random_list[i].name + " Mail :- "  + this.random_list[i].mail + " id:- "  + this.random_list[i].id);
  		}
  		
  		let k = this.random_list.length;
  		for (let i = 0; i < this.random_list.length; i++) {
  			if (i == k)
  				return ;
  			else
  				new Mailer (this.random_list[i], this.random_list[k]);
  				k--;

  		}
	}

}

new SecretNoel();