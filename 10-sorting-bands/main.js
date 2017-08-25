// JS
// console.log('is working');

myBands = [ 'the jesus and mary chain','the smiths','the fields of nephilim', 'the pixies', 'the lunachicks', 'the god machine'];


// Sort Function - long version

// SortedBands = myBands.sort((a, b) => {
//     if( a > b) {
//         return 1;
//     } else {
//         return -1
//     }
// })

// SorteFunction - shorted version
// sortedBands = myBands.sort((a, b) => a > b ? 1 : -1);

// Replace function
function strip (bandname) {
    return bandname.replace(/^(a |the |an)/i, '').trim();
}

// Final sorted and trimed answer
sortedBands = myBands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

console.log (sortedBands);

// getting the bands
document.querySelector('#bands').innerHTML =
    sortedBands
        .map( band => `<li> ${band} </li>`)
        .join('');
         
console.log(bands);

