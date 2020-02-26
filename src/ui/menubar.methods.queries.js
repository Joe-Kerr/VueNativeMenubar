export default {
	methods: {
		getIndexOfItemInMenuByUid(uid) {
			const activeSubmenus = this.activeSubmenus;
			const item = this.getItemByUid(uid);
			
			for(let j=0, jj=activeSubmenus.length; j<jj; j++) {
				const activeSubmenu = this.activeSubmenus[j];
				const i = activeSubmenu.menu.indexOf(item);
				
				if(i > -1) {
					return i;
				}				
			}
			return null;		
		},
		
		getItemByUid(uid) {
			const item = this.menuItemsFlat[this.index[uid]];
			return (item !== undefined) ? item : null;
		},
		
		
		getParentItemUidByUid(uid) {
			const item = this.getItemByUid(uid);

			for(let i=0, ii=this.activeSubmenus.length; i<ii; i++) {
				if(this.activeSubmenus[i].menu.indexOf(item) > -1) {
					return this.activeSubmenus[i].parentUid;
				}
			}
			return null;
			
		},
		
		getSubmenuIndexByMemberUid(currentUid) {
			return this.activeSubmenusIds.indexOf( this.getParentItemUidByUid(currentUid) );		
		},
		
		getSubmenuTransitVector(previousIndex, currentIndex) {
			const bothValid = (previousIndex !== null && currentIndex !== null);
			return (bothValid) ? currentIndex - previousIndex : 0;
		}
	}
};