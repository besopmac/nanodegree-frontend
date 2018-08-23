function Animal() {
    this.age = 2;
    this.weight = 16;
    this.eat = function() {
        console.log('chomp... chomp... chomp...');
    }
    this.sleep = function() {
        console.log('...zZzZzZ');
    }
}

/*
 * O vínculo secreto
 * 
 */
const bear = {
    claws: true,
    diet: 'carnivore'
};

// Atribuindo ao prototype de PolarBear o objeto bear
function PolarBear() {}

PolarBear.prototype = bear;

// Criando um novo objeto, baseado em PolarBear, e atribuindo-lhe duas propriedades
const snowball = new PolarBear();

snowball.color = 'white';
snowball.favoriteDrink = 'juice';

console.log(snowball.__proto__ === bear);