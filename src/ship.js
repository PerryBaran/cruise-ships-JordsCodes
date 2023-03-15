function Ship (name) {
    this.name = name,
    this.startingPort = 'France',
    this.passengers = [];
}

function Passenger (name) {
    this.name = name;
}

Ship.prototype.board = function (passenger) {
    console.log(passenger);
    this.passengers.push(passenger);
    return this.passengers[0];
}

module.exports = {Ship, Passenger};