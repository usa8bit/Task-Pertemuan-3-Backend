const fruits = require("./fruits.js");

const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

const store = (name) => {
    console.log("\nMethod Store")
    fruits.push(name);
    index();
};

const update = (position, name) => {
    console.log(`\nMethod Update: ${position} -> ${name}`)
    fruits[position] = name;
    index();
};

const destroy = (position) => {
    console.log(`\nMethod Destroy: ${position}`)
    delete fruits[position];
    index();
};

module.exports = { index, store, update, destroy };