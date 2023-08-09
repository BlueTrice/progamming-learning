// membuat variable name dan role
// membuat statement name dan role

let name = `Blue`;
let role = `knight`;

if (name == ``) {
    console.log(`Please insert your name!`);
}

console.log(name);

if (role == `knight`) {
    console.log(`halo Ksatria ${name},kamu dapat menyerang dengan senjatamu!`);
}    else if (role == `mage`) {
    console.log(`halo Penyihir ${name},ciptakan keajaiban yang membantu kemenanganmu! `);
} else if (role == `healer`) {
    console.log(`halo Tabib ${name},kamu akan membantu temanmu yang terluka!`);
} else if (role == ``) {
    console.log(`Pilih peranmu untuk memulai game!`);
} else {console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
}

console.log(role);
