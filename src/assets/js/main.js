import $ from "jquery";

let runOnce = false;

export default {
  updated() {
    if (!runOnce) {
      setTimeout(() => {
        runOnce = true;
        let isHomepage = this.$route.path == "/";

        /** Map buttons **/
        $("body").addClass("sidebar-active");

        /** Sidebar Open/Collapse **/
        $(document).on("click", "#sidebar .toggle-sidebar", function() {
          $("#sidebar").toggleClass("collapse");
          $("body").toggleClass("sidebar-active");
        });
        if (isHomepage) {
          $("#sidebar .toggle-sidebar").attr("href", "/legend");
          $("#sidebar").addClass("collapse");
          $("body").removeClass("sidebar-active");
        }
        /** Panel Open/Collapse **/
        $(document).on("click", ".panel-heading", function() {
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
          function() {
            let $parent = $(this).closest("li");

            if ($parent.hasClass("active")) {
              $parent.removeClass("active");
            } else {
              $parent.addClass("active");
            }
          }
        );

        /** Pagination **/
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
          function() {
            paginationNumbersCheck(this);
            paginationSectionCheck(this);
            paginationButtonsCheck();
          }
        );

        $(document).on("click", "#pagination #prev", function() {
          if ($(this).hasClass("active")) {
            let $activeBtn = $("#pagination .pagination-numbers button.active");
            paginationNumbersCheck($activeBtn.prev());
            paginationSectionCheck($activeBtn.prev());
            paginationButtonsCheck();
          }
        });
        $(document).on("click", "#pagination #next", function() {
          if ($(this).hasClass("active")) {
            let $activeBtn = $("#pagination .pagination-numbers button.active");
            paginationNumbersCheck($activeBtn.next());
            paginationSectionCheck($activeBtn.next());
            paginationButtonsCheck();
          }
        });

        /** Base map **/
        $(document).on("click", "#base-map-collapse", function() {
          $("#base-map").addClass("collapse");
        });
        $(document).on("click", "#base-map-open", function() {
          $("#base-map").removeClass("collapse");
        });

        /** Toggle Circular menu **/
        $(document).on("click", "#toggle-spin", function() {
          $("#spin-3d").toggleClass("active");
        });
      }, 200);
    }
  }
};
