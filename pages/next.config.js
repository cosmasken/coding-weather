module.exports = {
    webpack: (config, { isServer }) => {
      // Use file-loader to handle font files
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'static/fonts',
            publicPath: isServer ? '../' : '',
          },
        },
      });
      return config;
    },
  };
  