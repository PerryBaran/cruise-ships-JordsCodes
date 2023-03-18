const { Ship, Port, Itinerary } = require('../src/ship');

describe ('ship constructor', () => {
  it ('can be instantiated', () => {
    const port = new Port ('Amsterdam');
    const itinerary = new Itinerary (port);
    const ship = new Ship (itinerary);

    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    const port = new Port('Amsterdam');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
  
    expect(ship.currentPort).toBe(port);
  });

  it ('has a previous port', () => {
    const port = new Port('Amsterdam');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.previousPort).toBeFalsy();
  });

  it ('can set sail', () => {
    const amsterdam = new Port('Amsterdam');
    const lochness = new Port('Loch Ness');
    const itinerary = new Itinerary([amsterdam, lochness]);
    const ship = new Ship(itinerary);
  
    ship.setSail();
  
    expect(ship.currentPort).toBeFalsy();
  });

  it ('can dock at a new port', () => {
    const amsterdam = new Port('Amsterdam');
    const lochness = new Port('Loch Ness');
    const itinerary = new Itinerary([amsterdam, lochness]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect (ship.currentPort).toBe(lochness);
  });

  it('can\'t sail further than its itinerary', () => {
    const amsterdam = new Port('Amsterdam');
    const lochness = new Port('Loch Ness');
    const itinerary = new Itinerary([amsterdam, lochness]);
    const ship = new Ship(itinerary);
  
    ship.setSail();
    ship.dock();
  
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });

});


