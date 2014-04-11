/**
 * Created by cmolea on 09/04/2014.
 */

'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Feature = mongoose.model('Feature');

module.exports = {

    /**
     * Load the Feature specified by Id.
     */
    load: function(req, res, next, id) {
        Feature.load(id, function(err, feature) {
            // An error occurred
            if (err) return res.send(500);

            // Object not found
            if (!feature) return res.send(404);

            // Add the object to the request
            req.feature = feature;
            next();
        });
    },

    /**
     * List of Features.
     */
    find: function(req, res) {
        var feature = req.feature;

        if (feature) {
            return res.json(feature);
        } else {
            Feature.find().exec(function (err, list) {
                if (err) return res.send(500);
                return res.json(list);
            });
        }
    },

    /**
     * Create a Feature.
     */
    create: function(req, res) {
        var feature = new Feature(req.body);

        feature.save(function(err) {
            if (err) return res.send(500);
            return res.json(feature);
        });
    },

    /**
     * Update a Feature.
     */
    update: function(req, res) {
        // TODO
        res.send(200);
    },

    /**
     * Destroy a Feature.
     */
    destroy: function(req, res) {
        // TODO
        res.send(200);
    }

}