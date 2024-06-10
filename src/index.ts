import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

export function createAolloServer() {
  const typeDefs = /* GraphQL */ `
    type Query {
      hello: String!
      title: String!
      price: Float!
      releaseYear: Int!
      rating: Float!
      inStock: Boolean!
    }
  `

  const resolvers = {
    Query: {
      hello: () => 'world',
    },
  }

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })
  return server
}
