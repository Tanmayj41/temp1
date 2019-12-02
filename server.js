var express = require("express")
var app = express();
var productRouter = require("./routes/products")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/products",productRouter)
app.listen(9898,()=>{
    console.log("server started at 9898...")
})