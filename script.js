function executar() {
    var CorInicial = document.getElementById("ci").value;
    var CorFinal = document.getElementById("cf").value;
    var Tempo = parseInt(document.getElementById("tempo").value);

    carta(CorInicial, CorFinal, Tempo);
}
function carta(ci, cf, t){
    var carta = document.createElement("div");
    carta.setAttribute("class", "divC");
    carta.style.backgroundColor = ci;

    carta.addEventListener("click", function() {
    carta.style.backgroundColor = cf;
    setTimeout( function(){
        carta.style.backgroundColor = ci;
    }, t*1000);
})


    document.querySelector("body").appendChild(carta);

}