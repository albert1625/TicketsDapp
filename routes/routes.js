module.exports = function(app, express, fs){

	app.set('view engine', 'ejs');

	var path = require('path');

	app.use('/node_modules', express.static(path.resolve("node_modules")));


	app.get("/", (req, res) => {
		//res.sendFile(path.resolve("public/index.html"), { title: 'The index page!' });
		res.render(path.resolve("public/index.ejs"), { title: fs.readFile("public/index.ejs") });
		//console.log(web3.eth.accounts);
	})

}