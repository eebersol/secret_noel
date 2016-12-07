const nodemailer = require('nodemailer');

module.exports = class Mailer {
	constructor(offreur, receveur) {
		this.transporter 	= nodemailer.createTransport({
		  service: "hotmail",
		  auth: {
		    user: "edouard.ebersoldt@hotmail.fr",
		    pass: "edcxszaqw1994"
		  }
		});
		this.mailOptions = {
			from: '<edouard.ebersoldt@hotmail.fr>',
			to: offreur.mail,
			subject: 'Père Noel Secret',
			text: ``,
			html: `Coucou ${offreur.name} ! :) <br /> Tu dois offrir un cadeau a ${receveur}. <br /> Bon courage !`,
		}
		this.transporter.sendMail(this.mailOptions, function(error, info){
			if (error) 
				return console.log(error);
			return console.log(`Message sent : ${info.response}`)
		}.bind(this));
	}
}