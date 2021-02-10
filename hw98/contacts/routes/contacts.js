var express = require('express');
var router = express.Router();

let contacts = [{
    first: 'joe',
    last: 'biden'
}, {
    first: 'bob',
    last: 'dole'
}];
router.get('/', function (req, res, next) {
    res.render('layout', {
        title: 'Contacts',
        contacts: contacts,
        partials: { content: 'contacts' }
    });
});
router.get('/add', function (req, res, next) {
    res.render('layout', {
        title: 'Add Contacts',
        partials: { content: 'addContacts' }
    });
});

router.post('/addNew', function (req, res, next) {
    let contact = {first: req.body.first, last:req.body.last};
    contacts.push(contact);
    res.send(contact);
});

module.exports = router;