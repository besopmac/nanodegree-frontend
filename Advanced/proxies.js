const richard = {status: 'looking for work'};
const handler = {
    // armadilha get
    get(target, propName) {
        console.log(target);
        console.log(propName);
        return target[propName];
    },

    // armadilha set
    set(target, propName, value) {
        if(propName === 'payRate') {
            value = value * 0.85;
        }
        target[propName] = value;
    }
}

const agent = new Proxy(richard, handler);

agent.payRate = 1000;