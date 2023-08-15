
const stock = new Promise((resolve, reject) => {

    setTimeout(() => {

        if (true) {
            resolve("stock - pass")
        } else {
            reject("stock - fail");
        }


    }, 3000);

});

(async () => {

    const re = await stock
    console.log(re, "first")

})()



class customPromise {

    constructor(executor) {

        try {

            executor(this.#onResolve, this.#onReject)

        } catch (err) {
            console.warn("error found", err);
        }

    }

    #onResolve(value) {

        console.log("resolved ", value);

    }

    #onReject(value) {
        console.log("rejected ", value);
    }

}


const pro = new customPromise((resolve, reject) => {
    setTimeout(() => {
        if (false) {
            resolve("pass")
        } else {
            reject("fail");
        }

    }, 3000)
});

(async () => {
    const re = await (async () => setTimeout(() => {
        console.log("rest");
    }, 2000)
    )()
    console.log("res second");
})()