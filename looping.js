//while ()
//for ()

// let i = 1;

// while (i < 5) {
//     console.log(i);
//     i++
// }

// for (i = 1; i >= 0; i--) {
//     console.log(i);
// }

// let name = 'bryan';
// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }

// let name = 'agus';
// let result = '';
// for (let i = name.length - 1; i >= 0; i--) {
//     result += name[i];
// }
// console.log(result);

// for (let i = 0; i <= 5; i++) {
//     for (let j = 0; j <= 6; j++) {
//         console.log(j);
//     }
//     console.log(' ');
// }
// console.log('selesai');

let jmlAngkot = 10;
let angkotBeroperasi = 7;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik!');
noAngkot++
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot no. ' + noAngkot + ' tidak beroperasi!.' );
}