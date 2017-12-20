var app = require('express')();
app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = function () {
    console.log('Modulo carregado');

    return app;
};
