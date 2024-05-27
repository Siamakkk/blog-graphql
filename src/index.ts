import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

//GraphQl scalar types : Int Float String Boolean ID
const typeDefs = /* GraphQL */ `
  type Query {
    title: String!
    price: Float!
    releaseYear: Int!
    rating: Float!
    inStock: Boolean!
  }
`

const resolvers = {
  Query: {
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

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

console.log(`🚀  Server ready at: ${url}`)
