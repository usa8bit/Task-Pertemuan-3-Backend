const persiapan = () => {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve("Mempersiapkan Bahan...");
        }, 3000);
    });
};

const rebusAir = () => {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve("Merebus Air...");
        }, 7000);
    });
};

const masak = () => {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve("Masak Mie...");
        }, 5000);
    });
};

const main = async () => {
    console.log(await persiapan());
    console.log(await rebusAir());
    console.log(await masak());
};

main();