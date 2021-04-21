const DummyObject = require('../model/dummyObject');
const fs = require('fs')
let obj = new DummyObject();
const API = {
    get : function (req,res){
        let num = req.params.numOfObj ? req.params.numOfObj : 10;
        let dataExample = {
            key1 : 'value1',
            key2 : 'value2',
            key3 : 'value3'
        };
        obj.setData = dataExample;
        let data = obj.produce(num);
        res.status(200).json({
            data,
            status : 'ok'
        })
    },
    getAsFile : async function(req,res){
        let num = req.params.numOfObj ? req.params.numOfObj : 10;
        let dataExample = {
            key1 : 'value1',
            key2 : 'value2',
            key3 : 'value3'
        };
        obj.setData = dataExample;
        let data = obj.produce(num);
        let toWrite = JSON.stringify(data);
        let date = new Date();
        let filename ='data-'+ date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + "-"+date.getHours()+ "-"+date.getMinutes()+ "-"+date.getSeconds()+".json"
        res.set('Content-Disposition', 'attachment; filename='+filename)
        res.set('Content-type', 'application/json')
        res.json(toWrite)
    },
}
exports.API = API