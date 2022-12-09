const {
  compilerOptions: { paths: alias },
} = require('./alias.json');
const path = require('path');

const getAlias = () => {
  const aliasKeys = Object.keys(alias).map((key) => key.replace('/*', ''));
  const aliasPath = Object.values(alias).map((value) => value[0].replace('/*', ''));
  const aliasMapped = Object.fromEntries(
    aliasKeys.map((key, index) => [key, path.resolve(__dirname, aliasPath[index])]),
  );

  return aliasMapped;
};

module.exports = {
  webpack: {
    alias: getAlias(),
  },
};
