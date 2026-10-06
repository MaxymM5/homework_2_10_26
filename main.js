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



//Arrays
//Task 1

// const shoppingList = [
//   { name: "Bread", quantity: 1, isBought: false },
//   { name: "Milk", quantity: 2, isBought: true },
//   { name: "Apples", quantity: 5, isBought: false },
//   { name: "Coffe", quantity: 1, isBought: true }
// ];

// function displayShoppingList(list) {
//   const sortedList = [...list].sort((a, b) => Number(a.isBought) - Number(b.isBought));

//   console.log("=== shopping list ===");
//   sortedList.forEach(item => {
//     const status = item.isBought ? "Bought" : "Not bought";
//     console.log(`${status} : ${item.name} — ${item.quantity}`);
//   });
// }

// function addItem(list, name, quantity = 1) {
//   const existingItem = list.find(item => item.name.toLowerCase() === name.toLowerCase());

//   if (existingItem) {
//     existingItem.quantity += quantity;
//     console.log(`Quantity of "${existingItem.name}" is increased for ${quantity}. Sum: ${existingItem.quantity}`);
//   } else {
//     list.push({
//       name,
//       quantity,
//       isBought: false
//     });
//     console.log(`Product "${name}" is added to the list`);
//   }
// }

// function buyItem(list, name) {
//   const item = list.find(i => i.name.toLowerCase() === name.toLowerCase());

//   if (item) {
//     item.isBought = true;
//     console.log(`Product "${item.name}" is bought.`);
//   } else {
//     console.log(`Product "${name}" is not found in list`);
//   }
// }

// displayShoppingList(shoppingList);

// addItem(shoppingList, "Bread", 2);
// addItem(shoppingList, "Cheese", 1);

// buyItem(shoppingList, "Apple");

// displayShoppingList(shoppingList);


//Task 2

// const bill = [
//   { name: "Bread", quantity: 1, price: 40 },
//   { name: "Milk", quantity: 2, price: 70 },
//   { name: "Apples", quantity: 5, price: 20 },
//   { name: "Coffe", quantity: 1, price: 30 }
// ];

// function displayBill(list) {
//   console.log("=== bill ===");
//   list.forEach(item => {
//     const totalItemPrice = item.price * item.quantity;
//     console.log(`${item.name}: ${item.quantity} ${item.price} = ${totalItemPrice} грн`);
//   });
// }

// function sumPrice(list) {
//   return list.reduce((total, item) => total + (item.price * item.quantity), 0);
// }

// function getExpensive(list) {
//   if (list.length === 0) return null;

//   return list.reduce((maxItem, currentItem) => {
//     return currentItem.price > maxItem.price ? currentItem : maxItem;
//   });
// }

// function getAveragePrice(list) {
//   if (list.length === 0) return 0;

//   const totalSum = sumPrice(list);
//   const totalQuantity = list.reduce((total, item) => total + item.quantity, 0);

//   return Math.round(totalSum / totalQuantity);
// }

// displayBill(bill);

// console.log(sumPrice(bill));

// console.log(getExpensive(bill));

// console.log(getAveragePrice(bill));


// Task 3

// const styles = [
//   { name: "color", value: "#0080ff" },
//   { name: "font-size", value: "24px" },
//   { name: "text-align", value: "center" },
//   { name: "text-decoration", value: "underline" },
//   { name: "font-family", value: "sans-serif" }
// ];

// function renderStyledText(styleArray, text) {
//   const p = document.createElement("p");
//   p.textContent = text;

//   // Apply each style property
//   styleArray.forEach(style => {
//     p.style.setProperty(style.name, style.value);
//   });

//   document.body.appendChild(p);
// }

// renderStyledText(styles, "Hello, styled world!");


// Task 4

// const classrooms = [
//   { name: "101-A", seats: 15, department: "Computer Science" },
//   { name: "204-B", seats: 20, department: "Economics" },
//   { name: "105-A", seats: 12, department: "Computer Science" },
//   { name: "302-C", seats: 18, department: "Design" },
//   { name: "210-B", seats: 10, department: "Economics" }
// ];

// function printClassrooms(rooms) {
//   console.log("--- Classroom List ---");
//   rooms.forEach(r => {
//     console.log(`Room: ${r.name} | Seats: ${r.seats} | Department: ${r.department}`);
//   });
// }

// function filterByDepartment(rooms, deptName) {
//   return rooms.filter(r => r.department.toLowerCase() === deptName.toLowerCase());
// }

// function filterForGroup(rooms, group) {
//   return rooms.filter(r => 
//     r.department.toLowerCase() === group.department.toLowerCase() && 
//     r.seats >= group.studentsCount
//   );
// }

// function sortBySeats(rooms) {
//   return [...rooms].sort((a, b) => a.seats - b.seats);
// }

// function sortByName(rooms) {
//   return [...rooms].sort((a, b) => a.name.localeCompare(b.name));
// }
