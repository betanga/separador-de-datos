const arreglo_consonantes = [];
const arreglo_vocales = [];
const arreglo_numero = [];
const arreglo_signos = [];

const vocales = ["a", "e", "i", "o", "u"];

const consonante = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

const elem = document.getElementById('input');

function handlebutton(){
    const letters = elem.value;

    if( !letters ){
        alert("Agrega una letra");
        return false;
    }

    const arreglo_letters = letters.split('');

    arreglo_letters.forEach( letter => {

        if( vocales.includes( letter ) ){
        arreglo_vocales.push( letter );
        } else if(consonante.includes( letter )){
        arreglo_consonantes.push( letter )
        }else if( letter >= 0 ){
        arreglo_numero.push( letter )
        }else{
        arreglo_signos.push( letter )
        }
});

    const v = arreglo_vocales.join(", ");
    const c = arreglo_consonantes.join(", ");
    const n = arreglo_numero.join(", ");
    const s = arreglo_signos.join(", ");

    document.getElementById("vocales").innerHTML = v;
    document.getElementById("consonantes").innerHTML = c;
    document.getElementById("numeros").innerHTML = n;
    document.getElementById("signos").innerHTML = s;

    document.getElementById('input').value = "";
    document.getElementById('input').focus();


}

elem.onkeyup = function(e){
    if(e.keyCode == 13){
        handlebutton();
    }
}