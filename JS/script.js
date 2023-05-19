let num='';
let message='';

for(let num=1; num<=100; num++){
    console.log(num)
    if(num % 3 === 0){
        message= 'Fizz';
        console.log(message)
    }else if(num % 5 === 0) {
        message= 'Buzz';
        console.log(message)
    }if((num % 3 === 0) && (num % 5 ===0)){
        message= 'FizzBuzz';
        console.log(message)
    }
}

