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

    it ('can set sail', () => {
        const ship = new Ship('Titanic');

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    });
});

