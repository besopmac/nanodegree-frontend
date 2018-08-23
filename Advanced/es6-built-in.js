// ES5 Function
const upperizedNames = ['Bruno', 'Cynthia', 'Magali'].map(function(name) {
    return name.toUpperCase();
});


/*
 * ES6 Arrow Function
 * Como converter uma função regular para a Arrow Function?
 * 
 * 1. Remover a palavra function
 * 2. Remover os parênteses
 * 3. Remover as chaves
 * 4. Remover a palavra reservada return
 * 5. Remover ponto-e-virgula
 * 6. Adicionar uma arrow (=>) entre a lista de parâmetros e o corpo da função
 * 
 */
const upperNames = ['Bruno', 'Cynthia', 'Marina'].map(
    name => name.toUpperCase()
);


// Exemplo 1.1
const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

const longNames = names.filter(function(name) {
  return name.length > 6;
});

const shortNames = names.filter(
    name => name.length < 6     
);


// Exemplo 2.1
const orderIceCream = (flavor, cone) => console.log(`Here is your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('mango', 'cookie');


// Question
setTimeout(() => {
    console.log('Start test...');
}, 2000);