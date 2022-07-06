const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "http://localhost:4220/",
    uniqueName: "tiki"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "tiki",
      library: { type: "var", name: "tiki" },
      filename: "remoteEntry.js",
      exposes: {
        './TikiModule': './projects/tiki/src/app/tiki.module.ts',
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
