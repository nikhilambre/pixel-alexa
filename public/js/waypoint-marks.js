

$(document).ready(function() {


    $('.team-box').velocity({ opacity: 0 });
    $('.box-cover').velocity({ opacity: 0 });
    $('.effect-marley').velocity({ opacity: 0 });
    $('.tab-box > li').velocity({ opacity: 0 });
    $('.window-laptop-img').velocity({ opacity: 0 });
    $('.ceo-image').velocity({ opacity: 0 });
    $('.client-logo').velocity({ opacity: 0 });
    $('.about-tagline h2').velocity({ opacity: 0 });
    $('.form-contact .input-group').velocity({ opacity: 0 });
    $('.addr-box').velocity({ opacity: 0 });
    $('.about-section3 img').velocity({ opacity: 0 });
    $('.about-section3 h2').velocity({ opacity: 0 });
    $('.section-tabs h2').velocity({ opacity: 0 });
    $('.section-services h2').velocity({ opacity: 0 });
    $('.section-team h2').velocity({ opacity: 0 });
    $('.section-product h2').velocity({ opacity: 0 });
    $('.section-portfolio h2').velocity({ opacity: 0 });
    $('.section-testimonial h2').velocity({ opacity: 0 });
    $('.section-clients h2').velocity({ opacity: 0 });
    $('.section-contact h2').velocity({ opacity: 0 });
    $('.panel-collapse .up-in').velocity({ opacity: 0 });
    $('.header-right .li-on ').velocity({ opacity: 0 });
    $('.header-left .logo-on').velocity({ opacity: 0 });
    $('.header-text .up-on').velocity({ opacity: 0 });


    var a1 = 0;
    var a2 = 0;
    var a3 = 0;
    var a4 = 0;
    var a5 = 0;
    var a6 = 0;
    var a7 = 0;
    var a8 = 0;
    var a9 = 0;
    var a10 = 0;
    var a11 = 0;
    var a12 = 0;
    var a13 = 0;
    var a14 = 0;
    var a15 = 0;
    var a16 = 0;
    var a17 = 0;
    var a18 = 0;
    var a19 = 0;
    var a20 = 0;
    var a21 = 0;
    var a22 = 0;
    var a23 = 0;
    var a24 = 0;
    var a25 = 0;




    $('.two-box').waypoint(function(){
        if(a1 == 0){
            $('.box-cover').velocity("transition.expandIn", { stagger: 100 });
            a1++;
        }
    },{offset:'80%'});

    $('.team').waypoint(function(){
        if(a2 == 0){
            $('.team-box').velocity("transition.bounceUpIn", { stagger: 100 });
            a2++;
        }
    },{offset:'80%'});    


    $('.grid').waypoint(function(){
        if(a3 == 0){
            $('.effect-marley').velocity("transition.expandIn", { stagger: 300 });
            a3++;
        }
    },{offset:'80%'});


    $('.tabs').waypoint(function(){
        if(a4 == 0){
            $('.tab-box > li').velocity("transition.bounceUpIn", { stagger: 200 });
            a4++;
        }
    },{offset:'80%'});

    $('.window-laptop-img').waypoint(function(){
        if(a5 == 0){
            $('.window-laptop-img').velocity("transition.expandIn", { stagger: 200 });
            a5++;
        }
    },{offset:'80%'});

    $('.ceo').waypoint(function(){
        if(a6 == 0){
            $('.ceo-image').velocity("transition.bounceIn", { stagger: 200 });
            a6++;
        }
    },{offset:'80%'});


    $('.clients-list').waypoint(function(){
        if(a7 == 0){
            $('.client-logo').velocity("transition.whirlIn", { stagger: 100 });
            a7++;
        }
    },{offset:'80%'});


    $('.about-tagline').waypoint(function(){
    if(a8 == 0){
        $('.about-tagline h2').velocity("transition.flipBounceYIn");
            a8++;
        }
    },{offset:'120%'});

    $('.about-section3').waypoint(function(){
    if(a9 == 0){
        $('.about-section3 img').velocity("transition.slideUpBigIn");
            a9++;
        }
    },{offset:'100%'});

    $('.form-contact').waypoint(function(){
    if(a10 == 0){
        $('.form-contact .input-group').velocity("transition.shrinkIn", { stagger: 150 });
            a10++;
        }
    },{offset:'70%'});

    $('.contact-addr').waypoint(function(){
        if(a11 == 0){
            $('.addr-box').velocity("transition.bounceUpIn", { stagger: 150 });
            a11++;
        }
    },{offset:'80%'});


    $('.about-section3').waypoint(function(){
        if(a12 == 0){
            $('.about-section3 h2').velocity("transition.flipBounceXIn");
            a12++;
        }
    },{offset:'120%'});

    $('.section-tabs').waypoint(function(){
        if(a13 == 0){
            $('.section-tabs h2').velocity("transition.flipBounceXIn");
            a13++;
        }
    },{offset:'70%'});

    $('.section-services').waypoint(function(){
        if(a14 == 0){
            $('.section-services h2').velocity("transition.flipBounceXIn");
            a14++;
        }
    },{offset:'70%'});

    $('.section-team').waypoint(function(){
        if(a15 == 0){
            $('.section-team h2').velocity("transition.flipBounceXIn");
            a15++;
        }
    },{offset:'70%'});

    $('.section-product').waypoint(function(){
        if(a16 == 0){
            $('.section-product h2').velocity("transition.flipBounceXIn");
            a16++;
        }
    },{offset:'70%'});

    $('.section-portfolio').waypoint(function(){
        if(a17 == 0){
            $('.section-portfolio h2').velocity("transition.flipBounceXIn");
            a17++;
        }
    },{offset:'70%'});

    $('.section-testimonial').waypoint(function(){
        if(a18 == 0){
            $('.section-testimonial h2').velocity("transition.flipBounceXIn");
            a18++;
        }
    },{offset:'70%'});

    $('.section-clients').waypoint(function(){
        if(a19 == 0){
            $('.section-clients h2').velocity("transition.flipBounceXIn");
            a19++;
        }
    },{offset:'70%'});

    $('.section-contact').waypoint(function(){
        if(a20 == 0){
            $('.section-contact h2').velocity("transition.flipBounceXIn");
            a20++;
        }
    },{offset:'70%'});

    $('.panel-collapse .up-in').waypoint(function(){
        if(a22 == 0){
            $('.panel-collapse .up-in').velocity("transition.bounceIn", { stagger: 150 });
            a22++;
        }
    },{offset:'60%'});

    $('.header').waypoint(function(){
        if(a23 == 0){
            $('.header-right .li-on').velocity("transition.bounceDownIn", { stagger: 150 });
            a23++;
        }
    },{offset:'70%'});    

    $('.header').waypoint(function(){
        if(a24 == 0){
            $('.header-left .logo-on').velocity("transition.bounceIn");
            a24++;
        }
    },{offset:'70%'});   

    $('.header').waypoint(function(){
        if(a25 == 0){
            $('.header-text .up-on').velocity("transition.bounceUpIn", { stagger: 50 });
            a25++;
        }
    },{offset:'70%'});       



});