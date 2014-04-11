/**
 * Created by cmolea on 09/04/2014.
 */

'use strict';

var FeatureController = require('./FeatureController');

module.exports = function(app) {

    app.get('/api/feature/:id?', FeatureController.find);
    app.post('/api/feature', FeatureController.create);
    app.put('/api/feature/:id?', FeatureController.update);
    app.del('/api/feature/:id?', FeatureController.destroy);

    app.param('id', FeatureController.load);

};