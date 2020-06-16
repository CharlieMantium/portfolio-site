const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        animations: path.resolve(__dirname, 'src/animations'),
        components: path.resolve(__dirname, 'src/components'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        styles: path.resolve(__dirname, 'src/styles'),
      },
    },
  });
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollmagic/,
            use: loaders.null(),
          },
          {
            test: /scrollmagic-plugin-gsap/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
