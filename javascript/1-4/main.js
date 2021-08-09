`use strict`
let i = 0 ;

while(i <= 100){
    if(i % 3===0 && i % 5 ===0){
        console.log('FizzBuzz!');
        i++;
        continue;
    }else if(i % 5===0){
        console.log('Buzz!');
        i++;
        continue ;
    }else if(i % 3===0){
        console.log('Fizz!');
        i++
        continue

    }
    console.log(i);
    i++

}