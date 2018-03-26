const express = require('express');
const router = express.Router();
const _ = require('lodash');
//  Added Multer for file upload
const {ObjectID} = require('mongodb');

var {mongoose} = require('../db/mongoose');
var {Tile} = require('../models/tile');
var {User} = require('../models/user');
var {authenticate} = require('../middleware/authenticate');

// Get list of all tiles
router.route('/tileslist')
  .get(authenticate,(req, res) => {
    console.log("Get Node Output from api: ");
    Tile.find({_userid: req.user._id}).then((tiles) => {
        res.send(tiles);
      },
      (e) => {
        res.status(400).send(e);
      });
  });

// Save Tile
router.route('/tile')
  .post((req, res) => {
    var tile = new Tile({ name: req.body.name,
                    width: req.body.width,
                    height: req.body.height,
                    path: req.body.path,
                    description: req.body.description,
                    availability: req.body.availability,
                    _userid: req.body._userid
                   });
    tile.save().then((doc) => {
      res.send({ _id: doc._id,
                name: doc.name,
                width: doc.width,
                height: doc.height,
                path: doc.path,
                description: doc.description,
                availability: doc.availability,
                _userid: doc._userid });
    }, (e) => {
      res.status(400).send(e);
    });
  });

// Update Tile

router.route('/tile/:id')
  .patch((req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Tile.findByIdAndUpdate(id, {$set: req.body}, {new: true}).then((tile) => {
      if (!tile) {
        return res.status(404).send();
      }

      res.send({tile});
    }).catch((e) => {
      res.status(400).send();
    })
  });

module.exports = router;
