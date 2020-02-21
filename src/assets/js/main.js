import $ from 'jquery';

let runOnce = false;

export default{

    beforeUpdate(){
        
        if(!runOnce){
            setTimeout(() => {
                runOnce = true;

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
            
                /** Panel Open/Collapse **/
                $(document).on("click",".panel-heading", function(){
                    
                    let $parent = $(this).closest(".panel");

                    if($parent.hasClass("active")){
                        $parent.removeClass("active");
                    }else{
                        $parent.addClass("active");
                    }
                });
            
            },100);
        }
    }
}

