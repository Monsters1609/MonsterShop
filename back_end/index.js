// import thư viện 
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const Router = require('./Router')

// Cổng localhost:1609
const Port = process.env.PORT || 1609

// Sử dụng thư viện 
app.use(morgan('combined')) 
app.use(cors()) 
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

// Router init (khởi tạo tuyến đường)
Router(app)

// app lắng nghe port 
app.listen(Port,()=>{
    console.log(`app listening success at http://localhost: ${Port}`);
})
