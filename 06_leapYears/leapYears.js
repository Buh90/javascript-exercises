const leapYears = function (year) {
  switch (true) {
    case year % 4 !== 0:
    case year % 100 == 0 && year % 100 == 0 && year % 400 != 0:
      return false;
      break;
    default:
      return true;
  }
};

// Do not edit below this line
module.exports = leapYears;
