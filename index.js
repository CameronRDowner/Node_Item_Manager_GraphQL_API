require('dotenv').config();

const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const typeDefinitions = require('./typeDefinitions');
const resolvers = require('./resolvers.js');

const express = require('express');
const app = express();

const path = '/'
const server = new ApolloServer({ typeDefs: typeDefinitions, resolvers: resolvers })
server.applyMiddleware({ app, path });

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connected to db'));

app.listen(3000, () => console.log('server started'));