module.exports = {
	name: 'oi',
	description: 'Olá!',
	usage: '<user> <role>',
	args: false,
	execute(message, args) {
		// message.channel.send(`Oi ${message.author}`);
		message.channel.send(`-p the sound of silence`);
	},
};