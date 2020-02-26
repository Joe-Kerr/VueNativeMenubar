export default {	
	methods: {
		setHighlightedItems(uid, indexActiveSubmenu) {
			this.focusedUid = uid;		
			
			this.highlightedUids.splice(0, this.highlightedUids.length);

			for(let i=indexActiveSubmenu; i>=0; i--) {
				this.highlightedUids.unshift(this.activeSubmenusIds[i])
			}			
		},

		setMouseCursor(uid, indexActiveItemInSubmenu, indexActiveSubmenu) {
			this.setCursor(uid);
			
			this.indexActiveItemInSubmenu = indexActiveItemInSubmenu;
			this.indexActiveSubmenu = indexActiveSubmenu;	
		},			
		
		handleRenderNewSubmenu(itemUid, hasItemSubmenu) {
			//console.log(this.activeSubmenusIds.indexOf(itemUid) === -1) //#todo is this still possible??!
			if(hasItemSubmenu && this.activeSubmenusIds.indexOf(itemUid) === -1) {
				this.showSubmenu(itemUid);
			}			
		},
				
		handleDestroySubmenu(submenuIdx, transists) {
			const activeMenu = this.activeSubmenus[submenuIdx];
			
			const isMouseMovingBack = (transists < 0);
			const isMouseOverLastSubmenu = (submenuIdx === this.activeSubmenus.length-1);
			
			if(isMouseMovingBack) {
				const parentUid = activeMenu.parentUid;
				this.hideSubmenusAfterThisId(parentUid);
			}				
			else if(!isMouseOverLastSubmenu) {
				this.hideLastSubmenu();
			}

		},		
		
		openCloseSubmenu(uid, itemIndexInSubmenu, submenuIndex, hasSubmenu) {
			const previousSubmenuIndex = this.indexActiveSubmenu;
			const transists = this.getSubmenuTransitVector(previousSubmenuIndex, submenuIndex);
			
			this.setMouseCursor(uid, itemIndexInSubmenu, submenuIndex);
			this.handleDestroySubmenu(submenuIndex, transists);
			this.handleRenderNewSubmenu(uid, hasSubmenu);			
		},
		
		delayOpenCloseSubmenu(uid, itemIndexInSubmenu, submenuIndex, hasSubmenu) {
			this.currentSubmenuTimeout = setTimeout(()=>{
				if(!this.isMenuActive) {
					return;
				}					
				
				this.openCloseSubmenu(uid, itemIndexInSubmenu, submenuIndex, hasSubmenu);
			}, this.menuShowTimeoutMs);				
		},
		
		cancelOpenCloseSubmenu() {
			clearTimeout(this.currentSubmenuTimeout);
		},
		
		syncHighlightedWithActiveItems() {
			this.highlightedUids.splice(0, this.highlightedUids.length);
			this.highlightedUids.push(...this.activeSubmenusIds);
		},			
		
		itemClickCallback(event, item) {
			this.dispatchItemEvent(event, item);
			this.deactivateMenu();
		},
		
		itemMouseenterCallback(uid, itemIndexInSubmenu, submenuIndex, hasSubmenu) {		
			this.switchInputMode("mouse");
			this.setHighlightedItems(uid, submenuIndex);		
			
			this.cancelOpenCloseSubmenu();
			this.delayOpenCloseSubmenu(uid, itemIndexInSubmenu, submenuIndex, hasSubmenu);
		},
		
		topItemClickCallback(uid) {
			this.toggleMenuActive(uid);
			if(this.isMenuActive) {
				this.switchInputMode("mouse");
				this.setMouseCursor(uid);
				this.setHighlightedItems(uid, -1);
			}			
		},
		
		topItemMouseenterCallback(uid) {		
			if(this.isMenuActive) {
				this.switchInputMode("mouse");
				this.gotoSubmenuRoot(uid);
				this.setMouseCursor(uid);
				this.setHighlightedItems(uid, -1);
				this.cancelOpenCloseSubmenu();
			}
		},	
		
		//mouseInputModeEnter() {},
		
		mouseInputModeExit() {
			this.cancelOpenCloseSubmenu();
			
			this.syncHighlightedWithActiveItems();
			this.setCursor(this.focusedUid);			
			this.focusedUid = null;
		},
	}
	
};