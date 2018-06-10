$(function () {
    $("#portfolioNav").hide();
    $("#aboutNav").hide();
    $("#portfolioCard").hide();
    $("#aboutCard").hide();

    setTimeout(function(){
        $("#portfolioCard").show();
        $('#portfolioCard').addClass('animated fadeInUp');
    }, 100);
    setTimeout(function(){
        $("#aboutCard").show();
        $('#aboutCard').addClass('animated fadeInUp');
    }, 200);
    setTimeout(function(){
        $("body").css("overflow", "auto");
    }, 700);
 });