const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(
  {
    ...config,
    resolver: {
      ...config.resolver,
      sourceExts: [
        ...config.resolver.sourceExts,
        'jsx',
        'js',
        'ts',
        'tsx',
        'cjs',
        'json',
      ], //add here
    },
  },
  { input: './src/globals.css' },
)
