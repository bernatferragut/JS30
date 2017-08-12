// JS
console.log('WORKS!');
// ENPOINT
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
// CITIES ARRAY
const cities =[];
// FETCH BROWSER API
const prom = fetch(endpoint) //  returns a promise
                .then (blob => blob.json()) // returns a blob of info that must be converted to json
                .then( data => cities.push(...data)); // that returns another promise that can be resolved

// MAP and FILTER res

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //REGEX
        const regex = new RegExp(wordToMatch, 'gi'); 
        return place.city.match(regex) || place.state.match(regex);
        }
    );
}


                


