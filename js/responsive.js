$(document).ready(function(){
    if($(window).width() < 1300){
        $(".main-sidebar").addClass("collapsed-sidebar");
        $(".sidebar-title").hide();
        $(".main-container").addClass("collapsed-main");
        $(".sidebar-container nav ul .collapse-sidebar a ion-icon").addClass("rotate");
    }
    else{
        $(".main-sidebar").removeClass("collapsed-sidebar");
        $(".sidebar-title").show();
        $(".main-container").removeClass("collapsed-main");
        $(".sidebar-container nav ul .collapse-sidebar a ion-icon").removeClass("rotate");
    }
});

$(window).resize(function(){
    if($(window).width() < 1300){
        $(".main-sidebar").addClass("collapsed-sidebar");
        $(".sidebar-title").hide();
        $(".main-container").addClass("collapsed-main");
        $(".sidebar-container nav ul .collapse-sidebar a ion-icon").addClass("rotate");
    }
    else{
        $(".main-sidebar").removeClass("collapsed-sidebar");
        $(".sidebar-title").show();
        $(".main-container").removeClass("collapsed-main");
        $(".sidebar-container nav ul .collapse-sidebar a ion-icon").removeClass("rotate");
    }
});