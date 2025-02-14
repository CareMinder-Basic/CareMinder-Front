module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  roots: ["<rootDir>/packages", "<rootDir>/apps"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
