// sobre callbacks

function callAndAdd(n, callbackFunction) {
    return n + callbackFunction();
}

function returnFour() {
    return 4;
}

callAndAdd(2, returnFour);


/*
 * Métodos array: forEach
 * 
 */
[1, 3, 4, 6, 7, 9].forEach(function logIfOdd(n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
});

/*
 * função callback anonima
 * 
 */
[1, 3, 4, 6, 7, 9].forEach(function (n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
});

/*
 * caso a função já tenha sido definida,
 * é possível passar apenas o nome da função callback
 * 
 */ 
function logIfOdd(n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
}

[1, 3, 4, 6, 7, 9].forEach(logIfOdd);

/*
 * name of children forEach
 * 
 */
const childNames = ['Magali', 'Marina', 'Gabriela'];

childNames.forEach(function(name) {
    console.log(`O nome da minha filha será ${name}.`);
});


/*
 * Métodos array: map
 * 
 */
const cars = ['Porsche', 'Mustang', 'Civic'];

cars.map(function(brand) {
    return brand.length;
});


/*
 * exercício com map
 * 
 */
const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(function(item) {
    return `${item.name} by ${item.artist} sold ${item.sales} copies`;
});

console.log(albumSalesStrings);


/*
 * Métodos array: filter
 * 
 */
const peanuts = ['Snoopy', 'Charlie Brown', 'Linus Van Pelt', 'Lucy Van Pelt', 'The Red-Haired Girl', 'Woodstock'];

peanuts.filter(function(name) {
    return name.length < 7;
});

/*
 * exercício com filter
 * 
 */
const musicData = [   
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

let results = musicData.filter(function(item, i) {
    return musicData.indexOf(item) === i;
});

console.log(results);