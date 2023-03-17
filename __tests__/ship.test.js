const { Ship, Port } = require('../src/ship');

describe ('ship constructor', () => {
    it ('returns a ship object', () => {
        const ship = new Ship('Titanic');

        expect(ship).toBeInstanceOf(Object);
    });

    it ('has a starting port', () => {
        const port = new Port('Amsterdam');
        const ship = new Ship(port);

        expect(ship.currentPort).toBe(port.name);
    });

    it ('can set sail', () => {
        const ship = new Ship('Titanic');

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    });

    it ('can dock at a new port', () => {
        const amsterdam = new Port ('Amsterdam');
        const ship = new Ship (amsterdam);
        const dover = new Port ('Dover');

        ship.dock(dover);

        expect(ship.currentPort).toBe(dover);
    });
});

