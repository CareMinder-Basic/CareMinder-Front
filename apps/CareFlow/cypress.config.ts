import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: false,
    screenshotOnRunFailure: false,
  },
  env: {
    serverUrl: 'https://dev.careflow.co.kr/api',
  },
});
