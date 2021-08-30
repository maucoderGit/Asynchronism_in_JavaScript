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