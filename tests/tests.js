const { test } = require('@ianwalter/bff')
const { transformSync } = require('@babel/core')
const preset = require('..')

test('basic config', ({ expect }) => {
  const src = `
    export default function out (...args) {
      return { count: args.length, ...args }
    }
  `
  const { code } = transformSync(src, { presets: [preset] })
  expect(code).toMatchSnapshot()
})
