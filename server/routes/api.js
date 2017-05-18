const express = require('express');
const router = express.Router();
var multer = require('multer');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

  var upload = multer({ //multer settings
                  storage: storage
              }).single('file');

  /** API path that will upload the files */
  router.post('/upload', function(req, res) {
      upload(req,res,function(err){
    console.log(req.file);
          if(err){
                res.json({error_code:1,err_desc:err});
                return;
          }
            res.json({error_code:0,err_desc:null});
      });
  });


module.exports = router;