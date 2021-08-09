`use strict`

class taiyaki{
    constructor(ingredients){
        this.ingredients = ingredients ;


    }
    inside(){
        console.log(`中身は${this.ingredients}です`);
    }

}

let snack = new taiyaki('あんこ');
let snack2 = new taiyaki('クリーム');
let snack3 = new taiyaki('チーズ');

snack.inside();
snack2.inside();
snack3.inside();
