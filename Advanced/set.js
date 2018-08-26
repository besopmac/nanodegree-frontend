// Set é um objeto que permite armazenar tipos únicos
const games = new Set([
    'Resident Evil',
    'Parasite Eve',
    'Resident Evil',
    'Final Fantasy VII',
    'Alex Kidd in Miracle World',
    'Tetris',
    'Shinobi'
]);

/*
 * Utilizando SetIterator para iterar os elementos
 * 
 * O método values() é do tipo SetIterator, com isso é possível
 * realizar iterações dos elementos usando next()
 * 
 */
const gamesIterator = games.values();

console.log(gamesIterator.next()) // {value: "Resident Evil", done: false}


/*
 * Usando um loop for...of
 * 
 */
const colors = new Set(['red', 'yellow', 'blue', 'green', 'violet', 'orange', 'tomato']);

for (const color of colors) {
    console.log(color);
}


// Quiz: Usando Sets
const myFavoriteFlavors = new Set();

myFavoriteFlavors.add('chocolate chip');
myFavoriteFlavors.add('cookies and cream');
myFavoriteFlavors.add('strawberry');
myFavoriteFlavors.add('vanilla');

myFavoriteFlavors.delete('strawberry');


/*
 * Um WeakSet é como um set normal, mas com algumas diferenças-chave:
 * 
 * 1. Só pode conter objetos
 * 2. Não é um iterable, então não é possível iterar por seus itens
 * 3. Não possui o método .clear()
 * 
 */
const dog = { name: 'Barney', breed: 'Beagle', age: 1 }
const cat = { name: 'Orangey', breed: 'Tabby', age: 3 }  

const animals = new WeakSet([dog, cat]);

/*
 * Utilizar WeakSets ao invés dos Sets deve-se ao Garbage Collector do JS
 * você não precisa se preocupar em deletar referências dos objetos deletados
 * pois isso é feito automaticamente!
 * 
 */

// Quiz: Trabalhando com WeakSets
const uniqueFlavors = new WeakSet();
const flavor1 = { flavor: 'chocolate' }
const flavor2 = { flavor: 'morango' }

uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);
uniqueFlavors.add(flavor1);