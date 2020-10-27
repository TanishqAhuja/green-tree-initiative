const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile('home.html', { root: __dirname + '/public/HTML/' });
});
app.get('/donate.html', (req, res) => {
    res.sendFile('donate.html', { root: __dirname + '/public/HTML/' });
});
app.listen(process.env.PORT || 5000)