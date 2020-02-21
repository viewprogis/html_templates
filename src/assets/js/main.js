import $ from 'jquery';

let runOnce = false;

export default{

    updated(){
        
        if(!runOnce){
            setTimeout(() => {
                runOnce = true;
                let isHomepage = (this.$route.path == "/");
                
                /** Sidebar Open/Collapse **/
                $(document).on("click","#sidebar .toggle-sidebar", function(){
                    $("#sidebar").toggleClass("collapse");
                });
                if(isHomepage){
                    $("#sidebar .toggle-sidebar").attr("href","/legend");
                    $("#sidebar").addClass("collapse");
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

                /** TreeView Open/Collapse **/
                $(document).on("click","ul.tree-view li.has-child > .toggle", function(){
                    let $parent = $(this).closest("li");

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

