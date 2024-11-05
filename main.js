const express = require('express');

const app = express();

app.set("view engine","ejs");



app.listen(9000,()=>{
    console.log('server is running on the port 9000')
})