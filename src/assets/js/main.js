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
        var xs = window.matchMedia("(max-width: 700px)");


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
        });
      }, 200);
    }
  }
};
