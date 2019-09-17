// Documentation for the Gatsby Config API (used by this file) at
// https://www.gatsbyjs.org/docs/gatsby-config/

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable filenames/match-exported */

/**
 * Import the `ts-node` NPM package, and immediately registers it. After it is registered all
 * `require`s during the Gatsby build process transpiles Typescript syntax to regular JavaScript (in
 * accordance with `tsconfig.json`) so that it node does to throw syntax errors during the Gatsby
 * build.
 */
require('ts-node').register();

/**
 * Imports both all environment values defined by means of an `.ENV` file and the function that uses
 * these environment variables to create an return a new Gatsby configuration object.
 */
const { config } = require('dotenv');
const createConfig = require('./src/services/gatsby').default;

/**
 * All environment values as a JavaScript object.
 */
const env = config();

/**
 * Runs `createConfig()`, a function that accepts all ENV variables and the project root path,
 * and configures all Gatsby plugins based on the values passed.
 */
const gatsbyConfig = createConfig(env, __dirname);

module.exports = gatsbyConfig;
