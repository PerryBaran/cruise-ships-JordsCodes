const { Port } = require('../src/ship');

describe ('ship constructor', () => {
    it ('returns a ship object', () => {
        const port = new Port('Amsterdam');

        expect(port).toBeInstanceOf(Object);
    });

    it('has a name', () => {
        const port = new Port('Amsterdam');
        
        expect(port.name).toEqual('Amsterdam');
    });
});