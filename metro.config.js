// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Workaround for Windows node:sea directory issue
config.watchFolders = [__dirname];
config.resolver = {
  ...config.resolver,
  nodeModulesPaths: [__dirname + '/node_modules'],
};

module.exports = config;
