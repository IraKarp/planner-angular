const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8087;

app.use(express.static(__dirname + '/dist/travel-planner-angular'));
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname +
		'/dist/travel-planner-angular/index.html'));
});
app.listen(port, ()=> `Angular is running on ${port}`);