'use strict';

const Hapi = require('hapi');
const Joi = require('joi');

const server = Hapi.server({
    host:'0.0.0.0',
    port:8002
});


// Start the server
async function start() {

    try {
        await server.register(require('inert'));
        server.route({
            method: 'GET',
            path: '/{param*}',
            handler: {
                directory: {
                    path: 'static'
                }
            }
        });

        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);

};
start();