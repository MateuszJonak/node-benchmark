var sails = require('sails'),
    rc = require('rc');

// Start server

sails.lift(rc('sails', {port: 3000}));
