const fs = require('fs');
const content = fs.readFileSync('old_src.js', 'utf-8');

const strings = content.match(/"([^"\\]*(\\.[^"\\]*)*)"/g) || [];
const texts = strings
  .map(s => s.slice(1, -1))
  .filter(s => s.length > 20 && !s.match(/^[0-9a-f]{10,}$/i) && !s.includes('function') && !s.includes('return '));

console.log("=== EXTRACTED LONG STRINGS ===");
console.log([...new Set(texts)].join('\n'));
