// sobre callbacks

function callAndAdd(n, callbackFunction) {
    return n + callbackFunction();
}

function returnFour() {
    return 4;
}

callAndAdd(2, returnFour);


/*
 * Métodos array: forEach
 * 
 */
[1, 3, 4, 6, 7, 9].forEach(function logIfOdd(n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
});

/*
 * função callback anonima
 * 
 */
[1, 3, 4, 6, 7, 9].forEach(function (n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
});

/*
 * caso a função já tenha sido definida,
 * é possível passar apenas o nome da função callback
 * 
 */ 
function logIfOdd(n) {
    if (n % 2 !== 0) {
        console.log(n);
    }
}

[1, 3, 4, 6, 7, 9].forEach(logIfOdd);