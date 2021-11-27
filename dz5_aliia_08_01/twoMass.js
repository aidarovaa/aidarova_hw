const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let a = array1.length
let b = array2.length

let twoMass = (a,b) =>{
    if (a < b){
        console.log("Первый массив меньше второго")
}
    else  if (a > b) {
        console.log("Первый массив больше второго")
    }
    else {
        console.log("Массивы равны ")
    }
}
twoMass(a,b);