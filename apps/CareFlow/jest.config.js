const baseConfig = require("../../jest.config");

module.exports = {
  ...baseConfig,
  displayName: "frontend",
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
};
