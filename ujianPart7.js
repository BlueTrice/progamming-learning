// Soal 1

function bandingkanAngka(angka1,angka2){
    if (angka2 > angka1) {
        return true;
    } else if (angka1 === angka2) {
        return -1;
    } else return false;
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

// soal 2

function balikKata(kata) {
    let result = '';
    for (let i = kata.length - 1; i >= 0; i--) {
        result += kata[i];
    }
    return result; 
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

// soal 3
/* 
1. buat function dan parameter menit
2. buat variable untuk menampung menit dan jam
3. buat variable sisa bagi dari 1 jam(60 menit) untuk dijadikan menit
4. buat statetment if else apabila menit/sisa baginya kurang dari sepuluh ditambahkan 0 di depan
5. return/console hasilnya di dalam statement if else
*/

function konversiMenit(menit){
    let jam = Math.floor(menit / 60);
    let sisa = menit % 60;

    if (sisa < 10) {
        return `${jam}:0${sisa}`;
    } else {
        return `${jam}:${sisa}`;
    }
}
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
  
// soal 4

function xo(str) {
    let x = 0;
    let o = 0;
     for (i = 0; i < str.length; i++) {
        if (str[i] === 'x') {x += 1
        } else {o += 1}
    } if (x === o) {
        return true;
    } else {
        return false;
    } 
}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true