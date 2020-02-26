export default {
	methods: {
		toggleMenuActive(uid) {
			if(this.isMenuActive === false) {
				this.activateMenu(uid);
			}
			else {
				this.deactivateMenu();
			}
		},
		
		async activateMenu(uid) {
			this.isMenuActive = true;
			await this.showSubmenu(uid);			
		},
		
		async deactivateMenu() {
			this.isMenuActive = false;
			await this.hideAllSubmenus();
			this.resetMenuState();
		},
		
		resetMenuState() {
			this.switchInputMode(null);		
			
			this.previousCursorItem = null;
			this.currentCursorItem = null;
			this.previousCursorItemUid = null;
			this.currentCursorItemUid = null;

			this.indexActiveItemInSubmenu = null;
			this.indexActiveSubmenu = null;		
		},
	}
};