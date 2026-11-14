import fs from 'fs';
const content = fs.readFileSync('src/components/About.jsx', 'utf8');

const shadows = content.match(/shadow[^\s"'`]*/g);
const roundedCards = content.match(/rounded-(?:2xl|3xl|xl)/g);
const tiny = content.match(/text-(?:xs|\[1[0-3]px\]|\[[0-9]px\])/g);
const glass = content.match(/glass-panel/g);
const scales = content.match(/scale-[^\s"'`]*/g);
const uppercaseMatches = content.match(/uppercase/g);

console.log('About Shadows:', shadows);
console.log('About Rounded Cards:', roundedCards);
console.log('About Tiny Text:', tiny);
console.log('About Glass Panel:', glass);
console.log('About Scale Transforms:', scales);
console.log('About Uppercase count:', uppercaseMatches ? uppercaseMatches.length : 0);
