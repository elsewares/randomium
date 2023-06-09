const { EnvironmentPlugin } = require('webpack');
// Add additional requirements here

require('dotenv').config();
// Export a configuration object
// See [Wepack's documentation](https://webpack.js.org/configuration/) for additional ideas of how to
// customize your build beyond what Angular provides.
module.exports = {
  plugins: [
    new EnvironmentPlugin(['OPEN_AI_API_KEY'])
  ]
}
