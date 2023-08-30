/*
membuat function data diri yang diambil dari array

1. buat variable untuk menyimpan array
2. buat function untuk mengecek array
3. buat nested loop di dalam function untuk mengecek array double
4. buat statement if else untuk menambahkan keterangan pada data
5. buat variable tanggal untuk menggabungkan data ttl di dalam statement 
*/

let input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];

function dataHandling(input) {
    let a = "";
    for (i = 0; i < input.length; i++) {
        for (j = 0; j <= input.length; j++) {
            let tanggal = input[i][3];
            if (j === 0) {
                console.log("Nomor id = " + input[i][j]);
            } else if (j === 1) {
                console.log("Nama Lengkap = " + input[i][j]);
            } else if (j === 2) {
                console.log("TTL = " + input[i][j]+", "+ tanggal);
            } else if (j === 4) {
                console.log("Hobi = " + input[i][j]); 
            }
        } 
        console.log(a);
    }
}

console.log(dataHandling(input));

/*
Membuat case untuk mengubah string menjadi array dan mengubahnya dengan case
1.) Perbaiki array sesuai dengan perintah dengan method splice
2.) pisahkan data tanggal pada array dengan method split dan ubah dengan switch case
4.) Tampilkan tanggal yang telah menggunakan methode split
5.) Gunakan methode join untuk memberi batasan (-)
6.) Tampilkan nama yang telah di potong hanya untuk 15 angka dengan slice
*/


let input2 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input2) {
    input2.splice(1,4, " Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")

    let sliced = input2[3].split("/");
    let sliced2 = input2[3].split("/");
    
   switch(sliced[1]) {
    case "05":
        sliced[1] = "Mei";
        break;
   }
   let tgl = [sliced2[2], sliced2[0], sliced2[1]];

   console.log(input2);
   console.log(sliced[1]);
   console.log(tgl);
   console.log(sliced2.join('-'));
   console.log(input2[1].slice(0,15));
}

dataHandling2(input2);