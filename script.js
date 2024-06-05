function calcular(){

    var fPeso = parseFloat(document.getElementById("peso").value)

    console.log(fPeso)
    var fAltura = parseFloat(document.getElementById("altura").value)
    var fimc = fPeso/(fAltura*fAltura)
    document.getElementById("imc").innerHTML = fimc.toFixed(2)
    if(fimc<18.5){
        document.getElementById("staus").innerHTML = "STATUS: BAIXO PESO"
    }else if(fimc<=24.9){
        document.getElementById("staus").innerHTML = "STATUS: PESO IDEAL"
    }else if(fimc<=29.9){
        document.getElementById("staus").innerHTML = "STATUS: SOBREPESO"
    }else if(fimc<=34.9){
        document.getElementById("staus").innerHTML = "STATUS: OBESIDADE 1"
    }else if(fimc<=39.9){
        document.getElementById("staus").innerHTML = "STATUS:  OBESIDADE 2"
    }else{
        document.getElementById("staus").innerHTML = "STATUS:  OBESIDADE MORBIDA"
    }
}