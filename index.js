module.exports = (babel, options = {}) => ({
  presets: [
    [
      require('@babel/preset-env'),
      options
    ]
  ],
  plugins: [
    require('@babel/plugin-transform-runtime')
  ]
})
