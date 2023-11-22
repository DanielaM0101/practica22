'use strict'

let vehicle = {
    make: 'Toyota',
    model: 'Camry',
    color: 'White',
    licensePlate: 'ABC-0123',
    year: 2009,
    isEnable: false,

}

function validarTaxi(taxi) {
    let antiguedad = new Date().getFullYear() - taxi.year;
    if (antiguedad < 10) {
        return true;
    } else {
        return false;
    }
}

let resultado = validarTaxi(vehicle);

alert(resultado);
