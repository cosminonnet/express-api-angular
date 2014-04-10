/**
 * Created by cmolea on 09/04/2014.
 */

'use strict';

var FeatureController = require('./FeatureController');

module.exports = function(app) {

    app.get('/api/feature', FeatureController.getAll);
    app.post('/api/feature', FeatureController.create);

};