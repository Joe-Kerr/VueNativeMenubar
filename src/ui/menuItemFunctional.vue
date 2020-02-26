<template>
	<div 
		:id="vars.itemIdPrefix+uid" 
		class="native-menubar_item native-menubar_item--functional"
		:class="{'native-menubar_item--active': isActive}"		
		:ref="'i'+uid"
		
		tabindex="0"
		
		@mouseenter="notifyParentMouseEnteredItem" 
		@[hasClickListner]="clickItem"  
	>
		<div class="native-menubar_item--content native-menubar_item--left">
		
		</div>
		
		<div class="native-menubar_item--content native-menubar_item--middle">{{label}}</div>
		
		<div class="native-menubar_item--content native-menubar_item--right">
			<span v-if="item.accelerator && showAccelerators">{{item.accelerator}}</span> 
			<img v-if="hasSubmenu" alt=">" src="data:image/png;base64,R0lGODlhBAAHAIABACMtMP///yH5BAEAAAEALAAAAAAEAAcAAAIIRA4WaeyrVCgAOw==" />
		</div>

	</div>
</template>

<script>
import commonMixins from "./menuItemCommonMixins.js";

export default {
	name: "menu-item-functional", 
	mixins: [commonMixins],
	
	props: ["uid", "item", "funcs", "vars", "itemParentIndexInActiveMenus", "itemIndexInSubmenu", "showAccelerators"],
	
	computed: {
		hasSubmenu() {return (this.item.submenu !== undefined && this.item.submenu.length > 0)},	
		hasClickListner() {return (this.hasSubmenu === false) ? "click" : null;},
	},
	
	methods: {
		clickItem(event) {
			if(typeof this.item.click === "function") {
				//this.item.click(this.item, null, event);
			}
			
			this.funcs.itemClickCallback(event, this.item);
		},			
		
		notifyParentMouseEnteredItem() {
			this.funcs.itemMouseenterCallback(this.uid, this.itemIndexInSubmenu, this.itemParentIndexInActiveMenus, this.hasSubmenu);
		}
	}		
}	
</script>

<style>
.native-menubar_item--functional {}

.native-menubar_item--active, 
.native-menubar_item:focus:not(.native-menubar_item--separator) {
	outline: 1px solid #99ccff;
	border-radius: 4px;
	background-color: #e9eff6;
}

.native-menubar_item--content {
	display: inline-block;
}

.native-menubar_item--left {
	width: 30px;
}

.native-menubar_item--middle {
	min-width: 50px;
	
	border-left: 1px solid #ffffff;
	box-shadow: -1px 0px 0px 0px #e2e3e3;
}

.native-menubar_item--right {
	text-align: right;
	padding-left: 15px;
	padding-right: 5px;
	float: right;
	min-width: 10px;
}
</style>