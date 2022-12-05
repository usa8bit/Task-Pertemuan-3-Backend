console.log("Membuka Browser");

const download = () => {
    console.log("Downloading 1 Hour Remaining...")
    return new Promise((resolve, reject) => {
        const status = true;

        setTimeout(() => {
            if (status) {
                resolve("Download Success...");
            } else {
                reject("Download Failed...");
            }
        }, 5000);
    });
};


const main = async () => {
    console.log(await download());
}

main();

console.log("Nonton YouTube");