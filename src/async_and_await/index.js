const do_something_async = () => {
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve("Do something async"), 3000)
            : reject(new Error("Test error"))
    })
}

const do_something = async () => {
    const something = await do_something_async()
    console.log(something)
}

console.log("Before")
do_something()
console.log("After")