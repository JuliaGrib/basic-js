const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


 function getSeason(obj) {
  throw new NotImplementedError('Not implemented');
  // if(arguments.length == 0) {return 'Unable to determine the time of year!'};
  // if (Object.prototype.toString.call(obj) === '[object Date]') {
  //     let year = obj.getFullYear();
  //     // console.log(year);
  //     let month = obj.getMonth();
  //     // console.log(month);
  //     let date = obj.getDate();
  //     // console.log(date);
  //     if (year > 0 && year < 10000) {
    
  //       if (month == 0 || month == 1 || month == 11) {
  //         return 'winter';
  //       } else if (month == 2 || month == 3 || month == 4) {
  //         return 'spring';
  //       } else if (month == 5 || month == 6 || month == 7) {
  //         return 'summer';
  //       } else if (month == 8 || month == 9 || month == 10) {
  //         return 'autumn';
  //       }
    
  //     }
  //   }
  // else {
  //   return "Invalid date!";
  // }
 }

module.exports = {
  getSeason
};
