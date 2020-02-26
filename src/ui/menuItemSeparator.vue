<template>
	<hr :id="vars.itemIdPrefix+uid" class="native-menubar_item native-menubar_item--separator" />
</template>


<script>
export default {
	name: "menu-item-separator", 
	
	props: ["uid", "vars"]
}	
</script>

<style>
.native-menubar_item--separator {
	margin: 0 0 0 auto;
	margin-left: 30px;
	width: calc(100% - 30px);
	
	height: 1px;
	color: #e2e3e3;
	background-color: #e2e3e3;
	
	border: none;
	border-bottom: 1px solid #ffffff;
}
</style>