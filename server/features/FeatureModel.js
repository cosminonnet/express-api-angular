/**
 * Created by cmolea on 09/04/2014.
 */

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Feature Schema.
 */
var FeatureSchema = new Schema({

    created: {
        type: Date,
        default: Date.now
    },

    title: {
        type: String,
        default: '',
        trim: true
    },

    author: {
        type: String,
        default: '',
        trim: true
    },

    description: {
        type: String,
        default: '',
        trim: true
    }

});

mongoose.model('Feature', FeatureSchema);