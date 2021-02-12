var express = require('express');
var router = express.Router();
let counterId = 0;
let contacts = [
  {
    firstName: 'Joe',
    lastName: 'Biden',
    phone: '1234567890',
    email: 'jbiden@whitehouse.gov',
    id: counterId++
  },
  {
    firstName: 'Kamala',
    lastName: 'Harris',
    phone: '9876543210',
    email: 'kharris@whitehouse.gov',
    id: counterId++
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Contacts',
    contacts,
    noContacts: !contacts.length,
    // css: ['contacts'],
    partials: { content: 'contacts' }
  });
});

router.get('/addContact', function (req, res, next) {
  res.render('layout', {
    title: 'Add Contact',
    partials: { content: 'addContact' }
  });
});

router.get('/editContact/:id', function (req, res, next) {
  let contact = contacts.find(c => c.id === +req.params.id);
  console.log(contact);
  res.render('layout', {
    title: 'Edit Contact',
    contact,
    partials: { content: 'editContact' }
  });
});

router.get('/deleteContact/:id', function (req, res, next) {
  contacts = contacts.filter(c => c.id !== +req.params.id);
  res.redirect('/contacts');
});

router.post('/addContact', function (req, res, next) {
  //console.log(req.body);
  req.body.id = counterId++;
  contacts.push(req.body);
  res.redirect('/contacts');
});

router.post('/editContact/:id', function (req, res, next) {
  //console.log(req.body);
  req.body.id = +req.params.id;
  contacts[+req.params.id] = req.body;
  
  res.redirect('/contacts');
});
module.exports = router;
