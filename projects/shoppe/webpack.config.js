const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "http://localhost:4220/",
    uniqueName: "shoppe"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shoppe",
      library: { type: "var", name: "shoppe" },
      filename: "remoteEntry.js",
      exposes: {
        './ShoppeModule': './projects/shoppe/src/app/shoppe.module.ts',
      },

      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
