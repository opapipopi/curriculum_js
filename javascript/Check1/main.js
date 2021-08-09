
`use strict`
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
for(let i = 0 ; i < numbers.length ; i++){
    if(num[i] % 2=== 0){
        console.log(num[i] + 'は偶数です');
    }


}

    
}

isEven(numbers);



class car{
    constructor(gass, num){
        this.gass = gass ;
        this.num = num ;
    }
    getNumGas(){
        console.log(`ガソリンは${this.gass}です。ナンバーは${this.num}です。`);
    }

}

let MyCar = new car(10, 1232);
let YouCar = new car(9, 3232);

MyCar.getNumGas();
YouCar.getNumGas();