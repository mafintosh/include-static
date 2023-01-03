#!/usr/bin/env node

const fs = require('fs')

let s = ''
let i = 2

for (; i < process.argv.length; i += 2) {
  if (s) s += '\n'

  const name = process.argv[i]
  const buf = fs.readFileSync(process.argv[i + 1])

  s += 'unsigned char ' + name + '[] = {\n  '

  for (let i = 0; i < buf.byteLength; i++) {
    s += '0x' + buf[i].toString(16).padStart(2, '0')
    if (i < buf.byteLength - 1) s += ','

    if ((i % 16) === 15) s += '\n  '
    else s += ' '
  }

  s = s.trim() + '\n};\n\n'
  s += 'size_t ' + name + '_len = ' + buf.byteLength + ';\n'
}

if (i < process.argv.length) {
  fs.writeFileSync(process.argv[i], s)
} else {
  process.stdout.write(s)
}
