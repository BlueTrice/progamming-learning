//belajar type data array

let array1 = [1,2,3,4,5,6,7,8,9];
let array2 = [[1,2,3],[4,5,6]];

//cara memangil aray
// array1.splice(3,1,"gajah","gabut");
// let hewan = array1.slice(3,5);
// console.log(array1);
// console.log(hewan);

//array 2 dimensi

// console.log(array2[0].length);

// for (let i = 0; i < array2.length; i++) {
//    for (let j = 0; j < array2[i].length; j++) {
//     console.log(array2[i][j]);
//     }
//     console.log("")
// }

// let arr = [[1,2,3],[4,5,6]];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]) //1 2 3 4 5 6
//   }
// }

/*
program mengitung biner
1.)buat variable untung menyimpan biner
2.) buat function untuk diisi dengan looping untuk mengecek setiap biner nya
3.) buat operasi aritmatika untuk menghitung biner tersebut
*/

const biner = "11110";

function binerCount(biner) {
  let decimal = 0;

  for (let i = 0; i < biner.length; i++) {
    const digit = parseInt(biner[i]);
    const power = biner.length - 1 - i;

    // Menghitung nilai desimal dari digit biner saat ini dan menambahkannya ke total desimal
    decimal += digit * Math.pow(2, power);
  }

  return decimal;
}

console.log(binerCount(biner));







