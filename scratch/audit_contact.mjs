import fs from 'fs';
const content = fs.readFileSync('src/components/Contact.jsx', 'utf8');

const shadows = content.match(/shadow[^\s"'`]*/g);
const roundedCards = content.match(/rounded-(?:2xl|3xl)/g);
const tiny = content.match(/text-(?:xs|\[1[0-3]px\]|\[[0-9]px\])/g);
const glass = content.match(/glass-panel/g);

console.log('Contact Shadows:', shadows);
console.log('Contact Rounded Cards:', roundedCards);
console.log('Contact Tiny Text:', tiny);
console.log('Contact Glass Panel:', glass);
