const assert = require("assert");
const sinon = require("sinon");
const sample = require("../../../src/ui/menuItemFunctional.vue").default;

suite("menuItemFunctional.vue");
/*
test("computed.isTopLevel returns true or false if item has a submenu index", ()=>{
	const context = { parentSubmenuIndex: undefined };
	
	context.parentSubmenuIndex = null;
	assert.equal( sample.computed.isTopLevel.call(context), true );	
	
	context.parentSubmenuIndex = 0;
	assert.equal( sample.computed.isTopLevel.call(context), false );
});
*/
test("computed.hasSubmenu returns true or false if item has items in its submenu", ()=>{
	const context = { item: {} };
	
	context.item;
	assert.strictEqual( sample.computed.hasSubmenu.call(context), false );	
	
	context.item.submenu = [];
	assert.strictEqual( sample.computed.hasSubmenu.call(context), false );	
	
	context.item.submenu = [null];
	assert.strictEqual( sample.computed.hasSubmenu.call(context), true );
});

test("hasClickListner returns 'click' if item has no submenu, otherwise null", ()=>{
	const context = {hasSubmenu: null};
	
	context.hasSubmenu = true;
	assert.strictEqual(sample.computed.hasClickListner.call(context), null);	
	
	context.hasSubmenu = false;
	assert.strictEqual(sample.computed.hasClickListner.call(context), "click");
});

test("methods.clickIem calls item component click callback with expected parameters", ()=>{
	const context = {
		item: 123,
		funcs: {itemClickCallback: new sinon.fake()}
	};	
	sample.methods.clickItem.call(context, 456);
	
	assert.equal(context.funcs.itemClickCallback.callCount, 1);		
	assert.equal(context.funcs.itemClickCallback.lastCall.args[0], 456); 
	assert.equal(context.funcs.itemClickCallback.lastCall.args[1], 123); 
});

test("methods.notifyParentMouseEnteredItem calls mouseenter item callback of top level items immediately", ()=>{
	const context = {
		funcs: {itemMouseenterCallback: new sinon.fake()}
	};
	
	sample.methods.notifyParentMouseEnteredItem.call(context);
	assert.equal(context.funcs.itemMouseenterCallback.callCount, 1);	
});

test("methods.notifyParentMouseEnteredItem calls mouseenter item callback with expected parameters", ()=>{
	const context = {
		uid: 123,
		itemIndexInSubmenu: 456, 
		itemParentIndexInActiveMenus: 789,
		hasSubmenu: 101112,
		funcs: {itemMouseenterCallback: new sinon.fake()}
	};
	
	sample.methods.notifyParentMouseEnteredItem.call(context);
	
	assert.equal(context.funcs.itemMouseenterCallback.callCount, 1);
	assert.equal(context.funcs.itemMouseenterCallback.lastCall.args[0], 123);
	assert.equal(context.funcs.itemMouseenterCallback.lastCall.args[1], 456);
	assert.equal(context.funcs.itemMouseenterCallback.lastCall.args[2], 789);
	assert.equal(context.funcs.itemMouseenterCallback.lastCall.args[3], 101112);
})