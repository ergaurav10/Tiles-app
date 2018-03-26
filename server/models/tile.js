let mongoose = require('mongoose');

let Tile = mongoose.model('Tile', {
            name: {
              type: String,
              required: true,
              minlength: 1,
              trim: true
            },
            width: {
              type: Number,
              required: true
            },
            height: {
              type: Number,
              required: true
            },
            path: {
              type: String,
              required: true,
              minlength: 1,
              trim: true
            },
            description: {
              type: String,
              trim: true
            },
            availability: {
              type: String,
              required: true,
              minlength: 1,
              trim: true
            },
            _userid: {
              type: mongoose.Schema.Types.ObjectId,
              required: true
            }
});

module.exports = {Tile};
