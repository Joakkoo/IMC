function funcionCalcular() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value/100;
    let resultado = peso/(altura*altura);
    document.getElementById("imc").value = resultado;
    if (resultado < 18.5){
        document.getElementById("estado").value = "Peso inferior al normal"
    } else if (resultado>18.5 && resultado<24.9) {
        document.getElementById("estado").value = "Peso Normal"
    } else if (resultado>24.9 && resultado<29.9) {
        document.getElementById("estado").value = "Peso superior al normal"
    } else if (resultado>29.9) {
        document.getElementById("estado").value = "Obesidad"
    }
}
