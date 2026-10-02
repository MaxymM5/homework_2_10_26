//Task 1

// const car = {
//   producer: "Toyota",
//   model: "Camri",
//   year: 2021,
//   averageSpeed: 90
// };

// function check(car){
//   alert(`
//   producer: ${car.producer}
//   model: ${car.model}
//   year: ${car.year}
//   averageSpeed: ${car.averageSpeed}km/h
//   `);
// }
// check(car);

// function distanceCalculator(speed, distance){
//   const a = distance / speed;
//   const r = Math.floor(a / 4);
//   a > 0 && a % 4 === 0 ? r - 1 : r;
//   return a;
// }
// const distance = Number(prompt("Enter distance in km"));
// alert(`${distanceCalculator(car.averageSpeed, distance)} hours`)


//Task 2

// const fraction1 = {
//   num: 2,
//   den: 5
// };

// const fraction2 = {
//   num: 1,
//   den: 3
// };

// function getGcd(a, b) {
//   a = Math.abs(a);
//   b = Math.abs(b);
//   while (b !== 0) {
//     const temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }

// function simplifyFraction(fraction) {
//   const gcd = getGcd(fraction.num, fraction.den);

//   let num = fraction.num / gcd;
//   let den = fraction.den / gcd;

//   if (den < 0) {
//     num = -num;
//     den = -den;
//   }

//   return { num, den };
// }

// function addFractions(f1, f2) {
//   if (f1.den === 0 || f2.den === 0) {
//     throw new Error("denuminator cant be 0");
//   }

//   const newNum = f1.num * f2.den + f2.num * f1.den;
//   const newDen = f1.den * f2.den;

//   return simplifyFraction({ num: newNum, den: newDen });
// }

// function minusFractions(f1, f2) {
//   if (f1.den === 0 || f2.den === 0) {
//     throw new Error("denuminator cant be 0");
//   }

//   const newNum = f1.num * f2.den - f2.num * f1.den;
//   const newDen = f1.den * f2.den;

//   return simplifyFraction({ num: newNum, den: newDen });
// }

// function multiplyFractions(f1, f2) {
//   if (f1.den === 0 || f2.den === 0) {
//     throw new Error("denuminator cant be 0");
//   }

//   const newNum = f1.num * f2.num;
//   const newDen = f1.den * f2.den;

//   return simplifyFraction({ num: newNum, den: newDen });
// }

// function divideFractions(f1, f2) {
//   if (f1.den === 0 || f2.den === 0) {
//     throw new Error("denuminator cant be 0");
//   }

//   const newNum = f1.num * f2.den;
//   const newDen = f1.den * f2.num;

//   return simplifyFraction({ num: newNum, den: newDen });
// }

// const addResult = addFractions(fraction1, fraction2);
// const minusResult = minusFractions(fraction1, fraction2);
// const mulpiplyResult = multiplyFractions(fraction1, fraction2);
// const divideResult = divideFractions(fraction1, fraction2);

// alert(`${fraction1.num}/${fraction1.den} + ${fraction2.num}/${fraction2.den} = ${addResult.num}/${addResult.den}`);
// alert(`${fraction1.num}/${fraction1.den} - ${fraction2.num}/${fraction2.den} = ${minusResult.num}/${minusResult.den}`);
// alert(`${fraction1.num}/${fraction1.den} * ${fraction2.num}/${fraction2.den} = ${mulpiplyResult.num}/${mulpiplyResult.den}`);
// alert(`${fraction1.num}/${fraction1.den} / ${fraction2.num}/${fraction2.den} = ${divideResult.num}/${divideResult.den}`);


//Task 3

// const time = {
//   hours: 10,
//   minutes: 20,
//   seconds: 30
// };

// function show(time){
//   alert(`${time.hours}:${time.minutes}:${time.seconds}`);
// }

// function addSeconds(time){
//   const s = Number(prompt("How many seconds to add?"));
//   time.seconds += s;
//   if(time.seconds >= 60){
//     const temp = Math.floor(time.seconds / 60);
//     time.seconds -= 60 * temp;
//     time.minutes += temp;
//   }
//   if(time.minutes >= 60){
//     const temp = Math.floor(time.minutes / 60);
//     time.minutes -= 60 * temp;
//     time.hours += temp;
//   }
//   show(time);
//   return(time);
// }

// function addMinutes(time){
//   const m = Number(prompt("How many minutes to add?"));
//   time.minutes += m;
//   if(time.minutes >= 60){
//     const temp = Math.floor(time.minutes / 60);
//     time.minutes -= 60 * temp;
//     time.hours += temp;
//   }
//   show(time);
//   return(time);
// }

// function addHours(time){
//   const h = Number(prompt("How many hours to add?"));
//   time.hours += h;
//   show(time);
//   return(time);
// }

// addHours(time);
// addMinutes(time);
// addSeconds(time);