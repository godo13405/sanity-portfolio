const CareerYears = () => {
  var prevTime = new Date('1 January 2010'); // career start
  var thisTime = new Date(); // now
  var diff = Math.floor((thisTime.getTime() - prevTime.getTime()) / (1000 * 60 * 60 * 24 * 364)); // now - career start

  return diff;
}

export default CareerYears;