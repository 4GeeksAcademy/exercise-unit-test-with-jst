const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

module.exports = { sum };


// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}




const fromDollarToYen = function (valueInDollar){
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;

}


const fromYenToPound = function (valueInYen ){
    let valueInPound = valueInYen * .87;
    return valueInPound;

}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

console.log(fromEuroToDollar(3.5)); // Deberías obtener 3.745
console.log(fromDollarToYen(3.5)); // Deberías obtener 547.75
console.log(fromYenToPound(3.5)); // Deberías obtener 3.045
