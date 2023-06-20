function getMiddle(str = '') {
  if (!str || !str.length) {
    return '';
  }

  let x = sliceStart(str);
  return str.slice(x,str.length - x);

}

function sliceStart(str) {
  return Math.floor((str.length - 1) / 2);
}

module.exports = getMiddle;
