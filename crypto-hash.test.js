const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
  
  it('generates a SHA-256 hashed output', () => {
    expect(cryptoHash('90895hash')).toEqual('6a42a70bd6ecfd01885463d022dc5a274010474a8acfc61eb6965b09f5f9c020');
  });

  it ('produces the same hash with the same input arguments in any order', () => {
    expect(cryptoHash('one', 'two', 'three'))
      .toEqual(cryptoHash('three', 'one', 'two'));
  })
});