<template>
	<div class="native-menubar_submenu" :style="style">
		<component
			:is="getComponentType(itemWrapper.item)"
			v-for="(itemWrapper, index) in menu" 
			:key="itemWrapper.uid" 
			
			:uid="itemWrapper.uid" 
			:item="itemWrapper.item" 
			
			:funcs="funcs" 
			:vars="vars"
			
			:itemIndexInSubmenu="index"
			:itemParentIndexInActiveMenus="submenuIndex" 
			:showAccelerators="showAccelerators"
		/>
	</div>
</template>

<script>
import menuItemFunctional from "./menuItemFunctional.vue";
import menuItemSeparator from "./menuItemSeparator.vue";

export default {
	name: "sub-menu",
	
	props: ["menu", "id", "funcs", "vars", "submenuIndex", "showAccelerators"],
	
	computed: {
		style() {;
			const el = document.getElementById(this.vars.itemIdPrefix + this.id);
			const rect = el.getBoundingClientRect();		
			
			const isTopLevel = (this.submenuIndex === 0);
			
			const left = (!isTopLevel) ? rect.x + rect.width : rect.x;
			const top = (!isTopLevel) ? rect.y : rect.y + rect.height;

			return {
				left: (left)+"px",
				top: (top)+"px"
			}
		}
	},
	
	methods: {
		getComponentType(item) {
			if(item.type === "separator") {
				return "menu-item-separator";
			}
			
			return "menu-item-functional";
		}
	},
	
	components: {
		"menu-item-separator": menuItemSeparator,
		"menu-item-functional": menuItemFunctional
	}
}
</script>

<style>
.native-menubar_submenu {
	position: fixed;
	
	padding: 6px 4px 6px 6px;
	
    background-color: #f0f0f0;
    border-color: #f5f5f5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);	
}
</style>