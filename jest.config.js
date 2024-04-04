module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/testUtils/setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/testUtils/setupAfterEnv.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@gluestack-ui|@expo|react-redux|@react-navigation|@legendapp)/)',
  ],
};
