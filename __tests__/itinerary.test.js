const { Itinerary, Port } = require ('../src/ship');

describe ('itinerary constructor', () => {
  it ('returns an itinerary object', () => {
    const itinerary = new Itinerary('name');
        
    expect(itinerary).toBeInstanceOf(Object);
  });
  it ('has ports', () => {
    const amsterdam = new Port('Amsterdam');
    const lochness = new Port ('Loch Ness');
    const itinerary = new Itinerary([amsterdam, lochness]);
        
    expect(itinerary.ports).toEqual([amsterdam, lochness]);
  });
});

