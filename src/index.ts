import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

//GraphQl scalar types : Int Float String Boolean ID
export const typeDefs = /* GraphQL */ `
  type Query {
    hello: String!
    title: String!
    price: Float!
    releaseYear: Int!
    rating: Float!
    inStock: Boolean!
  }
`

export const resolvers = {
  Query: {
    hello: () => 'world',
    title: () => 'Bosch vacum cleaner',
    price: () => 82.99,
    releaseYear: () => 2023,
    rating: () => 4.8,
    inStock: () => true,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(server => {
  console.log(`🚀  Server ready at: ${server.url}`)
})
