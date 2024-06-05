require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database/connection.db.js");
const morgan = require('morgan')
const router = require("./routes/index.js");


app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}));

// Database Connection
connection();

// Middleware
app.use(cors());

app.use(express.json());

app.use("/api/v1/", router);
// app.use("/api/motel", AuthMiddleware, MotelRouter);

const PORT = process.env.PORT;
console.clear()
const server = app.listen(
  PORT,
  console.log(`
  \x1b[46m******************************************************* \x1b[0;30m
  \x1b[46m******************** SERVER RUNING ******************** \x1b[0;30m
  \x1b[46m**********************\x1b[0;32m PORT ${PORT} \x1b[46m********************** \x1b[0;30m
  \x1b[46m******************************************************* \x1b[0;30m
  \x1b[0;30m
  `)
  // console.log(``)
);

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Van Thinh Tran</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <style>
  body{
    background:#eee;
}

.card{
    border:none;

    position:relative;
    overflow:hidden;
    border-radius:8px;
    cursor:pointer;
}

.card:before{
    
    content:"";
    position:absolute;
    left:0;
    top:0;
    width:4px;
    height:100%;
    background-color:#E1BEE7;
    transform:scaleY(1);
    transition:all 0.5s;
    transform-origin: bottom
}

.card:after{
    
    content:"";
    position:absolute;
    left:0;
    top:0;
    width:4px;
    height:100%;
    background-color:#8E24AA;
    transform:scaleY(0);
    transition:all 0.5s;
    transform-origin: bottom
}

.card:hover::after{
    transform:scaleY(1);
}


.fonts{
    font-size:11px;
}

.social-list{
    display:flex;
    list-style:none;
    justify-content:center;
    padding:0;
}

.social-list li{
    padding:10px;
    color:#8E24AA;
    font-size:19px;
}


.buttons button:nth-child(1){
       border:1px solid #8E24AA !important;
       color:#8E24AA;
       height:40px;
}

.buttons button:nth-child(1):hover{
       border:1px solid #8E24AA !important;
       color:#fff;
       height:40px;
       background-color:#8E24AA;
}

.buttons button:nth-child(2){
       border:1px solid #8E24AA !important;
       background-color:#8E24AA;
       color:#fff;
        height:40px;
}
  </style>
</head>
<body>
<div class="container mt-5">
    
    <div class="row d-flex justify-content-center">
        
        <div class="col-md-7">
            
            <div class="card p-3 py-4">
            SERVER RUNING
            </div>
            
        </div>
        
    </div>
    
</div>
</body>
</html>

  `);
});