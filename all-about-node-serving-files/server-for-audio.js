var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
	console.log("Listening on port",3000);
	// change MIME type to 'audio/mp3'
    res.writeHead(200, {'Content-Type': 'audio/wav'});
    fs.exists('all-about-node-serving-files/index.wav',function(exists){
		if(exists)
		{
			var rstream = fs.createReadStream('all-about-node-serving-files/index.wav');
			rstream.pipe(res);
		}
		else
		{
			res.end("404");
		}
	});
}).listen(3000);