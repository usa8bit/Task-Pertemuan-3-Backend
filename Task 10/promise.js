const download = () => {
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

const main = () => {
    download()
        .then((res) => {
            console.log(res);
        })
        .catch((res) => {
            console.log(res);
        });
}

console.log(main());