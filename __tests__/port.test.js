const { Port } = require('../src/port');

describe ('port', () => {
  let port;
  let ship;
  let titanic;
  let queenMary;

  describe ('constructor', () => {
    beforeEach(() => {
      port = new Port('Amsterdam');
    });

    it ('returns a port object', () => {
      expect(port).toBeInstanceOf(Object);
    });

    it('has a name', () => {
      expect(port.name).toEqual('Amsterdam');
    });
  });

  describe ('ships manager', () => {
    beforeEach(() => {
      port = new Port ('Amsterdam');
      ship = jest.fn();
      titanic = jest.fn();
      queenMary = jest.fn();
    });

    it ('adds ships to port', () => {
      port.addShip(ship);
      
      expect(port.ships).toContain(ship);
    });

    it('removes ships from port', () => {
      port.addShip(titanic);
      port.addShip(queenMary);
      port.removeShip(queenMary);
  
      expect(port.ships).toEqual([titanic]);
    });
  });
});
