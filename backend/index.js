const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { createServer } = require('http');

const schema = require('./schema');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(
  '/graphql',
  graphqlExpress({
    schema
  })
);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
);

const PORT = process.env.PORT || 3030;

const server = createServer(app);
server.listen(PORT, () => {
  console.log(`Server now running at port ${PORT}`);
});
