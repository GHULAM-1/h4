const express = require("express");
const app = express();
const port = 9000;

app.get("/server", (req, res) => {
	res.send("Hello, World!");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
