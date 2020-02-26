export default {
	methods: {
		buildMenuFromTemplate(_menu) {		
			const menuSource = _menu;
			const menuItemsTarget = this.menuItemsFlat;
			const index = this.index;
			let id = 1;
			
			function recur(source, target, idx) {				
				
				for(let x=0, xx=source.length; x<xx; x++) {
					const item = source[x];
					
					const i = target.push({uid: id, submenu: [], item}) - 1;
					idx[id] = i;
					id++;

					if(item.submenu && item.submenu.length > 0) {
						recur(item.submenu, target, idx);
					}
				}				
			}
			
			function getItem(item, arr) {
				for(let i=0, ii=arr.length; i<ii; i++) {
					if(arr[i].item === item) {
						return arr[i];
					}
				}
			}			
			
			recur(menuSource, menuItemsTarget, index);
			
			menuItemsTarget.forEach((itemWrapper, idx)=>{
				if(itemWrapper.item.submenu === undefined) { return; }

				itemWrapper.item.submenu.forEach((subitem)=>{
					const subItemWrappr =  getItem(subitem, menuItemsTarget);
					menuItemsTarget[idx].submenu.push(subItemWrappr);
				});
			});			
		}
	}
};