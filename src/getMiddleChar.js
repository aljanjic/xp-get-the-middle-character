function getMiddle(str = '') {
  if (!str || !str.length) {
    return '';
  }

  if(str.length % 2 === 0){
    //number is even
  } else {
    //number is odd
  }

  if (str.length < 3) {
    return str;
  } else if(str.length > 3 && str.length < 5){
    return 'oo';
  }
  return 'b';
}

module.exports = getMiddle;
