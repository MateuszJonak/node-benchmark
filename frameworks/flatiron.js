var flatiron = require('flatiron'),
    app = flatiron.app;

app.use(flatiron.plugins.http);

app.router.get('/', function () {
    this.res.writeHead(204, { 'Content-Type': 'text/plain' });
    this.res.end();
});

app.start(3000);
