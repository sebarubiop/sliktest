'use strict';
const express = require('express');
var multer = require('multer');
const router = express.Router();
var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'dr0a1g6rs',
  api_key: '239483338785753',
  api_secret: 'JalTsaqKrbG4MMn_-kOlpj8t-II'
});

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
      
        cb(null, './server/uploads/');
    },
    filename: function (req, file, cb) {
      // console.log('cb',cb);
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
      //  console.log('req.file',req.file);      
      cloudinary.uploader.upload(req.file.path, function(result) {
          if(result){
            console.log('result',result.url);
            var urlArray = result.url.split('/');
            var imaname = urlArray[urlArray.length-1];
            var url300 = 'http://res.cloudinary.com/dr0a1g6rs/image/upload/w_300,h_300,c_scale/'+imaname;
            var url600 = 'http://res.cloudinary.com/dr0a1g6rs/image/upload/w_600,h_600,c_scale/'+imaname;
            var url900 = 'http://res.cloudinary.com/dr0a1g6rs/image/upload/w_900,h_900,c_scale/'+imaname;
            if(err){
              res.json({error_code:1,err_desc:err});
              return;
            }
            res.json({error_code:0,err_desc:null,url_ori:result.url,url300:url300,url600:url600,url900:url900});
          }
          else {
            console.log('Error uploading to cloudinary');
          }
        },function(errclo){
          console.log('Error uploading to cloudinary',errclo);
        });
       
    });
});

module.exports = router;