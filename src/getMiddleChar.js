function getMiddle(str = '') {
  if (!str || !str.length) {
    return '';
  }

  let x = g(str);
  return str.slice(x,str.length - x);

  // if(str.length % 2 === 0){
  //   //number is even
  //   console.log(g('ahoj'));
  //   console.log(g('ahojaa'));
  //   console.log(g('ahojahoj'));
  //   console.log(g('ahojaho'));
  // } else {
  //   //number is odd
  // }

  // if (str.length < 3) {
  //   return str;
  // } else if(str.length > 3 && str.length < 5){
  //   return 'oo';
  // }
  // return 'b';
}

function g(str) {
  return Math.floor((str.length - 1) / 2);
}

module.exports = getMiddle;
