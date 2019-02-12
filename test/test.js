import test from 'ava'
import { transformSync, loadOptions } from '@babel/core'
import preset from '..'

test('basic config', t => {
  const src = `
    export default function out (...args) {
      return { count: args.length, ...args }
    }
  `
  const { code } = transformSync(
    src,
    { presets: [preset] }
  )
  t.snapshot(code)
})

test('options are merged', t => {
  t.snapshot(loadOptions({ presets: [[preset, { debug: true }]] }))
})
