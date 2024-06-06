const sum = require('./sum');


describe('test sum', () => {

  it('should return 5', () => {
    const result = sum(2, 3);
    expect(result).toEqual(5);
  })
})