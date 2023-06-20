const getMiddle = require('./getMiddleChar');

describe('getMiddleChar', () => {
  it('should return "" when given not string', () => {
    expect(getMiddle()).toBe('');
  });
});
