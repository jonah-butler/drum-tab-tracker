const express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser'),
      cors        = require('cors'),
      morgan      = require('morgan')

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
  res.send({
    message: `your user was registered! ${req.body.email}`,
  });
});

app.listen(process.env.PORT || 8081);
