module.exports.default = a => a.length

module.exports.words = a => a.split(/\s/).map(s => s.trim()).filter(s => s.length > 0).length

module.exports.and = a => a.split(/\s/).map(s => s.trim()).filter(s => s === 'and').length

module.exports.upperA = a => a.split('').map(s => s.trim()).filter(c => c.length > 0 && c === 'A').length

module.exports.longestWord = a => Math.max(...a.split(/\s/).map(s => s.trim().length))
