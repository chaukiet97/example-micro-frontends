const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "example-micro-frontends"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        'tiki': "tiki@http://localhost:4210/remoteEntry.js",
        'shoppe': "shoppe@http://localhost:4220/remoteEntry.js",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
