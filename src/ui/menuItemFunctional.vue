<template>
	<div 
		:id="vars.itemIdPrefix+uid" 
		class="native-menubar_item native-menubar_item--functional"
		:class="[vars.css.itemBaseClass, vars.css.itemFunctionalClass, activeClass]"	
		:ref="'i'+uid"
		
		tabindex="0"
		
		@mouseenter="notifyParentMouseEnteredItem" 
		@[hasClickListner]="clickItem"  
	>
		<div class="native-menubar_item--content native-menubar_item--left" :class="[vars.css.itemContentClass, vars.css.itemLeftClass]">
		
		</div>
		
		<div class="native-menubar_item--content native-menubar_item--middle" :class="[vars.css.itemContentClass, vars.css.itemMiddleClass]">{{label}}</div>
		
		<div class="native-menubar_item--content native-menubar_item--right" :class="[vars.css.itemContentClass, vars.css.itemRightClass]">
			<span v-if="item.accelerator && showAccelerators">{{item.accelerator}}</span> 
						
			<svg v-if="hasSubmenu" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 8" width="4" height="8">
				<path d="M1.8 6.06L0 8.08L0 4.04L0 0L1.8 2.02L3.59 4.04L1.8 6.06Z" fill="currentColor"></path>
			</svg>			
			
			<!--
			Problem: does not scale size with font size
			<svg v-if="hasSubmenu" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 8" width="4" height="8">
				<path d="M1.8 6.06L0 8.08L0 4.04L0 0L1.8 2.02L3.59 4.04L1.8 6.06Z" fill="currentColor"></path>
			</svg>				
			-->
			
			<!--
			Problem: requires font to know char (Win, Mac, Linux); may require size fiddling -> config prop
			<span v-if="hasSubmenu" style="font-family: Helvetica sans-serif; font-size: 8px;">&#9654;</span>
			'&#9654;'
			'&#9652;'
			-->
			
			<!--
			Problem: cannot be colored, does not scale size with font size
			<img v-if="hasSubmenu" alt=">" src="data:image/png;base64,R0lGODlhBAAHAIABACMtMP///yH5BAEAAAEALAAAAAAEAAcAAAIIRA4WaeyrVCgAOw==" />
			-->
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
.native-menubar_item:focus:not(.native-menubar_item--separator) {}

.native-menubar_item--content {
	display: inline-block;
}

.native-menubar_item--left {}

.native-menubar_item--middle {}

.native-menubar_item--right {}
</style>