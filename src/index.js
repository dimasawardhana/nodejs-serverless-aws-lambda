const serverless = require('serverless-http')
const express = require('express');
const cors = require('cors');
const initRoutes = require('./route');
const app = express();
app.use(cors())
app.use(express.urlencoded({extended : true}));
app.use(express.json());
initRoutes(app);

// app.listen(3000, ()=> console.log(`listening on port 3000`));
module.exports.handler = serverless(app)