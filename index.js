// import json-server (es5 version)
const jsonServer = require('json-server')

// create json server using json-server library
const videoVaultServer = jsonServer.create()

// set up path/route for db.json file
const router = jsonServer.router('db.json')

// create a middleware
const middleware = jsonServer.defaults()

// set port number
const port = 4000 || process.env.PORT

// use middleware and router in server
videoVaultServer.use(middleware)
videoVaultServer.use(router)

// server listen for request from frontend 
videoVaultServer.listen(port,()=>{
    console.log(`Video Vault Server Started at port : ${port} , and waiting for request !!!!`);
})