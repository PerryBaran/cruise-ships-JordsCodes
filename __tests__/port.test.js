const { Port, Itinerary, Ship} = require('../src/ship');

describe ('port constructor', () => {
  it ('returns a port object', () => {
    const port = new Port('Amsterdam');

    expect(port).toBeInstanceOf(Object);
  });

  it('has a name', () => {
    const port = new Port('Amsterdam');
        
    expect(port.name).toEqual('Amsterdam');
  });
});

describe ('ships manager', () => {
  it ('adds ships to port', () => {
    const port = new Port ('Amsterdam');
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });
  it('removes ships from port', () => {
    const port = new Port ('Amsterdam');
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});
