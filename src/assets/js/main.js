import $ from "jquery";

let runOnce = false;

export default {
  watch:{
    $route(){
        runOnce = false;
    }
  },
  updated() {
    if (!runOnce) {
      setTimeout(() => {
        /** Breakpoints **/
        var xs = window.matchMedia("(max-width: 768px)");
        var md = window.matchMedia("(max-width: 1023px)");

        runOnce = true;
        let isHomepage = this.$route.path == "/";
        
        /** helper functions  **/
        function toggleSidebar(){
            $("body").toggleClass("sidebar-active");
        }
        function hideSidebar(){
            $("body").removeClass("sidebar-active");
        }
        function showSidebar(){
            $("body").addClass("sidebar-active");
        }
        function toggleToolbox(){
            $("body").toggleClass("toolbox-active");
        }
        function hideToolbox(){
            $("body").removeClass("toolbox-active");
        }
        function showToolbox(){
            $("body").addClass("toolbox-active");
        }
        function hideBaseMap(){
            $("body").removeClass("basemap-active");
        }
        function showBaseMap(){
            $("body").addClass("basemap-active");
        }

        /** Map buttons **/
        if(!isHomepage)
            showSidebar(); //Show Sidebar if homepage
        
        /** Sidebar Open/Collapse **/
        $(document).on("click", "#sidebar .toggle-sidebar, .tablet-menu-btn, .mobile-menu-btn", function(e) {// On click of sidebar arrow and mobile menu button
            e.stopImmediatePropagation();

            toggleSidebar();  //active/inactive sidebar
        });
        if (isHomepage) {
            //This is just for homepage, since this is a static site. On homepage nothing shows in sidebar that's why i redirected user to legend page here. You can remove it after integrating backend
          $("#sidebar .toggle-sidebar, .tablet-menu-btn, .mobile-menu-btn").attr("href", "/legend");
          hideSidebar();
        }

        /** Toolbox Open/Collapse **/
        $(document).on("click", ".mobile-toolbox-btn", function(e) {
            e.stopImmediatePropagation();

            toggleToolbox();
            hideSidebar();
        });
        $(document).on("click", "#nav .nav-links a", function(e) {
            e.stopImmediatePropagation();

            showSidebar();
            hideToolbox();
        });
        $(document).on("click", ".mobile-toolbox-active", function(e) {
            e.stopImmediatePropagation();
            
            hideSidebar();
            showToolbox();
        });

        /** Panel Open/Collapse **/
        $(document).on("click", ".panel-heading", function(e) {
          e.stopImmediatePropagation();
          let $parent = $(this).closest(".panel");
            
          if ($parent.hasClass("active")) {
            $parent.removeClass("active");
          } else {
            $parent.addClass("active");
          }
        });

        /** TreeView Open/Collapse **/
        $(document).on(
          "click",
          "ul.tree-view li.has-child > .toggle",
          function(e) {
            e.stopImmediatePropagation();
            let $parent = $(this).closest("li");

            if ($parent.hasClass("active")) {
              $parent.removeClass("active");
            } else {
              $parent.addClass("active");
            }
          }
        );

        /** Pagination for Video dialog **/
        function paginationNumbersCheck(ActiveBtn) {
          $("#pagination .pagination-numbers button").removeClass("active");
          $(ActiveBtn).addClass("active");

          let $section = $("#section-" + $(ActiveBtn).text());
          $(".help-video").removeClass("active");
          $section.addClass("active");
        }
        function paginationSectionCheck(ActiveSection) {
          let $section = $("#section-" + $(ActiveSection).text());
          $(".help-video").removeClass("active");
          $section.addClass("active");
        }
        function paginationButtonsCheck() {
          let $activeBtn = $("#pagination .pagination-numbers button.active");
          let IsPrev = $activeBtn.prevAll().length > 0 ? true : false;
          let IsNext = $activeBtn.nextAll().length > 0 ? true : false;
          let $prevBtn = $("#pagination #prev");
          let $nextBtn = $("#pagination #next");

          if (IsPrev && !IsNext) {
            $prevBtn.addClass("active");
            $nextBtn.removeClass("active");
          } else if (IsNext && !IsPrev) {
            $prevBtn.removeClass("active");
            $nextBtn.addClass("active");
          } else {
            $prevBtn.removeClass("active");
            $nextBtn.removeClass("active");

            $prevBtn.addClass("active");
            $nextBtn.addClass("active");
          }
        }

        $(document).on(
          "click",
          "#pagination .pagination-numbers button",
          function(e) {
            e.stopImmediatePropagation();
            paginationNumbersCheck(this);
            paginationSectionCheck(this);
            paginationButtonsCheck();
          }
        );

        $(document).on("click", "#pagination #prev", function(e) {
            e.stopImmediatePropagation();
          if ($(this).hasClass("active")) {
            let $activeBtn = $("#pagination .pagination-numbers button.active");
            paginationNumbersCheck($activeBtn.prev());
            paginationSectionCheck($activeBtn.prev());
            paginationButtonsCheck();
          }
        });
        $(document).on("click", "#pagination #next", function(e) {
            e.stopImmediatePropagation();
          if ($(this).hasClass("active")) {
            let $activeBtn = $("#pagination .pagination-numbers button.active");
            paginationNumbersCheck($activeBtn.next());
            paginationSectionCheck($activeBtn.next());
            paginationButtonsCheck();
          }
        });

        /** Base map Active/Inactive **/
        $(document).on("click", ".base-map-collapse", function(e) {
          e.stopImmediatePropagation();
          
          hideBaseMap();
        });
        $(document).on("click", "#base-map-open", function(e) {
          e.stopImmediatePropagation();
          
          if(xs.matches){
            hideSidebar();
            hideToolbox();
          }
          showBaseMap();
        });

        /** Toggle Circular menu **/
        $(document).on("click", ".toggle-spin", function(e) {
          e.stopImmediatePropagation();
          $("#spin-3d").toggleClass("active");
          if(md.matches){
            $("body").removeClass("sidebar-active").removeClass("toolbox-active");
          }
        });
        
        /** Sidebar Scroll functions **/
        let numberofLinksShowing = 8;
        let allMenusSelector = "#nav .nav-links > a:not(.search-link):not(.settings-link)";
        function showMenuItems(start, end){
          $(allMenusSelector).removeClass("show-links");
          $(allMenusSelector).slice(start, end).addClass("show-links");
        }
        function checkForActiveClass(start, end){
          return $(allMenusSelector).slice(start, end).filter(".router-link-active").length > 0 ? true : false;
        }
        function showNextBtn(){
          $("#show-next-links").show();
        }
        function hideNextBtn(){
          $("#show-next-links").hide();
        }
        function showPrevBtn(){
          $("#show-prev-links").show();
        }
        function hidePrevBtn(){
          $("#show-prev-links").hide();
        }
        function triggerMenuScroll(items){
          numberofLinksShowing = items;
          
          if(checkForActiveClass(numberofLinksShowing, $(allMenusSelector).length)){ //Keep the next links opened if it has active class
            showMenuItems(numberofLinksShowing, $(allMenusSelector).length);

            hideNextBtn();
            showPrevBtn();
          }else{
            showMenuItems(0, numberofLinksShowing);

            if($(allMenusSelector).length != $(allMenusSelector).filter(".show-links").length){ //If all menu items are showing
              showNextBtn();
              hidePrevBtn();
            }
          }
        }
        
        $(document).on("click", "#show-next-links", function(e) {
          e.stopImmediatePropagation();
          
          showMenuItems(numberofLinksShowing, $(allMenusSelector).length);
          hideNextBtn();
          showPrevBtn();
        });
        $(document).on("click", "#show-prev-links", function(e) {
          e.stopImmediatePropagation();
          
          showMenuItems(0, numberofLinksShowing);
          showNextBtn();
          hidePrevBtn();
        });

        /** Triggering Menu scroll on load and resize **/
        function triggerMenuScrollAutomatic(){

          var wHeight = $(window).height();
          var getUnits = $(window).height().toString().length;
          
          if(window.matchMedia("(min-height: "+ wHeight +"px)").matches){
            
            if(getUnits > 3){//window height is in thousands

              if(wHeight > 1264)
                triggerMenuScroll(parseInt(wHeight.toString().substring(0, 2)) + 2);
              else
              triggerMenuScroll(parseInt(wHeight.toString().substring(0, 2)) + 1);

            }else if(getUnits > 2){//window height is in hundreds
              triggerMenuScroll(parseInt(wHeight.toString().substring(0, 1)));
            }
          }else{
            triggerMenuScroll(6);
          }

        }
        triggerMenuScrollAutomatic();
        
        $(window).on('resize orientationchange', function(){
          triggerMenuScrollAutomatic();
        });

        /** Resize SVG on mobile, tablet **/
        if(xs.matches){
          $(".spin-btns svg").attr("viewBox", "-350 -300 1060 1060");
        }
        
      }, 200);
    }
  }
};