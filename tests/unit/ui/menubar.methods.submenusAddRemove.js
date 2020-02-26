const assert = require("assert");
const sinon = require("sinon");
const sample = require("../../../src/ui/menubar.methods.submenusAddRemove.js").default;

suite("menubar.methods.submenusAddRemove.js");

const getContext = ()=>({activeSubmenusIds: [], $nextTick: ()=>{}});

test("showSubmenu pushes parameter id into activeSubmenus", async ()=>{
	const context = getContext();
	await sample.methods.showSubmenu.call(context, 123);
	assert.deepEqual(context.activeSubmenusIds, [123]);
});

test("hideLastSubmenu removes last element from activeSubmenus", async ()=>{
	const context = getContext();
	
	context.activeSubmenusIds = [123, 456];
	await sample.methods.hideLastSubmenu.call(context);
	assert.deepEqual(context.activeSubmenusIds, [123]);	
});

test("hideAllSubmenus clears activeSubmenus", async ()=>{
	const context = getContext();
	
	context.activeSubmenusIds = [123, 456];
	await sample.methods.hideAllSubmenus.call(context);
	assert.deepEqual(context.activeSubmenusIds, []);		
});

test("hideAllSubmenus preserves references to activeSubmenus", async ()=>{
	const context = getContext();
	const reference = context;
	
	context.activeSubmenusIds = [123, 456];
	await sample.methods.hideAllSubmenus.call(context);
	
	reference.activeSubmenusIds.push("both");	
	assert.deepEqual(context.activeSubmenusIds, reference.activeSubmenusIds);		
});

test("hideSubmenusAfterThisId removes all id entries after the parameter id from activeSubmenus", async ()=>{
	const context = getContext();
	
	context.activeSubmenusIds = [1, 3, 2, 6, 4, 9];
	await sample.methods.hideSubmenusAfterThisId.call(context, 2);	
	assert.deepEqual(context.activeSubmenusIds, [1, 3, 2]);	
});

test("gotoSubmenuRoot hides all current menus and shows menu of parameter id", async ()=>{
	const context = {
		hideAllSubmenus: new sinon.fake(),
		showSubmenu: new sinon.fake(),
		$nextTick: ()=>{}
	};
	
	await sample.methods.gotoSubmenuRoot.call(context, 123);
	assert.equal(context.hideAllSubmenus.callCount, 1);
	assert.equal(context.showSubmenu.callCount, 1);
	assert.equal(context.showSubmenu.lastCall.args[0], 123);
});

test("all functions return $nextTick call", async ()=>{
	const context = getContext();
	context.$nextTick = ()=>123;
	context.hideAllSubmenus = ()=>{};
	context.showSubmenu = ()=>{};
	
	for(const fnName in sample.methods) {
		const result = await sample.methods[fnName].call(context);
		assert.equal(result, 123);
	}
});