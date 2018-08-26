const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

// Programming Quiz: Make An Iterable Object
// Solved by eng_s_green on Nanodegree Forum
/*
const james = {
    name: 'James',
    height: `5'10"`,
    weight: 185
};


james[Symbol.iterator] = function() {
    // get the properties of object with Object.keys()
    let properties = Object.keys(this); 
    let count = 0;

    // set to true when this loop is done
    isDone = false;

    // define the next(), need for iterator
    let next = () => {
        // control the last property
        let i = count ++;
        if (count >= properties.length) {
            isDone = true;
        }

        return { value: this[properties[i]] , key: properties[i] , done:isDone }
    };

    // return the next() used to iterate
    return {next};
}

const iterator = james[Symbol.iterator]();
*/

// Nanodegree Solution
const james = {
    name: 'James',
    height: `5'10"`,
    weight: 185,
    [Symbol.iterator]() {
        var keys = Object.keys(this);
        var i = 0;
        return {
            next: () => {
                const key = keys[i++];
                const value = this[key];
                const done = i >= keys.length;
                return { key, value, done};
            }
        };
    }
};
 
let iterator = james[Symbol.iterator]();
 
console.log(iterator.next()); // 'James'
console.log(iterator.next()); // `5'10`
console.log(iterator.next()); // 185