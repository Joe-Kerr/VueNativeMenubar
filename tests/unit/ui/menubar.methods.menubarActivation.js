const assert = require("assert");
const sinon = require("sinon");
const sample = require("../../../src/ui/menubar.methods.menubarActivation.js").default;

suite("menubar.methods.menubarActivation.js");

test("toggleMenuActive activates or deactivate menu depending on menu active state", ()=>{
	const context = {
		isMenuActive: null,
		activateMenu: new sinon.fake(),
		deactivateMenu: new sinon.fake(),
	};
	
	context.isMenuActive = true;
	sample.methods.toggleMenuActive.call(context, 123);
	assert.equal(context.deactivateMenu.callCount, 1);
	assert.equal(context.activateMenu.callCount, 0);	
	
	context.isMenuActive = false;
	sample.methods.toggleMenuActive.call(context, 123);
	assert.equal(context.deactivateMenu.callCount, 1);
	assert.equal(context.activateMenu.callCount, 1);
});

test("toggleMenuActive calls activateMenu with its paramter", ()=>{
	const context = {
		isMenuActive: false,
		activateMenu: new sinon.fake(),
	};	

	sample.methods.toggleMenuActive.call(context, 123);
	assert.equal(context.activateMenu.lastCall.args[0], 123);		
});


test("activateMenu sets menu active state true", async ()=>{
	const context = {
		isMenuActive: null,
		showSubmenu: ()=>{}
	};		
	
	await sample.methods.activateMenu.call(context);
	assert.strictEqual(context.isMenuActive, true);
});

test("activateMenu calls showSubmenu with its parameter", async ()=>{
	const context = {
		isMenuActive: false,
		showSubmenu: new sinon.fake(),
	};	

	await sample.methods.activateMenu.call(context, 123);
	assert.equal(context.showSubmenu.lastCall.args[0], 123);		
});


test("deactivateMenu sets menu active state false", async ()=>{
	const context = {
		isMenuActive: null,
		hideAllSubmenus: ()=>{},
		resetMenuState: ()=>{}
	};		
	
	await sample.methods.deactivateMenu.call(context);
	assert.strictEqual(context.isMenuActive, false);
});

test("deactivateMenu calls hideAllSubmenus", async ()=>{
	const context = {		
		hideAllSubmenus: new sinon.fake(),
		resetMenuState: ()=>{}
	};	

	await sample.methods.deactivateMenu.call(context);
	assert.equal(context.hideAllSubmenus.callCount, 1);		
});

test("deactivateMenu calls resetMenuState", async ()=>{
	const context = {		
		hideAllSubmenus: ()=>{},
		resetMenuState: new sinon.fake()
	};	

	await sample.methods.deactivateMenu.call(context);
	assert.equal(context.resetMenuState.callCount, 1);		
});

test("deactivateMenu calls hideAllSubmenus before resetMenuState", async ()=>{
	const context = {		
		hideAllSubmenus: new sinon.fake(),
		resetMenuState: new sinon.fake()
	};	

	await sample.methods.deactivateMenu.call(context);	
	assert.ok( context.hideAllSubmenus.calledBefore(context.resetMenuState) );
});


test("resetMenuState nulls expected properties", ()=>{
	const shouldBeNull = [
		"previousCursorItem",
		"currentCursorItem",
		"previousCursorItemUid",
		"currentCursorItemUid",
		
		"indexActiveItemInSubmenu",
		"indexActiveSubmenu",		
	];
	const context = {switchInputMode: ()=>{}};
	sample.methods.resetMenuState.call(context);
	delete context.switchInputMode;
	
	const nValuesNotNull = Object.values(context).filter((val)=>(val !== null));

	assert.strictEqual(nValuesNotNull.length, 0);
	assert.deepEqual(Object.keys(context).sort(), shouldBeNull.sort(), "Tested for all known properties");
});

test("resetMenuState calls switchInputMode with null", ()=>{
	const context = {
		switchInputMode: new sinon.fake(),
	};	

	sample.methods.resetMenuState.call(context);
	assert.equal(context.switchInputMode.callCount, 1);	
	assert.strictEqual(context.switchInputMode.lastCall.args[0], null);	
});