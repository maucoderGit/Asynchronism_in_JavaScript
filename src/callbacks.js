function sum(first_number, second_number){
    return first_number + second_number;
};

function calc(first_number, second_number, callback){
    return callback(first_number, second_number);
};

console.log(calc(2,2, sum));

function date(callback){
    console.log(new Date);
    setTimeout(function (a,b) {
        let date = new Date;
        callback(date);
    }, 3000)
};

function printDate(dateNow){
    console.log(dateNow);
};

date(printDate);
