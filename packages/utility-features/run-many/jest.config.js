const config = require("@love2hina-net/k8slens.jest").monorepoPackageConfig(__dirname).configForReact;

module.exports = { ...config, coverageThreshold: undefined };
