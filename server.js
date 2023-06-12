const { response } = require("express");
const http = require("http");

const fs = require("fs");

const Home = fs.readFileSync("./index.html","utf-8");

const Contact = fs.readFileSync("./contact.html","utf-8");
const Err = fs.readFileSync("./404.html","utf-8");
const About = fs.readFileSync("./about.html","utf-8");
const server = http.createServer((Request,Response)=>{
if(Request.url === "/"){
  return  Response.end(Home)
}
if(Request.url === "/about"){
  return  Response.end(About)
}
if(Request.url === "/contact"){
    return  Response.end(Contact)
  }


else{
   return Response.end(Err);
}


})
const hostname = '127.0.0.1';
const port = 3000;
server.listen(port,hostname,()=>{
    console.log(`Server running at http://localhost:${port}/`);
})