// JS

const secretKey = 'bernat';
const keysTapped = [];

window.addEventListener('keyup', (e) => {
    keysTapped.push(e.key);
    // we slice from startig from the end and we only take 6 chars in it the rest is cuted off
    keysTapped.splice(-(secretKey.length-1), keysTapped.length-secretKey.length);
    console.log(keysTapped);
    if ( keysTapped.join('').includes(secretKey)) {
        console.log('Gotcha!!!');
        cornify_add();
    }
});


