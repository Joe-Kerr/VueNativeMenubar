<template>	
	<nav class="native-menubar" ref="menubar" @keydown.capture="keydownDelegationCallback">			
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
.native-menubar {
	
	pointer-events: auto;
	background: #ececec;
	background: -moz-linear-gradient(top,  #ececec 0%, #dadada 36%, #dadada 100%);
	background: -webkit-linear-gradient(top,  #ececec 0%,#dadada 36%,#dadada 100%);
	background: linear-gradient(to bottom,  #ececec 0%,#dadada 36%,#dadada 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ececec', endColorstr='#dadada',GradientType=0 );
	-moz-box-shadow: 0 1px 1px rgba(0, 0, 0, .25), 0 2px 3px rgba(0, 0, 0, .1);
	-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .25), 0 2px 3px rgba(0, 0, 0, .1);
	box-shadow: 0 1px 1px rgba(0, 0, 0, .25), 0 2px 3px rgba(0, 0, 0, .1);
}

.native-menubar_item {
	line-height: 22px;
}
</style>