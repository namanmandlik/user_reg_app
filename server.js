var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var usersRouter = require('./routes/userRouter');
var cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));
app.use(bodyParser.json({limit: '10mb', extended: true}));

mongoose.Promise = require('bluebird');
mongoose.connect("mongodb+srv://admin:mypassword@mongocluster-pnmqg.mongodb.net/test?retryWrites=true")
    .then(() => { 
      console.log('Connected to MongoDB Successfully!!');
    })
    .catch(err => { 
        console.error('App starting error:', err.stack);
        process.exit(1);
    });


app.use('/api/users', usersRouter);

app.use(express.static(__dirname +'./../../')); //serves the index.html
app.listen(8000);