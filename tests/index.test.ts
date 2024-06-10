import assert from 'node:assert'

import { createAolloServer } from '../src/index'

it('test graphQL server running', async () => {
  const response = await createAolloServer().executeOperation({
    query: 'query { hello }',
  })

  assert(response.body.kind === 'single')
  expect(response.body.singleResult.errors).toBeUndefined()
  expect(response.body.singleResult.data?.hello).toBe('world')
})
