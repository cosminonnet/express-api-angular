/**
 * Created by cmolea on 09/04/2014.
 */

'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Feature = mongoose.model('Feature');

/**
 * List of Features.
 */
exports.getAll = function(req, res) {
    Feature.find().exec(function(err, list) {
        if (err) {
            res.send(500);
        } else {
            res.json(list);
        }
    });
};

/**
 * Create a Feature.
 */
exports.create = function(req, res) {
    var feature = new Feature(req.body);

    feature.save(function(err) {
        if (err) {
            res.send(500);
        } else {
            res.json(feature);
        }
    });
};