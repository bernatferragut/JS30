// JS

const secretKey = 'bernat';
const keysTapped = [];

window.addEventListener('keyup', (e) => {
    // console.log(e.key);
    keysTapped.push(e.key);
    // console.log(keysTapped);
    keysTapped.splice(-(secretKey.length-1), keysTapped.length-secretKey.length);
    console.log(keysTapped);
    if ( keysTapped.join('').includes(secretKey)) {
        console.log('Gotcha!!!');
        cornify_add();
    }
})