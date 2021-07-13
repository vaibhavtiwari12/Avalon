const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
/* const { controller } = require('./Mongo/mongoController'); */
const MongoRouter = require('./Router/mongoRouter');

//Conifiguring the dotenv to read the env file variables.
dotenv.config({ path: path.resolve(__dirname, '../.env.prod') });

const app = express();
app.listen(process.env.NODE_PORT);
console.log(`Server Listening on ${process.env.NODE_PORT}`);

//Creating MONGO Connection
/* (async () => await controller("Patch",{id:'60ec52b2fb729b44c4e48667'}))(); */



//Creating the build folder path tos erver static resource from build.
app.use(express.static(path.join(__dirname,'build')));

//Enable JSON POST REQUEST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/mongo',MongoRouter);

// ALL the API Calls Get Here 
app.get('/api/getName', (req,res) => {
  res.send({message:"hello From API"});
})
app.get('/api/heartbeat', (req,res) => {
  console.log(process.env.NODE_PORT)
  res.send({message:"Backend Application is alive."});
})

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
