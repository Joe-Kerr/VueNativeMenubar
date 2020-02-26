export default {
	methods: {
		async showSubmenu(uid) {
			this.activeSubmenusIds.push(uid);
			return await this.$nextTick();
		},
		
		async hideLastSubmenu() {		
			this.activeSubmenusIds.pop();		
			return await this.$nextTick();
		},
		
		async hideAllSubmenus() {
			this.activeSubmenusIds.splice(0, this.activeSubmenusIds.length);
			return await this.$nextTick();
		},
		
		async hideSubmenusAfterThisId(uid) {
			const activeUids = this.activeSubmenusIds;
			const index = activeUids.indexOf(uid);
			activeUids.splice(index+1, activeUids.length-1);			
			
			return await this.$nextTick();
		},
		
		async gotoSubmenuRoot(uid) {
			this.hideAllSubmenus();
			this.showSubmenu(uid);		

			return await this.$nextTick();
		},		
	}
};