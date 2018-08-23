const mammal = {
    vertebrate: true,
    earBones: 3
};

const rabbit = Object.create(mammal);

console.log(rabbit);