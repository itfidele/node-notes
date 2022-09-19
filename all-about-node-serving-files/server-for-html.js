var http =require("http")
var fs=require("fs")


http.createServer((request,response)=>{
    console.log("port number",3000)
    response.writeHead(200,{"Content-Type":"text/html"})
    // reading html file
    fs.readFile('all-about-node-serving-files/index.html',(error,data)=>{
        if(error)
            throw error
        console.log("operation Success")
        response.end(data)
    })
}).listen(3000)