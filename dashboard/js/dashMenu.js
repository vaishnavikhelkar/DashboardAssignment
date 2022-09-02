// Define variables
    var sidebarCollapse = $("#sidebarCollapse");
    var sidebarToggle = $("#sidebarToggle");
    var sidebarContent = $("#sidebar");
    var sidebarContainer = $("#sidebar-container");
    var mainContainer = $("#main-container");
    var mql = window.matchMedia("(max-width: 768px)");

    // init screen
    responsive(mql);
    // Add media listener
    mql.addEventListener("change", responsive);

    // sidebarCollapse event listener
    sidebarCollapse.on("click", () => {
      sidebarContent.toggleClass("expanded");
      sidebarCollapse.toggleClass("rotated-icon");
    });

    // sidebarToggle event listener
    sidebarToggle.on("click", () => {
      var sidebarContainerMargin = parseInt(sidebarContainer.css("marginLeft").replace('px', ''));
      (sidebarContainerMargin == 0) ? closeSidebar() : openSidebar();
    });

    // Opens sidebar
    function openSidebar() {
      sidebarContainer.css('margin-left', 0);
      mainContainer.css('left', '48px');
      sidebarToggle.addClass('open');
    }

    // Closes sidebar
    function closeSidebar() {
      sidebarContainer.css('margin-left', - sidebarContainer.width());
      mainContainer.css('left', 0);
      sidebarToggle.removeClass('open');
    }

    // Sets correct styling based on screen width
    function responsive(mql) {
      if (mql.matches) { // Small screen
        addInlineStyling();
        closeSidebar();
      } else { // Large screen
        removeInlineStyling();
        openSidebar();
      }
    }

    // Adds styling for main container
    function addInlineStyling() {
      mainContainer.css('position', 'absolute');
      mainContainer.css('bottom', 0);
      mainContainer.css('right', 0);
      mainContainer.css('top', '48px');
      if (sidebarContainer.css('margin-left') == '0px') {
        mainContainer.css('left', '48px');
      }
      else {
        mainContainer.css('left', '0px');
      }

    }

    // Removes styling for main
    function removeInlineStyling() {
      mainContainer.removeAttr("style");
      sidebarContainer.removeAttr("style");
    }
