/*
 * ES6 Generator Functions
 * 
 */
function* getEmployee() {
    console.log('the function is started');

    const names = ['Bruno', 'Cristiano', 'Amanda', 'Igor', 'Fábio', 'Kayse'];

    for (const name of names) {
        yield name // this pause the execution
    }

    console.log('the function is over');
}

// Generator and Iterators
const generatorIterator = getEmployee();
let result = generatorIterator.next();


// Q1
function* udacity() {
    yield 'Richard',
    yield 'James'
}

const udacityRoll = udacity();


// Enviando dados para dentro ou fora de um Generator
function* displayResponse() {
    const response = yield;
    console.log(`Your response is ${response}!`);
}

const iterator = displayResponse();