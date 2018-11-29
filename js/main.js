$(function () {

 });

 function hexHover(hexId, hexPosition) {
    var hex = document.getElementById(hexId);

    if(!hex.classList.contains("activeHex_" + hexPosition)) {
        setTimeout(function() {
            hex.classList.add("activeHex_" + hexPosition);
        }, 100);
        setTimeout(function() {
            hex.classList.remove("activeHex_" + hexPosition);
        }, 1000);
    }
}