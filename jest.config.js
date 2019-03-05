module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular/preprocessor.js',
    '^.+\\.(css|scss)$': '<rootDir>/../../tools/jest/cssTransform'
  },
  resolver: '@nrwl/builders/plugins/jest/resolver',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'html'],
  collectCoverage: true,
  coverageReporters: ['html']
};
