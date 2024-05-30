// For clarity in this example we included our typeDefs and resolvers above our test,

import { ApolloServer } from '@apollo/server'
import assert from 'node:assert'

import { resolvers, typeDefs } from '../src/index'
describe('sadasdasdasd', () => {
  it('test graphQL server running', async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers,
    })

    const response = await testServer.executeOperation({
      query: 'query { hello }',
    })

    assert(response.body.kind === 'single')
    expect(response.body.singleResult.errors).toBeUndefined()
    expect(response.body.singleResult.data?.hello).toBe('world')
    await testServer.stop()
  })
})
