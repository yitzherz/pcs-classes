var express = require('express');
var router = express.Router();

let contacts = [{
    first:'joe',
    last: 'biden'
}, {
    first:'bob',
    last: 'dole'
}];
router.get('/contacts', function(req, res, next) {
    res.send(contacts);
});
module.exports = router;