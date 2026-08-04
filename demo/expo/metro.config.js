// Learn more: https://docs.expo.dev/guides/monorepos/
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("node:path");

const config = withMonorepoPaths(
	withNativeWind(getDefaultConfig(__dirname), { input: "./src/global.css" }),
);

module.exports = config;
