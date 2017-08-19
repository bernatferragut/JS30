// JS

const address="https://randomuser.me/api/?results=50";

// FETCHING

var users = [];

const prom = fetch(address)
                .then(blob => blob.json())
                .then( res => users.push(res));

console.log(users);

for( user in users) {
    console.log(user.results.name.first);
}
