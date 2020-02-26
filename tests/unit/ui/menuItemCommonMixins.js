const assert = require("assert");
const sinon = require("sinon");
const sample = require("../../../src/ui/menuItemCommonMixins.js").default;

suite("menuItemCommonMixins.js");

test("computed.isFocused returns true if its uid is equal to the focused uid", ()=>{
	const context = {uid: null, vars: {focusedUid: null}};
	
	context.uid = 1;
	context.vars.focusedUid = 2;
	assert.strictEqual(sample.computed.isFocused.call(context), false);	
	
	context.uid = 1;
	context.vars.focusedUid = 1;
	assert.strictEqual(sample.computed.isFocused.call(context), true);
});

test("computed.isActive returns true if its uid is within path of highlighted items", ()=>{
	const context = {uid: null, vars: {highlightedUids: null}};
	
	context.uid = 1;
	context.vars.highlightedUids = [2, 3];
	assert.strictEqual(sample.computed.isActive.call(context), false);			
	
	context.uid = 1;
	context.vars.highlightedUids = [1, 2, 3];
	assert.strictEqual(sample.computed.isActive.call(context), true);		
});

test("computed.label returns item's label otherwise falls back to capitalised role or id, or 'Unnamed'", ()=>{
	const context = {
		item: {}
	};
	
	context.item;
	assert.equal(sample.computed.label.call(context), "Unnamed");
	
	context.item.id = "test1";
	assert.equal(sample.computed.label.call(context), "Test1");	
	
	context.item.role = "test2";
	assert.equal(sample.computed.label.call(context), "Test2");	
	
	context.item.label = "Test passthrough";
	assert.equal(sample.computed.label.call(context), "Test passthrough");
});

test("watch.isFocused focuses or blurs $ref relative to isFocus property", ()=>{
	const focus = new sinon.fake();
	const blur = new sinon.fake();
	const context = {
		uid: 1,
		$refs: {i1: {focus, blur}}
	};
	
	sample.watch.isFocused.call(context, true);
	assert.equal(focus.callCount, 1);
	assert.equal(blur.callCount, 0);	
	
	sample.watch.isFocused.call(context, false);
	assert.equal(focus.callCount, 1);
	assert.equal(blur.callCount, 1);
});