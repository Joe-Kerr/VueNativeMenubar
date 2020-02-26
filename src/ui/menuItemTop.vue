<template>
	<div
		:id="vars.itemIdPrefix+uid" 
		class="native-menubar_item native-menubar_item--toplevel"
		:class="{'native-menubar_item--active': isActive}"		
		:ref="'i'+uid"
		
		tabindex="0"	
	>{{label}}</div>
</template>

<script>
import commonMixins from "./menuItemCommonMixins.js";

export default {
	name: "menu-item-top",
	mixins: [commonMixins],	
	
	props: ["uid", "item", "vars"]		
}	
</script>

<style>
.native-menubar_item--toplevel {
	display: inline-block;
	
	padding-left: 4px;
	padding-right: 6px;
}
</style>