var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var morgan = require('morgan');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/dist',express.static('dist'));
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

router.route('/api')
    .get(function (req, res) {
            fs.readFile('test.txt', 'utf8', function (err, data) {
                if (err) throw err;
                res.send(data);
            });
        }
    )
    .post(function (req, res) {
        console.log(JSON.stringify(req.body).toString());
        fs.writeFile('test.txt',JSON.stringify(req.body),function (err){
            if(err){
                res.statusCode(500);
            }
        })
        res.json({result: "ok"})
    })

app.use(router);

app.listen(3000, function () {
    console.log("listening on port", 3000);
})
