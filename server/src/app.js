const express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser'),
      cors        = require('cors'),
      morgan      = require('morgan'),
      {sequelize} = require('./models'),
      config      = require('./config/config')

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

//pass {force: true} for complete db flush
sequelize.sync()
  .then(() => {
    app.listen(config.port || 8081);
    console.log(`server started on port ${config.port}`);
  })
