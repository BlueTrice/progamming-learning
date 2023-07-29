//Belajar membuat variabel

var a = 'a';
let b = 'b';
const c = 'c';

//variable dapat menampung tipe data string, integer/number, boolean, array, object

let nama = "Blue";  //string
let umur = 18;  //numb r
let apakahBenar = true;  //boolean
let uang = 2000000.0  //number with koma

//operator aritmatika

let angka1 = 10;
let angka2 = 20;

console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 / angka2);
console.log(angka1 * angka2);
console.log(angka1 % angka2);

// penambahan string

let firstName = 'Yoru';
let lastName = 'Aoikage';
let fullName = firstName + ' ' + lastName;

console.log(fullName);

// alur pembacaan code dari atas kebawah

let number = 200;
console.log(number);
number = 300;
console.log(number)

// 0 = false    1 = true

let point = false;
point2 = true;
console.log(point + 10);
console.log(point2 + 10);

//contoh error

const hewan = 'Jerapah';
console.log(hewan);
hewan = 'Singa';
console.log(hewan); //hanya terbaca jerapah karena menggunakan const, const tidak dapat diubah variablenya

//auto comment dapat di lakukan dengan shortcut ctrl + /