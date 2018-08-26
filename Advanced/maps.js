const dogs = new Map();

/*
 * Para adicionar um valor ao Map, utiliza-se o método set()
 * 
 */
dogs.set('Barney', {
    name: 'Barney',
    breed: 'Beagle',
    age: 1
});

dogs.set('Johnny', {
    name: 'Johnny',
    breed: 'Chiuaua',
    age: 6
});

dogs.set('Milk', {
    name: 'Milk',
    breed: 'German Shepherd',
    age: 12
});


// Para deletar um item do Map, utiliza-se o método delete()
// dogs.delete('Milk');


// 1. Iterando com MapIterator
let iteratorObjForKeys = dogs.keys();

// 2. Iterando com looping for...of
for (const [key, value] of dogs) {
    console.log(key + ' ' + value);
}

// 3. Usando forEach
dogs.forEach((value, key) => console.log(value, key));
