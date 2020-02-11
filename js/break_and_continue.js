do {
    var p = prompt('odd number betwen 1 and 50');
} while (p % 2 !== 1 || (p <= 1 && p >= 50));

for (i = 1; i <= 50; i++){

    if (i == p){
        console.log('Yikes! Skipping number ' + p);
    } else if (i % 2 === 1){
        console.log(i);
    };
}