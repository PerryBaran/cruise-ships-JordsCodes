function Ship (name) {
    this.name = name,
    this.startingPort = 'France',
    this.passengers = [];
}

function Passenger (name) {
    this.name = name;
}

Ship.prototype.setSail = function (ship) {
    
    this.startingPort = ""
}

module.exports = {Ship, Passenger};