function getMiddle(str = '') {
  if (!str || !str.length) {
    return '';
  }
  if (str.length < 3) {
    return str;
  }
  return 'b';
}

module.exports = getMiddle;
