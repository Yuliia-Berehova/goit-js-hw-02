const logItems = function (array) {
  let itemNumber = 1;
  for (let i = 0; i < array.length; i++) {
    console.log(`${itemNumber} - ${array[i]}`);
    itemNumber += 1;
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
