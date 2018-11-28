module.exports = {
  testURL: 'http://localhost',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.ts',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  testMatch: ['**/__tests__/*.+(ts|tsx|js)'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json'
    }
  }
};
