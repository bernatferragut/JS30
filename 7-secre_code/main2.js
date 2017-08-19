// JS

const secretKey = 'bernat';
const keysTapped = [];
// const keysAdded =[];
let key;
window.addEventListener('keyup', (e) => {
    // console.log(e.key);
    keysTapped.push({ 
        key: e.key,
        keyCode: e.keyCode
    });
    
    for( let i=0; i<keysTapped.length; i++) {
        keysAdded.push(keysTapped[i].keyCode);
    }
    console.log(keysAdded.reduce(function(a,b) {
        return(a+b);
    }));
    // console.log(keysTapped);
    keysTapped.splice(-(secretKey.length-1), keysTapped.length-secretKey.length);
    console.log(keysTapped);
    if ( keysTapped.join('').includes(secretKey)) {
        console.log('Gotcha!!!');
        cornify_add();
    }
})