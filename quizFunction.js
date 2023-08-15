// soal 1

function shoutOut() {
    console.log('Halo Function!');
    return;
}

console.log(shoutOut());

// soal 2

let num1 = 1;
let num2 = 2;

let hasilPerkalian = function calculateMultiply(num1, num2) {
    return num1 * num2;
}
console.log(hasilPerkalian(num1, num2));

// soal 3

let name = "Agus";
let age = 30;
let addres = "Jln. Malioboro, Yogyakarta";
let hobby = "gaming";

let fullSentence = function processSentence(name,age,addres,hobby) {
    console.log(`Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${addres}, saya punya hobby yaitu ${hobby} `);
    return;
}

console.log(fullSentence(name,age,addres,hobby));