const button = document.getElementById('button');

button.addEventListener('click', (function() {
    let count = 0;

    return function() {
        count += 1;

        if (count === 2) {
            alert('Você já apertou esse botão duas vezes, dedo nervoso!');
            count = 0;
        }
    }
})());

(function(n){
    delete n;
    return n;
  })(2);


