module.exports = function includeStatic (name, buf) {
  let s = 'unsigned char ' + name + '[] = {\n  '

  for (let i = 0; i < buf.byteLength; i++) {
    s += '0x' + buf[i].toString(16).padStart(2, '0')
    if (i < buf.byteLength - 1) s += ','

    if ((i % 16) === 15) s += '\n  '
    else s += ' '
  }

  s = s.trim() + '\n};\n\n'
  s += 'size_t ' + name + '_len = ' + buf.byteLength + ';\n'

  return s
}
