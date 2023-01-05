#!/usr/bin/env node

const fs = require('fs')
const includeStatic = require('.')

let s = ''
let i = 2

for (; i + 1 < process.argv.length; i += 2) {
  if (s) s += '\n'

  const name = process.argv[i]
  const buf = fs.readFileSync(process.argv[i + 1])

  s += includeStatic(name, buf)
}

if (i < process.argv.length) {
  fs.writeFileSync(process.argv[i], s)
} else {
  process.stdout.write(s)
}
