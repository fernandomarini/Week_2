import { Vector } from "./vector";



let arr1 = new Vector(10,50);
let arr2 = new Vector(10,100);


arr1.print();
arr2.print();

console.log(arr1.add(arr2));

console.log(arr1.subs(arr2));

console.log(arr1.mult(arr2));

console.log(arr1.multNumber(2));
