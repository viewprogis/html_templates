import $ from 'jquery';

$(document).ready(function(){
    setTimeout(() => {
        
        /** Sidebar Open/Collapse **/
        var doToggle = true;
        $(document).on("click","#sidebar .toggle-sidebar", function(){
            if(doToggle)
                $("#sidebar").toggleClass("collapse");
        });
        
        if($("#sidebar #nav a").hasClass("router-link-active")){
            doToggle = true;
            $("#sidebar").removeClass("collapse");
        }else{
            doToggle = false;
            $("#sidebar").addClass("collapse");
            $("#sidebar .toggle-sidebar").attr("href","/legend");
        }
    },100);
});