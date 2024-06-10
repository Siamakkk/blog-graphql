export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globalSetup: './tests/configs/globalSetup.ts',
  globalTeardown: './tests/configs/teardownSetup.ts',
}
