function multiply(n1, n2) {
    return n1 * n2;
}

/* 
 * métodos: call() e apply()
 * 
 */
const mockingbird = {
    title: 'O Sol é Para Todos',
    describe: function () {
      console.log(`${this.title} é um romance clássico`);
    }
};

const pride = {
    title: 'Orgulho e Preconceito'
};

const Andrew = {
    name: 'Andrew',
    introduce: function() {
        console.log(`Hi, my name is ${this.name}!`);
    }
};

const Richard = {
    name: 'Richard',
    introduce: function() {
        console.log(`Hello there! I'm ${this.name}.`);
    }
};

const andrew = {
    name: 'Andrew'
};
  
function introduce(language) {
    console.log(`Meu nome é ${this.name} e minha linguagem de programação favorita é ${language}.`);
}

/*
 * método bind()
 * 
 */
const dog = {
    age: 5,
    growOneYear: function() {
        this.age += 1;
    }
};

function invokeTwice(cb) {
    cb();
    cb();
}

// bind() cria uma cópia 
const myDog = dog.growOneYear.bind(dog);

/*
 * exercício com bind()
 * Escreva uma expressão usando bind() que nos permita
 * "pegar emprestado" o método displayName() do objeto driver para o objeto car.
 *  
 */
const driver = {
    name: 'Danica',
    displayName: function () {
      console.log(`Name: ${this.name}`);
    }
};
  
const car = {
    name: 'Fusion'
};

car.carName = driver.displayName.bind(car);
