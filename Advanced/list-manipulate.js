// function* getEmployees() {
//     const names = ['Bruno', 'Cristiano', 'Amanda', 'Igor', 'Fábio', 'Kayse'];
//     const facts = [];

//     for (const name of names) {
//         facts.push(yield name);
//     }

//     return facts;
// }

// const generatorIterator = getEmployees();


// // get the first name out of the generator
// let name = generatorIterator.next().value;

// // pass data in *and* get the next name
// name = generatorIterator.next(`${name} is cool!`).value;

// // pass data in *and* get the next name
// name = generatorIterator.next(`${name} is awesome!`).value; 

// // pass data in *and* get the next name
// name = generatorIterator.next(`${name} is stupendous!`).value; 

// // you get the idea
// name = generatorIterator.next(`${name} is rad!`).value; 
// name = generatorIterator.next(`${name} is impressive!`).value;
// name = generatorIterator.next(`${name} is stunning!`).value;
// name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// // pass the last data in, generator ends and returns the array
// const positions = generatorIterator.next(`${name} is magnificent!`).value; 

// // displays each name with description on its own line
// positions.join('\n'); 


function* createSundae() {
    const toppings = [];

    toppings.push(yield);
    toppings.push(yield);
    toppings.push(yield);

    return toppings;
}

var it = createSundae();
it.next('hot fudge');
it.next('sprinkles');
it.next('whipped cream');
it.next();