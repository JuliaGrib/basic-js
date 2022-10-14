const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if(Array.isArray(members)){
  let arr = members.filter(function(elem){
  if(typeof elem == 'string'){
      return elem
    }
  })
  let str = '';
  for(let i = 0; i < arr.length; i++){
    let a = arr[i].trim();
    str += a[0];
  }
  return str.toUpperCase().split('').sort().join('');
  }
  else {return false}

}

module.exports = {
  createDreamTeam
};
