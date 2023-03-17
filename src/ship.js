function Ship (name) {
    this.name = name,
    this.currentPort = 'Amsterdam',
    this.passengers = [];
};

function Port (name) {
    this.name = name;
};

Ship.prototype.setSail = function () {
    this.currentPort = "";
};

Ship.prototype.dock = function (port) {
    this.currentPort = port;
}
module.exports = {Ship, Port};