const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : '1',
            'image' : 'https://placeimg.com/64/64/1',
            'name' : 'Ronaldo',
            'birthday' : '19820501',
            'gender' : 'M',
            'rank' : 'ST'
          },
          {
            'id' : '2',
            'image' : 'https://placeimg.com/64/64/2',
            'name' : 'Messi',
            'birthday' : '19850122',
            'gender' : 'M',
            'rank' : 'CF'
          },
          {
            'id' : '3',
            'image' : 'https://placeimg.com/64/64/3',
            'name' : 'Mbape',
            'birthday' : '20000122',
            'gender' : 'M',
            'rank' : 'RW'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));