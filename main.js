function insert(numer) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + numer;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    
    document.getElementById('resultado').innerHTML = resultado ? eval(resultado) : "Insira números";
}