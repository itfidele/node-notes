var http =require("http")

var host="127.0.0.1"
var port =3000


/* Serving string text over node server */

var server = http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/plain"})
    response.write("This is a served String")
    response.write("\nThis is another string")
    response.end()
})

server.listen(port,host,(error)=>{
    if(error){
        return console.log(`something went wrong`,error)
    }
    console.log("listening... to port",port)
})