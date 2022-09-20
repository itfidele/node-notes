
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
	console.log("listening on port",3000);

    res.writeHead(200, {'Content-Type': 'video/mp4'});
    fs.exists('all-about-node-serving-files/video.mp4',function(exists){
		if(exists)
		{
			var rstream = fs.createReadStream('all-about-node-serving-files/video.mp4');
			rstream.pipe(res);
		}
		else
		{
			res.send("Its a 404");
			res.end();
		}
	});
}).listen(3000);