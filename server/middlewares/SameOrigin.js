/**
 * Allow only request originated from the server.
 */
module.exports = function (req, res, next) {

    var origin = req.headers.origin || req.headers.referer,

        allowedOrigins = [
            'http://localhost',
            'http://127.0.0.1'
        ],

        n = allowedOrigins.length, i,

        sameOrigin = false;

    if (origin) {
        for (i = 0; i < n; i++) {
            if (origin.indexOf(allowedOrigins[i]) == 0) {
                sameOrigin = true;
                break;
            }
        }
    }

    if (sameOrigin) {
        return next();
    } else {
        return res.send(403);
    }

};