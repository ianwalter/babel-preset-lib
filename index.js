module.exports = (babel, options = {}) => ({
  presets: [
    [
      require('@babel/preset-env'),
      options.env
    ]
  ],
  plugins: [
    ...(options.runtime === false ? [] : [
      require('@babel/plugin-transform-runtime'),
      {
        corejs: 3,
        ...options.runtime
      }
    ])
  ]
})
