const fs = require('fs');



let base = 3;
let data = '';

for (let i = 1; i <= 10; i++) {
    let resul = i * base;
    console.log(`${base}*${i} = ${resul}`);
    data += `${base}*${i} = ${resul}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base} ha sido creado!`);
});