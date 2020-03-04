<template>
	<hr :id="vars.itemIdPrefix+uid" class="native-menubar_item native-menubar_item--separator" :class="[vars.css.itemBaseClass, vars.css.itemSeparatorClass]" />
</template>


<script>
export default {
	name: "menu-item-separator", 
	
	props: ["uid", "vars"]
}	
</script>

<style>
.native-menubar_item--separator {}
</style>