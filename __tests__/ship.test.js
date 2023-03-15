const {Ship, Passenger} = require('../src/ship');

describe ('ship constructor', () => {
    it ('returns a ship object', () => {
        const ship = new Ship('Titanic');

        expect(ship).toBeInstanceOf(Object);
    });

    it ('has a starting port', () => {
        const ship = new Ship('Titanic');

        expect(ship.startingPort).toBe('France');
    });
});

describe ('passenger constructor', () => {
    it ('returns a passenger object', () => {
        const passenger = new Passenger ('Jack');

        expect(passenger).toBeInstanceOf(Object);
    });
});

describe ('board', () => {
    it ('boards passengers', () => {
        const ship = new Ship('Titanic');
        const passenger = new Passenger ('Jack');

        expect(ship.board(passenger)).toEqual ({ name: 'Jack',});
    });
});

