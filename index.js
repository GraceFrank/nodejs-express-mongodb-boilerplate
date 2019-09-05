const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/index')
const config = require('./config/config')


const app = express();

//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//all routes
routes(app)

//connect to database
mongoose.connect(config.databaseUrl).then(()=>{
  const port = config.apiPort || 4000;
  app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
  })
}).catch((err)=>{
  console.log(err);
  process.exit(1)
})

