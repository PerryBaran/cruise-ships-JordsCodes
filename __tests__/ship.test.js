const { Ship, Port, Itinerary } = require('../src/ship');

describe ('ship constructor', () => {
  it ('can be instantiated', () => {
    const port = new Port ('Amsterdam');
    const itinerary = new Itinerary ([port]);
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
    expect(lochness.ships).not.toContain(ship);
  });

  //Modify the test for Ship > can set sail to test that 
  //the Ship's previous currentPort no longer contains the 
  //Ship instance on its ships property

  it ('can dock at a new port', () => {
    const amsterdam = new Port('Amsterdam');
    const lochness = new Port('Loch Ness');
    const itinerary = new Itinerary([amsterdam, lochness]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect (ship.currentPort).toBe(lochness);
    expect (lochness.ships).toContain(ship);
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

  it('gets added to port on instantiation', () => {
    const amsterdam = new Port('Amsterdam');
    const itinerary = new Itinerary([amsterdam]);
    const ship = new Ship(itinerary);
    
    expect (amsterdam.ships).toContain(ship);
  });
});


