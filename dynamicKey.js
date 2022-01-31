const newObj = {};
const dynamicKey = Math.random();
newObj[dynamicKey] = "This is dynamic key";

console.log("Dynamic key in newObj: ", newObj);
console.log("This is dynamic key: ", Object.keys(newObj)[0]);

//---------------------------------------------------------------------
const arr = [];

for (let i = 0; i < 10; i += 1) {
  arr[i] = `key${i + 1}`;
}

console.log("arr: ", arr);

// -----------------------------------------
jsObj = {};

for (let i = 1; i <= 10; i += 1) {
  jsObj[arr[i - 1]] = `value ${i}`;
}

for (let i = 1; i <= 10; i += 1) {
  jsObj[`key${i}`] = `value ${i}`;
}

console.log("jsObj: ", jsObj);

// -----------------------------------------
for (let i = 1; i <= 10; i += 1) {
  jsObj[`key${i}`] = `new value ${i}`;
}

Object.keys(jsObj).forEach(
  (item, index) => (jsObj[item] = `new value ${index + 1}`)
);

console.log("New jsObj: ", jsObj);

// ----------------------------------------
Object.keys(jsObj).forEach((item) => delete jsObj[item]);
jsObj = {};

console.log("Deleted items in jsObj: ", jsObj);

// --- Ассоциативный массив ---
const arr = new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
]);

for (let i = 1; i <= 10; i += 1) {
  arr.set(`key${i}`, `value ${i}`);
}

console.log(arr);
