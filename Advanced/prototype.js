/*
 * trabalhando com hasOwnProperty()
 * 
 */
function Phone() {
    this.operationSystem = 'iOS';
}

let myPhone = new Phone();
let own = myPhone.hasOwnProperty('operationSystem');

console.log(`Own: ${own}`);

// add nova propriedade ao prototype
Phone.prototype.screenSize = 7;

let inherited = myPhone.hasOwnProperty('screenSize');

console.log(`Inherited: ${inherited}`);


/*
 * Trabalhando com isPrototypeOf()
 * 
 * 1. Verifica se um objeto existe ou não em outra cadeia de protótipos de um objeto
 * 2. Pega um único argumento: um objeto cuja cadeia de protótipos deve ser pesquisada
 *  
 */ 
const rodent = {
    favoriteFood: 'cheese',
    hasTail: true
}

function Mouse() {
    this.favoriteFood = 'cheese';
}

Mouse.prototype = rodent;

const ralph = new Mouse();
const result = rodent.isPrototypeOf(ralph);

console.log(`Result: ${result}`);


/*
 * Object.getPrototypeOf()
 * 
 * 1. Retorna o prototipo do objeto passado a ela
 * 
 */
const myPrototype = Object.getPrototypeOf(ralph);

console.log(`My prototype: ${myPrototype}`);


/*
 * Constructor
 * 
 */
function Longboard() {
    this.material = 'wood';
}

const board = new Longboard();
console.log(board.constructor);

