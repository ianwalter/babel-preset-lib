import test from 'ava'
import { transformSync } from '@babel/core'
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
