const express = require('express');
const app = express();
let port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('working... 123')
})

app.listen(port, () => {
    console.log(`Listening at  http://localhost:${port}`)
})