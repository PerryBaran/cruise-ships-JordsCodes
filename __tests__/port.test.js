const { Port } = require('../src/ship');

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