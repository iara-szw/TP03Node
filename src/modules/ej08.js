

function analizarTexto(texto){
let array=texto.split('');
let caracteres=texto.length;
let palabras=texto.split(" ").length;
let vocales=array.filter(letra => letra==="a"||letra==="e"||letra==="i"||letra==="o"||letra==="u").length;
let consonantes=array.filter(letra => letra!=="a"&&letra!=="e"&&letra!=="i"&&letra!=="o"&&letra!=="u"&&letra!==" ").length;
return { caracteres, palabras, vocales, consonantes };

}

console.log(analizarTexto("abc defg"));


