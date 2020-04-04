var mongoose = require("mongoose");
mongoose
	.connect(
		"mongodb+srv://admin:admin@cluster01-2mjsa.mongodb.net/test?retryWrites=true&w=majority"
	)
	.then(() => console.log("connected to databases!!"))
	.catch(err => console.log(err));
