const app = require('connect')();


app.use((req, res, next) => {
    res.setHeader('content-type', 'text/html');
    next();
});


app.use(require('./queryParser'));

app.use((req, res, next) => {
    if (req.query.magicword === 'please') {
        next();
    } else {
        next(new Error('magicword invalid'));
    }
});

app.use('/home', (req, res, next) => {
    res.end('<h1>Welcome to PCS</h1>');

    next();
});

app.use('/about', (req, res, next) => {
    res.end('<h1>PCS is a great organization</h1>');
    next();
});


app.use((error, req, res, next) => {
    res.statusCode = 400;
    console.log(error);
    res.end(`<h5>Something went wrong</h5>${error.message}`);
    
});



app.listen(80);