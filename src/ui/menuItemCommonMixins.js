export default {
	computed: {
		isFocused() {return (this.uid === this.vars.focusedUid);},
		
		isActive() {return this.vars.highlightedUids.indexOf(this.uid) > -1;},
		
		label() {
			let label;
			
			label = this.item.label;
			if(label) {
				return label;
			}			
			
			label = this.item.role;
			if(label) {
				return label[0].toUpperCase()+label.substring(1, label.length);
			}			
			
			label = this.item.id;
			if(label) {
				return label[0].toUpperCase()+label.substring(1, label.length);
			}
			
			return "Unnamed";
		},
		
		activeClass() {
			return (this.isActive) ? this.vars.css.itemActiveClass || this.vars.itemDefaultActiveClass : "";
		}
	},
	
	watch: {
		isFocused(itIs) {
			if(itIs) {
				this.$refs["i"+this.uid].focus();
			}
			else {
				this.$refs["i"+this.uid].blur();
			}
		}
	}		
}