const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack')

module.exports = {
    plugins: [new Dotenv()],
    externals: [nodeExternals()],
};