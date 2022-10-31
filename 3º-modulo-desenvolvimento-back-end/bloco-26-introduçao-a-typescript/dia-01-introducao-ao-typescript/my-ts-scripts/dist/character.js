"use strict";
const character = [
    {
        nickName: 'xKillerx',
        class: 'warrior',
        stats: { agi: 10, str: 100, int: 25, hp: 1000, mp: 300 },
        createdAt: new Date('2003-10-1'),
    },
    {
        nickName: 'jainaProud',
        class: 'mage',
        stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
        createdAt: new Date('2003-10-2'),
    },
    {
        nickName: 'catIn',
        class: 'hunter',
        stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
        createdAt: new Date('2003-10-15'),
    },
];
function printCharacter(character, index) {
    const { nickName, class: cls, createdAt } = character;
    console.log(`\n\n===== Character: ${index + 1} ========`);
    console.log(`nickname: ${nickName}
class: ${cls}
createdAt: ${createdAt}`);
}
character.forEach(printCharacter);
