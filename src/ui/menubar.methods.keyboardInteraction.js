export default {
	
	methods: {		
		keydownDelegationCallback(event) {
			const item = this.getItemByUid(this.currentCursorItemUid);				
			const hasSubmenu = (item.submenu.length > 0)			
			const isTopLevel = (this.menu.indexOf(item.item) > -1);
			
			this.switchInputMode("keyboard");

			
			if(!isTopLevel) {
				this.keydownCallback(event, item, this.indexActiveItemInSubmenu, this.indexActiveSubmenu, hasSubmenu);
			}
			else {
				this.topItemKeydownCallback(event, item);
			}			
		},
		
		keydownCallback(event, item, indexActiveItemInSubmenu, indexActiveSubmenu, hasSubmenu) {			
			switch(event.key) {
				case "ArrowDown":
				case "ArrowUp":
					this.goVerticalMenu(event.key, item, indexActiveItemInSubmenu);
				break;
				
				case "ArrowRight":
					this.goRight(item, indexActiveSubmenu, hasSubmenu);
				break;
				
				case "ArrowLeft":
					this.goLeft(item);
				break;
				
				case "Enter":
					this.dispatchItemEvent(event, item.item);
					this.deactivateMenu();				
				break;
				
				default:
					return;
				
			}
			
			event.preventDefault();
		},
		
		topItemKeydownCallback(event, item) {
			const key = event.key;
			
			if(!key.startsWith("Arrow")) {
				return;
			}
			
			event.preventDefault();
			
			if(key === "ArrowDown" || key === "ArrowUp") {
				this.goVerticalTopLevel(key, item);
			}			
			
			else if(key === "ArrowRight") {
				this.goRightTopLevel();
			}
			
			else if(key === "ArrowLeft") {
				this.goLeftTopLevel();
			}
		},
		
		//
		// Common top and menu level
		//		
		setKeyboardCursor(uid) {	
			this.setCursor(uid);

			this.indexActiveItemInSubmenu = this.getIndexOfItemInMenuByUid(uid);
			this.indexActiveSubmenu = this.getSubmenuIndexByMemberUid(uid);
		},	
		
		getUidThatIsNotSeparator(submenu, startingIndex, direction) {			
			let itemWrapper = submenu[startingIndex];
			let candidateIndex = startingIndex;
			let i=0, ii=submenu.length;
			
			while(itemWrapper.item.type === "separator" && i<ii) {
				const {item, index} = this.getElementAtNextIndex(submenu, candidateIndex, direction);
				itemWrapper = item;
				candidateIndex = index;
				i++;
			}
			return (i<ii) ? itemWrapper.uid : null;
		},

		getActiveSubmenu() {
			return this.activeSubmenus[this.activeSubmenus.length - 1];
		},
		
		getElementAtNextIndex(array, startingIndex, direction) {
			let nextIndex = startingIndex + direction;
			
			if(nextIndex < 0) {
				nextIndex = array.length - 1;
			}
			
			if(array[nextIndex] === undefined) {
				nextIndex = 0;
			}
			
			return {item: array[nextIndex], index: nextIndex};
		},
		
		// Top level with submenu opened
		// Top level without submenu opened
		// Menu level with ArrowLeft and 1 submenu opened
		// Menu level with ArrowRight and item has no submenu / has already opened submenu
		async goHorizontalTopLevel(deltaIndex) {
			const isAnySubmenuOpen = (this.activeSubmenusIds.length > 0);
			const rootUid = (isAnySubmenuOpen) ? this.activeSubmenusIds[0] : this.currentCursorItemUid;
			const item = this.getItemByUid(rootUid);	
			const nextItem = this.getElementAtNextIndex(this.rootMenuItems, this.rootMenuItems.indexOf(item), deltaIndex);
			const nextRootUid = nextItem.item.uid;
			
			if(isAnySubmenuOpen) {
				await this.gotoSubmenuRoot( nextRootUid );
				const nextPreselectedUid = this.activeSubmenus[0].menu[0].uid
				this.setKeyboardCursor(nextPreselectedUid);
			}
			else {
				this.setKeyboardCursor(nextRootUid);			
			}
		},			
		
		//
		// Menu level
		//	
		goVerticalMenu(eventKey, item, indexActiveItemInSubmenu) {
			//if mouse over parent item with submenu, cursor must move into submenu; i.e. do not increment index but use loopAroundIndex
			const activeSubmenu = this.getActiveSubmenu();
			const isMoveIntoNewSubmenu = (activeSubmenu.menu.indexOf(item) === -1);
			const isArrowDown = (eventKey === "ArrowDown");
			const deltaNext = (isArrowDown) ? 1 : -1;
			const loopAroundIndex = (isArrowDown) ? 0 : activeSubmenu.menu.length -1;
			
			let nextItemIndex = indexActiveItemInSubmenu + deltaNext;
			
			if(activeSubmenu.menu[nextItemIndex] === undefined || isMoveIntoNewSubmenu) {
				nextItemIndex = loopAroundIndex;
			}			
		
			const nextUid = this.getUidThatIsNotSeparator(activeSubmenu.menu, nextItemIndex, deltaNext);
			
			if(nextUid !== null) {
				this.setKeyboardCursor(nextUid);
			}
		},	
		
		async goRight(item, indexActiveSubmenu, hasSubmenu) {
			const lastIdx = this.activeSubmenus.length - 1;
			const submenuOpened = (hasSubmenu && indexActiveSubmenu+1 === lastIdx);

			if(hasSubmenu && !submenuOpened) {
				await this.showSubmenu(item.uid);
				
				const newActiveSubmenu = this.getActiveSubmenu();
				const nextUid = newActiveSubmenu.menu[0].uid;
				this.setKeyboardCursor(nextUid);
			}
			else {
				this.goHorizontalTopLevel(1);	
			}			
		},
		
		async goLeft(item) {
			if(this.activeSubmenusIds.length > 1) {
				const activeSubmenu = this.getActiveSubmenu();

				const isItemInSubmenuThatIsGonnaClose = (activeSubmenu.menu.indexOf(item) > -1);
				const nextUid = (isItemInSubmenuThatIsGonnaClose) ? activeSubmenu.parentUid : item.uid;

				await this.hideLastSubmenu();
				
				this.setKeyboardCursor(nextUid);
			}
			else {
				this.goHorizontalTopLevel(-1);
			}
		},
		
		//
		// Top level
		//		
		async goVerticalTopLevel(eventKey, item) {
			let key = eventKey;
			
			//if no submenu opened, behaviour is equal to ArrowDown with submenu opened
			if(this.activeSubmenus.length === 0) {
				await this.gotoSubmenuRoot(item.uid);
				key = "ArrowDown";
			}
			
			const activeSubmenu = this.activeSubmenus[0];
			const menu = activeSubmenu.menu;
			
			const nextIndex = (key === "ArrowDown") ? 0 : menu.length - 1;			
			const nextUid = menu[nextIndex].uid;
			
			this.setKeyboardCursor(nextUid);			
		},

		goRightTopLevel() {
			this.goHorizontalTopLevel(1);
		},
		
		goLeftTopLevel() {
			this.goHorizontalTopLevel(-1);
		},
		
		//keyboardInputModeEnter() {},
		
		//keyboardInputModeExit() {}
	}
	
};