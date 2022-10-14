const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let arrNum = []; 
//отделяем числа
  let arrX = arr.map(function(elem){
    if(elem == -1) {return elem}
    else{
      arrNum.push(elem);
      return elem = 'x';
    }
  })
//сортируем числа
let sortNum = arrNum.sort(function(a, b){
  return a - b;
})
//заполняем массив
  let num = 0;
  let result = arrX.map(function(elem){
    if(elem == -1) {return elem}
    else{
      return elem = sortNum[num++];
    }
  })
   return result; 
}

module.exports = {
  sortByHeight
};
