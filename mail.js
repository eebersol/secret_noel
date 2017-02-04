const nodemailer = require('nodemailer');

module.exports = class Mailer {
	constructor(offreur, receveur, idea) {
		this.transporter 	= nodemailer.createTransport({
		  service: "hotmail",
		  auth: {
		    user: "your mail",
		    pass: "your password"
		  }
		});
		this.mailOptions = {
			from: '<your mail>',
			to: offreur.mail,
			subject: 'Père Noel Secret',
			text: ``,
			html: ``,
		}
		this.transporter.sendMail(this.mailOptions, function(error, info){
			if (error) 
				return console.log(error);
			return console.log(`Message sent : ${info.response}`)
		}.bind(this));
	}
}