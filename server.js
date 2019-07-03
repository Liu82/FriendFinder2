var express = rerqure ('express');
var app = express();

var PORT = proces.env.PORT || 3000;

app.get('/',function(req,res){
    res.send ('hello shawn')
})

app.listen (PORT, function() {
    console.log('listening on ' + PORT)
})