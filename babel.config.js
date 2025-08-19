module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    'nativewind/babel',
  ],
  plugins: [
    // other plugins you might use...
    'react-native-worklets/plugin', // 👈 must be last
  ],
};
