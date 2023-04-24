const { EnvironmentPlugin } = require('webpack');
// Add additional requirements here

require('dotenv').config();
// Export a configuration object
// See [Wepack's documentation](https://webpack.js.org/configuration/) for additional ideas of how to
// customize your build beyond what Angular provides.
module.exports = {
  plugins: [
    new EnvironmentPlugin([
      // Insert the keys to your environment variables here.
      // Eg: APP_API_ENDPOINT="http://localhost:3000/api/v1"
      OPEN_AI_API_KEY=process.env.OPEN_AI_API_KEY
    ])
  ]
}
