// Используя взаимодействие с динамическими ключами нужно на выходе получить объект output1, где будут динамически генерироваться ключи и им присваиваться значения свойств объекта из элементов массива array1.

const array1 = ["test1", "test2", "test3"];

const output1 = {};

for (let i = 0; i < array1.length; i++) {
  output1[i] = array1[i];
}

// Альтернатива с помощью методов массива:
// array1.map((elem, idx) => (output1[idx] = elem));

console.log("\noutput1: ", output1);

// Дан массив с двумя объектами внутри. В каждом объекте есть два поля: color & id. Ваша задача написать функцию, которая принимает этот массив, как аргумент и на выходе отдает объект, подобный output, то есть комбинируя объект по цветовой палитре. Как вы можете заметить у нас в массиве есть два цвета всего: “white” & “black” и соответственно мы имеем два вложенных объекта по цветовой палитре.

const array2 = [
  { color: "white", id: 2 },
  { color: "green", id: 85 },
  { color: "brown", id: 217 },
  { color: "white", id: 217 },
  { color: "black", id: 3 },
  { color: "green", id: 678 },
  { color: "black", id: 500 },
];

const output2 = {};

for (let i = 0; i < array2.length; i++) {
  array2[i].color === "white"
    ? (output2.white = { ...output2.white, [array2[i].id]: array2[i] })
    : array2[i].color === "green"
    ? (output2.green = { ...output2.green, [array2[i].id]: array2[i] })
    : array2[i].color === "brown"
    ? (output2.brown = { ...output2.brown, [array2[i].id]: array2[i] })
    : (output2.black = { ...output2.black, [array2[i].id]: array2[i] });
}

// Альтернатива с помощью методов массива:
array2.map((elem) => {
  elem.color === "white"
    ? (output2.white = { ...output2.white, [elem.id]: elem })
    : elem.color === "green"
    ? (output2.green = { ...output2.green, [elem.id]: elem })
    : elem.color === "brown"
    ? (output2.brown = { ...output2.brown, [elem.id]: elem })
    : (output2.black = { ...output2.black, [elem.id]: elem });
});

console.log("\noutput2: ", output2);
