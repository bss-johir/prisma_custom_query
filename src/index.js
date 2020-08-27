require('dotenv').config()
const { GraphQLServer } = require('graphql-yoga')
const {Prisma} = require('prisma-binding')
const { resolvers } = require('./Resolvers/resolvers');
const { typeDefs } = require('../generated/prisma-client/prisma-schema');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: (req) => ({...req, db: new Prisma({
    typeDefs,
    debug: true,
    endpoint: process.env.DB_SERVER
  })}),  
})

server.start(() => console.log('Server is running on http://localhost:4000'))
