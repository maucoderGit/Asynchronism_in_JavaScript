const something_will_happen = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!')
        } else {
            reject ('Whooops!')
        }
    })
}

something_will_happen()
    .then(response => console.log(response)) 
    .catch(err => console.log(err));

const something_will_happen2 = () => {
    return new Promise((resolve, reject) => {
        if (true){
            setTimeout (() =>{
                resolve('True')
            }, 2000)
        } else {
            const error = new Error('Whoops!')
            reject(error)
        }
    })
}

something_will_happen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([something_will_happen(), something_will_happen2()])
    .then(response => {
        console.log(`Array of results ${response}`)
    })
    .catch(err => {
        console.error(err)
    })
