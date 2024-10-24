	// Menu sidebar panel v1
	$('.open_close_nav_panel').on("click", function () {
		$('.nav_panel').toggleClass('show');
		$('.layer').toggleClass('layer-is-visible');
	});

	$(".sidebar-navigation nav li a").on('click', function(){		
		var parentLevel = $(this).parents('ul').length -1;
		var currentMenu = $(this).closest('ul');
		var currentListItem = $(this).parent('li');
		var parentMenu = $('.level-' + parentLevel);
		var subMenu = $(this).next('ul');
		if(currentListItem.hasClass('back')) {
			// back button hit	
			currentMenu.removeClass('active');
			parentMenu.removeClass('hidden');
		} else if (currentListItem.children('ul').length > 0) {
			// menu item has children - expand the menu
			subMenu.toggleClass('active');
			currentMenu.addClass('hidden');
		}
	});