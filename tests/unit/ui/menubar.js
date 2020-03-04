const assert = require("assert");
const sinon = require("sinon");
const sample = require("../../../src/ui/menubar.js").default;

suite("menubar.js");

let backups = {};

test("props.modalServiceUser.validator ensure proper interface", ()=>{
	const validator = sample.props.modalServiceUser.validator;
	const noop = ()=>{};
		
	assert.strictEqual(validator(), false);
	assert.strictEqual(validator(null), false);
	assert.strictEqual(validator({push: noop, forcePop: false}), false);
	assert.strictEqual(validator({push: false, forcePop: noop}), false);
	assert.strictEqual(validator({push: noop, forcePop: noop}), true);
});

test("props.css.validator ensures proper interface", ()=>{
	const backup = console.error;
	const validator = sample.props.css.validator;
	console.error = ()=>{};
	
	assert.strictEqual(validator({bollocks: "fails"}), false);
	assert.strictEqual(validator({menubarClass: 8008}), false);
	assert.strictEqual(validator({menubarClass: "valid"}), true);
	
	console.error = backup;
});


test("computed.activeSubmenus returns array of submenu wrappers from activeSubmenusIds", ()=>{
	const getItemByUid = (id)=>{
		if(id === 2) {
			return null;
		}
		
		else if(id === 1 || id === 4) {
			return {submenu: ["mock"], uid: id};
		}
		
		else {
			return {submenu: [], uid: id};
		}
	};
	
	const context = {
		activeSubmenusIds: [2,1,4,3],
		getItemByUid
	};
	
	const expected = [
		{id: 1, menu: ["mock"], parentUid: 1},
		{id: 4, menu: ["mock"], parentUid: 4}
	];
	
	assert.deepEqual(sample.computed.activeSubmenus.call(context), expected);
});

test("computed.rootMenuItems returns item wrappers of original menu's root items", ()=>{
	const match1 = {id: 1};
	const match2 = {id: 2};
	const context = {
		menuItemsFlat: [
			{item: {id: 3}},
			{item: match1},
			{item: {id:4}},
			{item: match2},
		],
		menu: [match2, match1]
	};
		
	assert.deepEqual(sample.computed.rootMenuItems.call(context), [{item: {id:1}}, {item: {id:2}}]);
});

test("computed.modalService returns user provided service or falls back to system service", ()=>{
	const context = {modalServiceUser: null};
	
	context.modalServiceUser = "check";
	assert.equal(sample.computed.modalService.call(context), "check");
	
	context.modalServiceUser = undefined;
	const systemService = sample.computed.modalService.call(context);
	assert.equal(typeof systemService.push, "function");
	assert.equal(typeof systemService.forcePop, "function");
});

test("computed.vars returns bundled properties based on input mode", ()=>{
	const context = {
		inputMode: "",
		
		currentCursorItemUid: 1,
		activeSubmenusIds: 2,
		
		focusedUid: 3,
		highlightedUids: 4,
		
		css: 5
	};
	
	context.inputMode = "mouse";
	assert.deepEqual( sample.computed.vars.call(context), {css: 5, focusedUid: 3, highlightedUids: 4, itemDefaultActiveClass: "native-menubar_item--active", itemIdPrefix: "native-menubar_item--"} );	
	
	context.inputMode = "else";
	assert.deepEqual( sample.computed.vars.call(context), {css: 5, focusedUid: 1, highlightedUids: 2, itemDefaultActiveClass: "native-menubar_item--active", itemIdPrefix: "native-menubar_item--"} );
});


test("watch.isMenuActive calls modal service with expected parameters on activation", ()=>{
	const context = {
		deactivateMenu: new sinon.fake(),
		$refs: {menubar: 456},
		modalService: {push: new sinon.fake()}
	};
	
	sample.watch.isMenuActive.call(context, true);
	
	const fakeEl = context.modalService.push.lastCall.args[0];
	const fakeCallback = context.modalService.push.lastCall.args[1];
	
	fakeCallback();	
	
	assert.equal(context.modalService.push.callCount, 1);
	assert.equal(fakeEl, 456);	
	assert.equal(context.deactivateMenu.callCount, 1);
});

test("watch.isMenuActive calls modal service with expected parameters on deactivation", ()=>{
	const context = {
		modalService: {forcePop: new sinon.fake()}
	};	
	
	sample.watch.isMenuActive.call(context, false);
	assert.equal(context.modalService.forcePop.callCount, 1);
	assert.strictEqual(context.modalService.forcePop.lastCall.args[0], true);
});


test("methods.setCursor updates current and previous cursor items and uids", ()=>{
	const context = {
		previousCursorItem: "item1",
		currentCursorItem: "item2",
		previousCursorItemUid: 1,
		currentCursorItemUid: 2,		
		getItemByUid: (id)=>("item"+id)
	};
	
	sample.methods.setCursor.call(context, 3);	
	assert.equal(context.previousCursorItem, "item2");
	assert.equal(context.currentCursorItem, "item3");
	assert.equal(context.previousCursorItemUid, 2);
	assert.equal(context.currentCursorItemUid, 3);
});

test("methods.setCursor calls getItemByUid with its parameter", ()=>{
	const context = {getItemByUid: new sinon.fake()};
	
	sample.methods.setCursor.call(context, 3);
	assert.equal(context.getItemByUid.callCount, 1);
	assert.equal(context.getItemByUid.lastCall.args[0], 3);
});

test("methods.switchInputMode returns false if new input mode is equal to old mode", ()=>{
	const context = {
		inputMode: "test"
	};
	assert.strictEqual(sample.methods.switchInputMode.call(context, "test"), false);
});

test("methods.switchInputMode calls mode's exit function", ()=>{
	const context = {
		inputMode: "mouse",
		mouseInputModeExit: new sinon.fake(),
		keyboardInputModeExit: new sinon.fake()
	};
	
	sample.methods.switchInputMode.call(context, "keyboard");
	assert.equal(context.mouseInputModeExit.callCount, 1);	
	
	sample.methods.switchInputMode.call(context, null);
	assert.equal(context.keyboardInputModeExit.callCount, 1);
});

test("methods.switchInputMode calls mode's enter function", ()=>{
	const context = {
		inputMode: "mouse",
		mouseInputModeEnter: new sinon.fake(),
		keyboardInputModeEnter: new sinon.fake()
	};
	
	sample.methods.switchInputMode.call(context, "keyboard");
	assert.equal(context.keyboardInputModeEnter.callCount, 1);	
	
	sample.methods.switchInputMode.call(context, "mouse");
	assert.equal(context.mouseInputModeEnter.callCount, 1);
});

test("methods.switchInputMode calls mode's exit fuction before enter function", ()=>{
	const context = {
		inputMode: "mouse",
		mouseInputModeExit: new sinon.fake(),
		keyboardInputModeEnter: new sinon.fake()
	};	
	
	sample.methods.switchInputMode.call(context, "keyboard");
	assert.ok(context.mouseInputModeExit.calledBefore(context.keyboardInputModeEnter));
});

test("methods.switchInputMode sets new input mode", ()=>{
	const context = {
		inputMode: "mouse"
	}	
	
	sample.methods.switchInputMode.call(context, "keyboard");
	assert.equal(context.inputMode, "keyboard");
});

test("methods.switchInputMode throws for undefined mode", ()=>{
	assert.throws(()=>{ sample.methods.switchInputMode("xbox_controller"); }, {message: /called with an undefined mode/});
});

test("methods.dispatchItemEvent calls $emit with event name and event details", ()=>{
	const context = {$emit: new sinon.fake()};
	
	sample.methods.dispatchItemEvent.call(context, "event", "item");
	assert.equal(context.$emit.callCount, 1);
	assert.equal(context.$emit.lastCall.args[0], "itemExecute");
	assert.equal(context.$emit.lastCall.args[1].eventSource, "event");
	assert.equal(context.$emit.lastCall.args[1].item, "item");
});

test("methods.dispatchItemEvent calls user provided click callback with expected parameters", ()=>{
	const item = {click: new sinon.fake()};
	const context = {
		$emit: ()=>{}
	};	
	
	sample.methods.dispatchItemEvent.call(context, "event", item);	
	assert.equal(item.click.callCount, 1);
	assert.equal(item.click.lastCall.args[0], item);
	assert.equal(item.click.lastCall.args[1], null);
	assert.equal(item.click.lastCall.args[2], "event");
});


test("created calls buildMenuFromTemplate with menu property", ()=>{
	const context = {
		buildMenuFromTemplate: new sinon.fake(),
		menu: 123
	};
	
	sample.created.call(context);
	assert.equal(context.buildMenuFromTemplate.callCount, 1);
	assert.equal(context.buildMenuFromTemplate.lastCall.args[0], 123);
});


test("mounted registered window blur listener with deactivateMenu callback", ()=>{
	const backup = window.addEventListener;	
	window.addEventListener = new sinon.fake();
	
	const context = {deactivateMenu: 123};
	
	sample.mounted.call(context);
	assert.equal(window.addEventListener.callCount, 1);
	assert.equal(window.addEventListener.lastCall.args[0], "blur");
	assert.equal(window.addEventListener.lastCall.args[1], 123);
	
	window.addEventListener = backup;
});


test("destroyed calls deactivateMenu", ()=>{
	const backup = window.removeEventListener;	
	window.removeEventListener = ()=>{};	
	
	const context = {deactivateMenu: new sinon.fake()};
	
	sample.destroyed.call(context);
	assert.equal(context.deactivateMenu.callCount, 1);
	
	window.removeEventListener = backup;
});

test("destroyed removes window blur listener with deactivateMenu callback", ()=>{
	const backup = window.removeEventListener;	
	window.removeEventListener = new sinon.fake();
	
	const context = {deactivateMenu: function callback() {}};
	
	sample.destroyed.call(context);
	
	const event = window.removeEventListener.lastCall.args[0];
	const callback = window.removeEventListener.lastCall.args[1];
	
	assert.equal(window.removeEventListener.callCount, 1);
	assert.equal(event, "blur");
	assert.equal(callback, context.deactivateMenu);
	
	window.removeEventListener = backup;
});