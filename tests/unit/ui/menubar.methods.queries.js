const assert = require("assert");
const sinon = require("sinon");
const sample = require("../../../src/ui/menubar.methods.queries.js").default;

suite("menubar.methods.queries.js");

test("getIndexOfItemInMenuByUid returns index of item in submenu or null", ()=>{
	let returns = null;
	const context = {
		getItemByUid: ()=>returns,
		activeSubmenus: [
			{menu: ["a", "b"]},
			{menu: ["d", "e"]},
		]
	};
	
	returns = null;
	assert.strictEqual(sample.methods.getIndexOfItemInMenuByUid.call(context), null);	
	
	returns = "f";
	assert.strictEqual(sample.methods.getIndexOfItemInMenuByUid.call(context), null);	
	
	returns = "a";
	assert.strictEqual(sample.methods.getIndexOfItemInMenuByUid.call(context), 0);	
	
	returns = "e";
	assert.strictEqual(sample.methods.getIndexOfItemInMenuByUid.call(context), 1);
});

test("getIndexOfItemInMenuByUid calls getItemByUid with its parameter", ()=>{
	const context = {
		getItemByUid: new sinon.fake(),
		activeSubmenus: []
	};	
	
	sample.methods.getIndexOfItemInMenuByUid.call(context, 123);
	assert.equal(context.getItemByUid.callCount, 1);
	assert.equal(context.getItemByUid.lastCall.args[0], 123);
});

test("getItemByUid returns item with id of parameter or null", ()=>{
	const context = {
		menuItemsFlat: [{id:2}, {id:1}, {id:3}],
		index: {2:0, 1:1, 3:2}
	};
	
	assert.equal(sample.methods.getItemByUid.call(context, 123), null);
	assert.deepEqual(sample.methods.getItemByUid.call(context, 1), {id:1});
});

test("getParentItemUidByUid returns id of item in submenu or null", ()=>{
	let returns = null;
	const context = {
		getItemByUid: ()=>returns,
		activeSubmenus: [
			{menu: ["a", "b"], parentUid: "A"},
			{menu: ["d", "e"], parentUid: "B"},
		]
	};	
	
	returns = null;
	assert.strictEqual(sample.methods.getParentItemUidByUid.call(context), null);		
	
	returns = "d";
	assert.strictEqual(sample.methods.getParentItemUidByUid.call(context), "B");	
});

test("getParentItemUidByUid calls getItemByUid with its parameter", ()=>{
	const context = {
		getItemByUid: new sinon.fake(),
		activeSubmenus: []
	};	
	
	sample.methods.getParentItemUidByUid.call(context, 123);
	assert.equal(context.getItemByUid.callCount, 1);
	assert.equal(context.getItemByUid.lastCall.args[0], 123);	
});

test("getSubmenuIndexByMemberUid returns index of submenu that is active or -1", ()=>{
	let returns = null;
	const context = {
		activeSubmenusIds: [3,1,2],
		getParentItemUidByUid: ()=>returns
	};
	
	returns = null;
	assert.strictEqual(sample.methods.getSubmenuIndexByMemberUid.call(context), -1);	
	
	returns = 1;
	assert.strictEqual(sample.methods.getSubmenuIndexByMemberUid.call(context), 1);	
});

test("getSubmenuIndexByMemberUid calls getParentItemUidByUid with its parameter", ()=>{
	const context = {
		getParentItemUidByUid: new sinon.fake(),
		activeSubmenusIds: []
	};	
	
	sample.methods.getSubmenuIndexByMemberUid.call(context, 123);
	assert.equal(context.getParentItemUidByUid.callCount, 1);
	assert.equal(context.getParentItemUidByUid.lastCall.args[0], 123);		
});

test("getSubmenuTransitVector returns difference of parameters", ()=>{
	assert.equal(sample.methods.getSubmenuTransitVector(1, 3), 2);
});

test("getSubmenuTransitVector returns 0 if any parameter is null", ()=>{
	assert.strictEqual(sample.methods.getSubmenuTransitVector(1, null), 0);
	assert.strictEqual(sample.methods.getSubmenuTransitVector(null, 3), 0);
	assert.strictEqual(sample.methods.getSubmenuTransitVector(null, null), 0);
});