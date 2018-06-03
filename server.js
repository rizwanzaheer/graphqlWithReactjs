const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const PORT = process.env.PORT || 4000;

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));


app.listen(PORT, () => {
  console.log('App is listing on Port: ', PORT);
});