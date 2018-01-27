import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import request from 'request';


const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/api/filter', (req, res) => {
  console.log(req.body)

  var options = 
  { method: 'GET',
    url: 'http://food2fork.com/api/search',
    qs: 
      { 
        q: req.body.ingredients,
        key: '20a3f6c182668729f5315dd70ffd2151'
      }
  }


  request(options, function (error, response, body) {
    console.log(body)
    res.send(JSON.stringify(body))
  })
})

app.listen(8080, () => console.log('listening on port 8080'))