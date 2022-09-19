var http=require("http")
var fs=require("fs")

/* pass json over node server */

http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"application/json"})

    let data= {
        status:200,
        message:"This is a node server to serve JSON"
    }
    console.log("Listening...",3000)
    response.end(JSON.stringify(data))
}).listen(3000)