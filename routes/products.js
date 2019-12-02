var express = require("express");
var router = express();
var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"172.18.4.98:9898",
    user:"root",
    password:"manager",
    database:"productdb",
    port:9099
})

connection.connect();

router.get("/",(request,response)=>{
    var sql = `select * from product`;
    connection.query(sql,(err,result)=>{
        if(err==null)
        {
            response.send(JSON.stringify(result))
        }
        else
        {
            response.send(JSON.stringify(err))   
        }
    })
})

module.exports = router;