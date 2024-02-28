const {
  configForNode: { coverageThreshold, ...config },
} = require("@love2hina-net/k8slens.jest").monorepoPackageConfig(__dirname);

module.exports = config;
