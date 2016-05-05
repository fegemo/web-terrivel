function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

if (document.getElementById('tipo_pedras_sortidas').checked) {
    var type = document.getElementById('tipo_pedras');
    var random = getRandomArbitrary(0, 4);
    
    if (random === 0) {
        type.value = "marroada";
    } else if (random === 1) {
        type.value = "ametista";
    } else if (random === 2) {
        type.value = "topazio";
    } else {
        type.value = "espinela";
    }
    
    console.log(type.value);
}