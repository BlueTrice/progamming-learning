// Quiz 1

let i = 0;

console.log('LOOPING PERTAMA WHILE: ');
while (i <= 5)  {
    console.log(i);
    i++
}

console.log('LOOPING KEDUA WHILE: ');
i = 5;
while (i >= 0) {
    console.log(i);
    i--
}

// Quiz 2

console.log('LOOPING PERTAMA FOR: ');
for (i = 0; i <= 5; i++) {
    console.log(i);
}

console.log('LOOPING KEDUA FOR: ')
for (i = 5; i >= 0; i--) {
    console.log(i);
}

//Quiz 3

for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log( `${i} adalah genap`);
    } else {
        console.log( `${i} adalah ganjil`);
    }
}

//Quiz 4

for (i = 1; i <= 100; i += 2) {
        if (i % 3 === 0) {
            console.log(`${i} 3 kelipatan 3`);
        } else {
            console.log(i);
        }
}

for (i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
        console.log(`${i} 3 kelipatan 3`);
    } else {
        console.log(i);
    }
}

for (i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) {
        console.log(`${i} 3 kelipatan 3`);
    } else {
        console.log(i);
    }
}

//Quiz 5

let n = 5;
let result = '';

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result);

let nest = 10;
let result2 = '';

for (let i = 1; i <= nest; i++) {
    for (let j = 1; j <= i; j++) {
        result2 += '%';
    }
    result2 += '\n';
}
console.log(result2);