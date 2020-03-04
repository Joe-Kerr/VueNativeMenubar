<template>
	<div
		:id="vars.itemIdPrefix+uid" 
		class="native-menubar_item native-menubar_item--toplevel"
		:class="[vars.css.itemBaseClass, vars.css.itemTopClass, activeClass]"	
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
}
</style>