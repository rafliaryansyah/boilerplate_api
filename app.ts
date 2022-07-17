const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send({
        code: 200,
        status: 'OK',
        message: 'success'
    });
});

app.listen(port, () => {
    console.log(`Running - ${port}`);
});