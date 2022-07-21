const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'), // porta de entrada do grafo
    resolvers // resolve os types
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})