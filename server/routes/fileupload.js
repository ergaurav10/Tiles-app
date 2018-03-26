const express = require('express');
const router = express.Router();
//  Added Multer for file upload
const multer = require('multer'); // --fl


// --------------------------------------------- --fl
var fileName = "";
var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
          cb(null, './dist/assets/uploads/');
          // cb(null, './dist/assets/uploads/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            var fname = req.params.fname;
            // fileName = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]
            fileName = fname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]
            cb(null, fileName);
        }
    });

    var upload = multer({ //multer settings
                    storage: storage
                }).single('file');

    /** API path that will upload the files */
  router.route('/:fname')
  .post(function(req, res) {
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0, file_name: req.file.filename});

        });
    });
//  --------------------------------------------

module.exports = router;
