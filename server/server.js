//Install express server
const express = require('express');
const path = require('path');

//Variable para iniciar express
const app = express();

// Inicializa el app para usar heroku
app.use(express.static(__dirname + '/dist/marcoPagina'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/marcoPagina/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);