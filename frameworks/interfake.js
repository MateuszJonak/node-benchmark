var Interfake = require('interfake');
var interfake = new Interfake();

interfake.get('/').status(204);
interfake.listen(3000);
