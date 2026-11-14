import fs from 'fs';
const content = fs.readFileSync('src/components/Projects.jsx', 'utf8');

const shadows = content.match(/shadow[^\s"'`]*/g);
const roundedCards = content.match(/rounded-(?:2xl|3xl)/g);
const tiny = content.match(/text-(?:xs|\[1[0-3]px\]|\[[0-9]px\])/g);
const glass = content.match(/glass-panel/g);
const hoverScale = content.match(/(?:hover|group-hover):scale-[^\s"'`]*/g);
const transitionAll = content.match(/transition-all/g);
const uppercaseMatches = content.match(/uppercase/g);

console.log('Projects Shadows:', shadows);
console.log('Projects Rounded Cards:', roundedCards);
console.log('Projects Tiny Text:', tiny);
console.log('Projects Glass Panel:', glass);
console.log('Projects Hover Scale:', hoverScale);
console.log('Projects Transition All:', transitionAll);
console.log('Projects Uppercase count:', uppercaseMatches ? uppercaseMatches.length : 0);
