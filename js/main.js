$(function () {
    $("#portfolioNav").hide();
    $("#aboutNav").hide();

    // setTimeout(function(){
    //     $("#portfolioCard").show();
    //     $('#portfolioCard').addClass('animated fadeInUp');
    // }, 100);
    // setTimeout(function(){
    //     $("#aboutCard").show();
    //     $('#aboutCard').addClass('animated fadeInUp');
    // }, 200);
    // setTimeout(function(){
    //     $("body").css("overflow", "auto");
    // }, 700);
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