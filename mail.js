const nodemailer = require('nodemailer');
const Mailer     = require('mailer.js');

module.exports = class Mailer {
	constructor(offreur, receveur) {
		this.transporter 	= nodemailer.createTransport({
		  service: 'Hotmail',
		  auth: {
		    user: 'edouard.ebersoldt@hotmail.fr',
		    pass: process.env.MAIL_PASS,
		  }
		});
		this.mailOptions = {
			from: '${offreur}',
			to: 'edouard.ebersoldt@gmail.com',
			subject: 'Père Noel Secret',
			text: 'Salut ! Tu dois offrir un cadeau a ${receveur}',
			html: ``,
		}
		this.transporter.sendMail(this.mailOptions, function(error, info){
			if (error) 
				return console.log(e);
			return console.log("Okay !")
		}.bind(this));
	}
}