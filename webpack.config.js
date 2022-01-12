const path = require("path");
const LicensePlugin = require("webpack-license-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new LicensePlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      defaultSizes: "parsed",
      openAnalyzer: false,
      generateStatsFile: true,
    }),
  ],
};
