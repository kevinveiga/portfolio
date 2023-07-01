const dev = process.env.NODE_ENV !== 'production';

module.exports = function (api) {
  api.cache(true);

  return {
    plugins: [
      [
        'styled-components',
        {
          displayName: dev,
          fileName: dev,
          minify: true,
          preprocess: false,
          pure: false,
          ssr: true,
          transpileTemplateLiterals: true
        }
      ]
    ],
    presets: ['next/babel']
  };
};
