import { startStandaloneServer } from '@apollo/server/standalone'
import { createAolloServer } from './index.js'

const server = createAolloServer()

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(server => {
  console.log(`🚀  Server ready at: ${server.url}`)
})
