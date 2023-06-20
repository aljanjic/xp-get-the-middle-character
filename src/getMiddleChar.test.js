const getMiddle = require('./getMiddleChar');

describe('getMiddleChar', () => {
  it('should return "" when given not string, or empty string', () => {
    expect(getMiddle()).toBe('');
    expect(getMiddle(123)).toBe('');
    expect(getMiddle(null)).toBe('');
    expect(getMiddle('')).toBe('');
  });
  it('should return "A" when given "A"', () => {
    expect(getMiddle('A')).toBe('A');
  });
  it('should return "DD" when given "DD"', () => {
    expect(getMiddle('DD')).toBe('DD');
  });
});
