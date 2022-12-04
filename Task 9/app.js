const {index, store, update, destroy} = require("./fruitControllers.js");

const main = () => {
    console.log('Method Index');
    index();
    store("Coconut");
    update(2, "Banana");
    destroy(3);
};

main();