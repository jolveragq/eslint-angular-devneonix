module.exports = {
    extends: ['./rules/index'].map(require.resolve),
    settings: {
      // Append 'ts' extension to Airbnb 'import/resolver' setting
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts', '.json'],
        },
      },
      // Append 'ts' extension to Airbnb 'import/extensions' setting
      'import/extensions': ['.js', '.ts', '.mjs'],
    },
    rules: {},
  };