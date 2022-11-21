const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer(function(req,res){

    const urlObj = url.parse(req.url,true);
    const fileName = `${__dirname}/${urlObj.pathname}`;
    // const cssData = fs.readFileSync("style.css")

    fs.readFile(fileName,(error,data)=>{
        if(error){
            res.writeHead(404,{"content-type": "text/html"});
            res.write(`<h1>404 page not found</h1>`);
            res.end();
        }
        res.writeHead(200,{"content-type": "text/html"});
        res.write(data);
        res.end();

    })
    
});

server.listen(5000,()=>{
    console.log("server run success");
});