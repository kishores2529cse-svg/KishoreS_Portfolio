import fs from 'fs';
const content = fs.readFileSync('src/components/Skills.jsx', 'utf8');

const shadows = content.match(/shadow[^\s"'`]*/g);
const roundedCards = content.match(/rounded-(?:2xl|3xl|xl)/g);
const tiny = content.match(/text-(?:xs|\[1[0-3]px\]|\[[0-9]px\])/g);

console.log('Shadows:', shadows);
console.log('Rounded cards:', roundedCards);
console.log('Tiny text:', tiny);
