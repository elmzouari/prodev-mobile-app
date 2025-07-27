module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', {jsImportSource: "nativewind"}],
    plugins: ['nativewind/babel'],
  };
};
