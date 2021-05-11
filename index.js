require('dotenv').config();

import graphqlExpress from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefinitions from './typeDefinitions.js';
import resolvers from './resolvers.js';

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connected to db'));

const schema = makeExecutableSchema({
    typeDefinitions,
    resolvers: resolvers()
});
app.use('/graphql', graphqlExpress({ schema }));

app.listen(3000, () => console.log('server started'));