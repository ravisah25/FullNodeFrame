const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes/router')
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc');
const dbConnection = require(`${__dirname}/./database/connect`)
const router = require(`${__dirname}/./routes/router`)
const config = require(`${__dirname}/./config/config`)

// app.set('views', path.join(__dirname,'views'));
// app.set('view engine','html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

let whitelist = config.cors.whitelist
let corsOptions = {
  origin: function (origin, callback) {
    console.log(origin, "origin", whitelist)
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    }
    else {
      callback(new Error("not allowed by cors"))
    }
  },
  credentials: true,
  preflightContinues: false,
  allowedHeaders: ['Content-Type', 'Authorization', 'x-access-token']
}

const swaggerDefinition = {
  info: {
    title: 'Test Development',
    version: '1.0.0',
    description: 'A sample API',
  },
  host: "localhost:3000",
  basePath: config.app.prefix,
};

const options = {
  swaggerDefinition: swaggerDefinition,
  explorer: true,
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

if (process.env.NODE_ENV == 'dev')
  app.use(config.app.prefix, cors(corsOptions), router);
else
app.use(config.app.prefix, cors(), router);

app.listen(process.env.PORT || config.server.port, () => console.log('port is running successfully', config.server.port))

module.exports = app;
