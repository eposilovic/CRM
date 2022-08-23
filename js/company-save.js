$(".save-company").on("click", function(){

    var company_name = $("input[name=company_name]").val();
    var company_email = $("input[name=email]").val();

    if(($("input[name=company_name]").val().length >0) && $("input[name=email]").val().length >0){

    var new_li = $("<li><div><img src='img/company-logo.jpg'><span><p>" + company_name + "</p><p>" + company_email + "</p></span></div><div><button><ion-icon name='list'></ion-icon>View Network Profiles</button></div><span class='trash-network'><ion-icon name='trash-bin'></ion-icon></span></li>").hide();

    $(".networks-list li:last-child").after(new_li);
    new_li.fadeIn(600);

    
    $(".create-network-popup").fadeOut();
    
    $("#create-company-form input, #create-company-form textarea, #create-company-form select").val(""); 
    
    }
});
