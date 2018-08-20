function Sandwich(bread, meat, vegetables) {
    this.bread = bread;
    this.meat = [meat];
    this.vegetables = [vegetables];
}

const building = {
    floors: 5,
    addFloor: function () {
        debugger;
        this.floors += 1;
    }
};

building.addFloor();