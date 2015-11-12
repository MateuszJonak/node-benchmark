var koa = require('koa');
var app = koa();

app.use(function *(next){
    yield next;

    this.status = 204;
});

// Start server
app.listen(3000);
