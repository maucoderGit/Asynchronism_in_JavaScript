// creamos una arrow function que ejecute nuestra promesa con 
// ECMAScript 6

const do_something_async = () => {
    return new Promise((resolve, reject) =>{
        
        // si la promesa se cumple, que recordemos, por defecto casí
        // todos los valores son true, hasta false.

        // usamos un operador terniario

        (true)

        // si la condición se cumple, debe resolver la promesa.
        // y hacer el resolve en 3 segundos
            ? setTimeout(() => resolve("Do something async"), 3000)
           
        // Sí no, reject y como buena práctica, creamos un error.
        // Para debuguear
            
            : reject(new Error("Test error"))
    })
}

// No estoy seguro, pero creo que aquí trabajamos con closures

const do_something = async () => {
    const something = await do_something_async()
    console.log(something)
}

console.log("Before")
do_something()
console.log("After")

const another_function = async () => {
    try {
        const something = await do_something_async()
        console.log(`${something} 2`)
    } catch (error) {
        console.error(error)
    }
}

console.log("Before 1")
another_function()
console.log("After 1")