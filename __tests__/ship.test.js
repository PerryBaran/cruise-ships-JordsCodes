const { Ship, Port, Itinerary } = require('../src/ship');

describe ('ship', () => {
  describe('with ports and an itinerary', () => {
    let ship;
    let amsterdam;
    let lochness;
    let itinerary;

    beforeEach(() => {
      amsterdam = new Port('Amsterdam');
      lochness = new Port('Loch Ness');
      itinerary = new Itinerary([amsterdam, lochness]);
      ship = new Ship(itinerary);
    });
      
    it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });
    
    it('has a starting port', () => {
      expect(ship.currentPort).toBe(amsterdam);
    });

    it('has a previous port', () => {
      expect(ship.previousPort).toBeFalsy();
    });

    it('can set sail', () => {
      ship.setSail();
    
      expect(ship.currentPort).toBeFalsy();
      expect(amsterdam.ships).not.toContain(ship);
    });

    it('can dock at a new port', () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toBe(lochness);
      expect(lochness.ships).toContain(ship);
    });

    it('can\'t sail further than its itinerary', () => {
      ship.setSail();
      ship.dock();
      
      expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });

    it('gets added to port on instantiation', () => {
      expect(amsterdam.ships).toContain(ship);
    });
  });
});


