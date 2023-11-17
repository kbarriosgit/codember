let fs = require('fs');

let cursor = {};
fs.readFile('message_01.txt', 'utf-8', (err, data) => {
    if(err){
        console.log("Error", err);
    }
    const words = data.split(' ')

    words.forEach(element => {
        if(element in cursor){
            ++cursor[element]
        }else{
            cursor[element] = 1;
        }
    });
    agregarAResultado(cursor)
});

let resultado = ""

function agregarAResultado(cursor){
    Object.entries(cursor).forEach(animal => {
        const [key, value] = animal;
        resultado += key+value;
    });
    console.log(resultado);
}
