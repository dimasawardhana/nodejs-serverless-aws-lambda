const express = require('express');
const router = express.Router({mergeParams : true});
const API = require('./controller/API').API;

const routes = (app)=>{
    router.route('/API1')
    .get(API.get)
    router.route('/API1/:numOfObj')
    .get(API.get)
    router.route('/API2')
    .get(API.getAsFile)
    router.route('/API2/:numOfObj')
    .get(API.getAsFile)
    app.use(router)
}
module.exports = routes;