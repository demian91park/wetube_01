const express = require('express');
//load exprss folder
const app = express();
// excutive result of object save in app
const PORT = 4000;
// open port 4000
function handleListening() {
    console.log('Listening on: http://localhost:${PORT}');
}
// notice server is running
app.listen(PORT, handleListening());
//excutive port and handlerlistening