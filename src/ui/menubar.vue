<template>	
	<nav class="native-menubar" :class="css.menubarClass" ref="menubar" @keydown.capture="keydownDelegationCallback">			
		<menu-item-top 
			v-for="(itemWrapper, index) in rootMenuItems" 
			:key="itemWrapper.uid"
			
			:uid="itemWrapper.uid"
			:item="itemWrapper.item"
			:vars="vars"
			
			@click.native="topItemClickCallback(itemWrapper.uid)" 
			@mouseenter.native="topItemMouseenterCallback(itemWrapper.uid)"			
		/>		
	
		<sub-menu 
			v-for="(submenuWrapper, index) in activeSubmenus" 
			:key="'sm'+index"
						
			:id="submenuWrapper.parentUid"
			:menu="submenuWrapper.menu" 
			:submenuIndex="index"
			
			:funcs="{itemMouseenterCallback, itemClickCallback,  keydownCallback}"
			:vars="vars"
			
			:showAccelerators="showAccelerators"
		/>
	</nav>
</template>

<script src="./menubar.js"></script>

<style>
.native-menubar {}

.native-menubar_item {}
</style>