(function logger(name) {
  console.log(`Hello, ${name}!`);  
})('Bruno');

// forma de declaração alternativa
(function bark(dog) {
    console.log(`Parla, ${dog}!`);
}('Barney'));