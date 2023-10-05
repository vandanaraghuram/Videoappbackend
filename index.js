//import json server
const jsonServer = require('json-server');

//server creation 
const server = jsonServer.create();



//parse json data to js -middleware

const middleware=jsonServer.defaults()

//create router
const router=jsonServer.router("db.json")


//use middleware
server.use(middleware)

server.use(router)

//to run first define port

//port
const PORT = process.env.PORT ||4000;

//listen
server.listen(PORT,()=>{
    console.log(`json server strated at port ${PORT}`);
})