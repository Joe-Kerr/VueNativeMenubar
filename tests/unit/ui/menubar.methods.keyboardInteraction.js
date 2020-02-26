const assert = require("assert");
const sinon = require("sinon");
const sample = require("../../../src/ui/menubar.methods.keyboardInteraction.js").default;

suite("menubar.methods.keyboardInteraction.js");

function getKeydownDelegationCallbackContext(fakeProp) {
	const context = {
		currentCursorItemUid: 2,
		indexActiveItemInSubmenu: 3,
		indexActiveSubmenu: 4,
		menu: [5],
		
		getItemByUid: ()=>({submenu: []}),
		switchInputMode: ()=>{},
		keydownCallback: ()=>{},
		topItemKeydownCallback: ()=>{}
	};
	
	if(fakeProp) {
		context[fakeProp] = new sinon.fake();
	}
	return context;
}

test("keydownDelegationCallback calls getItemByUid with expected parameters", ()=>{
	const context = getKeydownDelegationCallbackContext();
	context.getItemByUid = new sinon.fake(()=>({submenu: []}));
	
	
	sample.methods.keydownDelegationCallback.call(context, "event");
	assert.equal(context.getItemByUid.callCount, 1);
	assert.equal(context.getItemByUid.lastCall.args[0], context.currentCursorItemUid);	
});

test("keydownDelegationCallback calls switchInputMode with 'keyboard'", ()=>{
	const context = getKeydownDelegationCallbackContext("switchInputMode");
	
	sample.methods.keydownDelegationCallback.call(context, "event");
	assert.equal(context.switchInputMode.callCount, 1);
	assert.equal(context.switchInputMode.lastCall.args[0], "keyboard");
});

test("keydownDelegationCallback calls keydownCallback with expected parameters", ()=>{
	const context = getKeydownDelegationCallbackContext("keydownCallback");
	context.getItemByUid = ()=>({submenu: [], item: 6});
	
	const item = context.getItemByUid();
	let hasSubmenu = false;
	
	sample.methods.keydownDelegationCallback.call(context, "event");
	assert.equal(context.keydownCallback.callCount, 1);
	assert.equal(context.keydownCallback.lastCall.args[0], "event");
	assert.deepEqual(context.keydownCallback.lastCall.args[1], item);
	assert.equal(context.keydownCallback.lastCall.args[2], context.indexActiveItemInSubmenu);
	assert.equal(context.keydownCallback.lastCall.args[3], context.indexActiveSubmenu);
	assert.equal(context.keydownCallback.lastCall.args[4], hasSubmenu);
	
	context.getItemByUid = ()=>({submenu: [123], item: 6});
	hasSubmenu = true;
	sample.methods.keydownDelegationCallback.call(context, "event");
	assert.equal(context.keydownCallback.lastCall.args[4], hasSubmenu);
});

test("keydownDelegationCallback calls topItemKeydownCallback with expected parameters", ()=>{
	const context = getKeydownDelegationCallbackContext("topItemKeydownCallback");
	context.getItemByUid = ()=>({submenu: [7], item: 5});
	
	const item = context.getItemByUid();
	
	sample.methods.keydownDelegationCallback.call(context, "event");
	assert.equal(context.topItemKeydownCallback.callCount, 1);
	assert.equal(context.topItemKeydownCallback.lastCall.args[0], "event");
	assert.deepEqual(context.topItemKeydownCallback.lastCall.args[1], item);	
});


test("keydownCallback calls event.preventDefault for processed keys", ()=>{
	const no = ()=>{};
	const context = {goVerticalMenu: no, goRight: no, goLeft: no, dispatchItemEvent: no, deactivateMenu: no};
	const event = {key: null, preventDefault: new sinon.fake()};
	const keysThatPreventDefault = ["Enter", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
	
	event.key = "Any";
	sample.methods.keydownCallback.call(context, event, "item", "indexActiveItemInSubmenu", "indexActiveSubmenu", "hasSubmenu");
	
	keysThatPreventDefault.forEach((key)=>{
		event.key = key;
		sample.methods.keydownCallback.call(context, event, "item", "indexActiveItemInSubmenu", "indexActiveSubmenu", "hasSubmenu");
	});
	
	assert.equal(event.preventDefault.callCount, keysThatPreventDefault.length);
});

test("keydownCallback calls goVerticalMenu with expected parameters", ()=>{
	const context = {goVerticalMenu: new sinon.fake()};
	const event = {key: null, preventDefault: ()=>{}};
	
	event.key = "ArrowDown";
	sample.methods.keydownCallback.call(context, event, "item", "indexActiveItemInSubmenu", "indexActiveSubmenu", "hasSubmenu");	
	
	event.key = "ArrowUp";
	sample.methods.keydownCallback.call(context, event, "item", "indexActiveItemInSubmenu", "indexActiveSubmenu", "hasSubmenu");
	
	assert.equal(context.goVerticalMenu.callCount, 2);
	[["firstCall", {key: "ArrowDown"}],
	 ["lastCall",  {key: "ArrowUp"}] ].forEach((testObj)=>{
		const call = testObj[0];
		const event = testObj[1];
		assert.equal(context.goVerticalMenu[call].args[0], event.key);
		assert.equal(context.goVerticalMenu[call].args[1], "item");
		assert.equal(context.goVerticalMenu[call].args[2], "indexActiveItemInSubmenu");
	});
});

test("keydownCallback calls goRight with expected parameters", ()=>{
	const context = {goRight: new sinon.fake()};
	const event = {key: "ArrowRight", preventDefault: ()=>{}};	
	
	sample.methods.keydownCallback.call(context, event, "item", "indexActiveItemInSubmenu", "indexActiveSubmenu", "hasSubmenu");
	
	assert.equal(context.goRight.callCount, 1);	
	assert.equal(context.goRight.lastCall.args[0], "item");
	assert.equal(context.goRight.lastCall.args[1], "indexActiveSubmenu");
	assert.equal(context.goRight.lastCall.args[2], "hasSubmenu");
});

test("keydownCallback calls goLeft with expected parameters", ()=>{
	const context = {goLeft: new sinon.fake()};
	const event = {key: "ArrowLeft", preventDefault: ()=>{}};	
	
	sample.methods.keydownCallback.call(context, event, "item", "indexActiveItemInSubmenu", "indexActiveSubmenu", "hasSubmenu");
	
	assert.equal(context.goLeft.callCount, 1);	
	assert.equal(context.goLeft.lastCall.args[0], "item");
});

test("keydownCallback executes item with expected parameters", ()=>{
	const context = {dispatchItemEvent: new sinon.fake(), deactivateMenu: new sinon.fake()};
	const event = {key: "Enter", preventDefault: ()=>{}};	
	
	sample.methods.keydownCallback.call(context, event, {item: "item"}, "indexActiveItemInSubmenu", "indexActiveSubmenu", "hasSubmenu");
	
	assert.equal(context.deactivateMenu.callCount, 1);	
	assert.equal(context.dispatchItemEvent.callCount, 1);	
	assert.equal(context.dispatchItemEvent.lastCall.args[0], event);
	assert.equal(context.dispatchItemEvent.lastCall.args[1], "item");
});


test("topItemKeydownCallback calls event.preventDefault for processed keys", ()=>{
	const no = ()=>{};
	const context = {goVerticalTopLevel: no, goRightTopLevel: no, goLeftTopLevel: no};
	const event = {key: null, preventDefault: new sinon.fake()};
	const keysThatPreventDefault = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
	
	event.key = "Any";
	sample.methods.topItemKeydownCallback.call(context, event, "item");
	
	keysThatPreventDefault.forEach((key)=>{
		event.key = key;
		sample.methods.topItemKeydownCallback.call(context, event, "item");
	});
	
	assert.equal(event.preventDefault.callCount, keysThatPreventDefault.length);	
});

test("topItemKeydownCallback calls goVerticalTopLevel with expected parameters", ()=>{
	const context = {goVerticalTopLevel: new sinon.fake()};
	const event = {key: null, preventDefault: ()=>{}};
	
	event.key = "ArrowDown";
	sample.methods.topItemKeydownCallback.call(context, event, "item");	
	
	event.key = "ArrowUp";
	sample.methods.topItemKeydownCallback.call(context, event, "item");
	
	assert.equal(context.goVerticalTopLevel.callCount, 2);
	[["firstCall", {key: "ArrowDown"}],
	 ["lastCall",  {key: "ArrowUp"}] ].forEach((testObj)=>{
		const call = testObj[0];
		const event = testObj[1];
		assert.equal(context.goVerticalTopLevel[call].args[0], event.key);
		assert.equal(context.goVerticalTopLevel[call].args[1], "item");
	});
});

test("topItemKeydownCallback calls goRightTopLevel with expected parameters", ()=>{
	const context = {goRightTopLevel: new sinon.fake()};
	const event = {key: "ArrowRight", preventDefault: ()=>{}};	
	
	sample.methods.topItemKeydownCallback.call(context, event, "item");
	assert.equal(context.goRightTopLevel.callCount, 1);
});

test("topItemKeydownCallback calls goLeftTopLevel with expected parameters", ()=>{
	const context = {goLeftTopLevel: new sinon.fake()};
	const event = {key: "ArrowLeft", preventDefault: ()=>{}};	
	
	sample.methods.topItemKeydownCallback.call(context, event, "item");
	assert.equal(context.goLeftTopLevel.callCount, 1);
});


test("setKeyboardCursor calls setCursor with its parameter", ()=>{
	const context = {
		setCursor: new sinon.fake(),
		getIndexOfItemInMenuByUid: ()=>{},
		getSubmenuIndexByMemberUid: ()=>{}	
	};
	
	sample.methods.setKeyboardCursor.call(context, 123);
	assert.equal(context.setCursor.callCount, 1);
	assert.equal(context.setCursor.lastCall.args[0], 123);
});

test("setKeyboardCursor sets indices with return values of lookups", ()=>{
	const context = {
		setCursor: ()=>{},
		getIndexOfItemInMenuByUid: new sinon.fake(()=>2),
		getSubmenuIndexByMemberUid: new sinon.fake(()=>3),
		
		indexActiveItemInSubmenu: null,		
		indexActiveSubmenu: null,		
	};
	
	sample.methods.setKeyboardCursor.call(context, 123);
	assert.equal(context.indexActiveItemInSubmenu, 2);
	assert.equal(context.indexActiveSubmenu, 3);
	
	assert.equal(context.getIndexOfItemInMenuByUid.callCount, 1);
	assert.equal(context.getIndexOfItemInMenuByUid.lastCall.args[0], 123);
	
	assert.equal(context.getSubmenuIndexByMemberUid.callCount, 1);
	assert.equal(context.getSubmenuIndexByMemberUid.lastCall.args[0], 123);
});


test("getUidThatIsNotSeparator passes through item uid if it is not a separator", ()=>{
	const submenu = [ {item: {}, uid: 2}, {item: {type: "separator"}, uid: 4}, {item: {}, uid: 3} ];
	const startingIndex = 2;
	const direction = 1;
	
	assert.equal(sample.methods.getUidThatIsNotSeparator(submenu, startingIndex, direction), 3);
});

test("getUidThatIsNotSeparator returns first item uid that is not a separator by going backwards", ()=>{
	const submenu = [ {item: {}, uid: 2}, {item: {type: "separator"}, uid: 4}, {item: {}, uid: 3} ];
	const startingIndex = 1;
	const direction = -1;

	assert.equal(sample.methods.getUidThatIsNotSeparator(submenu, startingIndex, direction), 2);
});

test("getUidThatIsNotSeparator returns first item uid that is not a separator by going forwards", ()=>{
	const submenu = [ {item: {}, uid: 2}, {item: {type: "separator"}, uid: 4}, {item: {}, uid: 3} ];
	const startingIndex = 1;
	const direction = 1;
	
	assert.equal(sample.methods.getUidThatIsNotSeparator(submenu, startingIndex, direction), 3);
});

test("getUidThatIsNotSeparator skips items if going out of bounds", ()=>{
	const submenu = [ {item: {type: "separator"}, uid: 2}, {item: {}, uid: 4}, {item: {type: "separator"}, uid: 3} ];
	let startingIndex = null;
	let direction = null;
	
	startingIndex = 2;
	direction = 1;
	assert.equal(sample.methods.getUidThatIsNotSeparator(submenu, startingIndex, direction), 4);	
	
	startingIndex = 0;
	direction = -1;
	assert.equal(sample.methods.getUidThatIsNotSeparator(submenu, startingIndex, direction), 4);
});

test("getUidThatIsNotSeparator returns null if all items are separators", ()=>{
	const submenu = [ {item: {type: "separator"}, uid: 2}, {item: {type: "separator"}, uid: 4}, {item: {type: "separator"}, uid: 3} ];
	const startingIndex = 1;
	const direction = 1;
	
	assert.strictEqual(sample.methods.getUidThatIsNotSeparator(submenu, startingIndex, direction), null);	
});


test("getActiveSubmenu returns last element in submenus array or undefined", ()=>{
	assert.strictEqual(sample.methods.getActiveSubmenu.call({activeSubmenus: []}), undefined);
	assert.strictEqual(sample.methods.getActiveSubmenu.call({activeSubmenus: [1]}), 1);
});


test("getElementAtNextIndex returns element, index at next index by direction", ()=>{
	const array = [2, 1, 3];
	const startingIndex = 1;
	let direction = null;
	
	direction = 1;
	assert.deepEqual(sample.methods.getElementAtNextIndex(array, startingIndex, direction), {item: 3, index: 2});	
	
	direction = -1;
	assert.deepEqual(sample.methods.getElementAtNextIndex(array, startingIndex, direction), {item: 2, index: 0});
});

test("getElementAtNextIndex loops around at array bounds", ()=>{
	const array = [2, 1, 3];
	let startingIndex = null;
	let direction = null;
	
	startingIndex = 2;
	direction = 1;
	assert.deepEqual(sample.methods.getElementAtNextIndex(array, startingIndex, direction), {item: 2, index: 0});	
	
	startingIndex = 0;
	direction = -1;
	assert.deepEqual(sample.methods.getElementAtNextIndex(array, startingIndex, direction), {item: 3, index: 2});
});

test("goHorizontalTopLevel sets new cursor without submenus open", async ()=>{
	const openedSubmenus = [];
	const context = {
		activeSubmenusIds: openedSubmenus,
		activeSubmenus: [],
		currentCursorItemUid: 2,
		rootMenuItems: [],
		
		gotoSubmenuRoot: new sinon.fake(),
		getItemByUid: ()=>{},
		getElementAtNextIndex: ()=>({item: {uid: 2}}),
		setKeyboardCursor: new sinon.fake()
	};
	
	await sample.methods.goHorizontalTopLevel.call(context, null);
	assert.equal(context.setKeyboardCursor.callCount, 1);
	assert.equal(context.setKeyboardCursor.lastCall.args[0], 2);
	assert.equal(context.gotoSubmenuRoot.callCount, 0);
});

test("goHorizontalTopLevel sets new cursor with submenu open", async ()=>{
	const openedSubmenus = ["any"];
	const context = {
		activeSubmenusIds: openedSubmenus,
		activeSubmenus: [{menu: [{uid: 2}]}],
		currentCursorItemUid: null,
		rootMenuItems: [],
		
		gotoSubmenuRoot: new sinon.fake(),
		getItemByUid: ()=>{},
		getElementAtNextIndex: ()=>({item: {uid: 3}}),
		setKeyboardCursor: new sinon.fake()
	};
	
	await sample.methods.goHorizontalTopLevel.call(context, null);
	assert.equal(context.setKeyboardCursor.callCount, 1);
	assert.equal(context.setKeyboardCursor.lastCall.args[0], 2);
	assert.equal(context.gotoSubmenuRoot.callCount, 1);
	assert.equal(context.gotoSubmenuRoot.lastCall.args[0], 3);
});

test("goHorizontalTopLevel calls helper functions with expected parameters", async ()=>{
	const rootUid = 2;
	const item = {item: {uid: 4}};
	const context = {
		activeSubmenusIds: [],
		activeSubmenus: [{menu: [{uid: 3}]}],
		currentCursorItemUid: null,
		rootMenuItems: [],
		
		getItemByUid: new sinon.fake(),
		getElementAtNextIndex: new sinon.fake( ()=>(item) ),
		setKeyboardCursor: ()=>{},
		gotoSubmenuRoot: ()=>{}
	};	
	
	
	context.activeSubmenusIds = [rootUid];
	await sample.methods.goHorizontalTopLevel.call(context, "deltaIndex");
	
	assert.equal(context.getItemByUid.callCount, 1);
	assert.equal(context.getItemByUid.lastCall.args[0], rootUid);
	
	assert.equal(context.getElementAtNextIndex.callCount, 1);
	assert.equal(context.getElementAtNextIndex.lastCall.args[0], context.rootMenuItems);
	assert.equal(context.getElementAtNextIndex.lastCall.args[1], -1);
	assert.equal(context.getElementAtNextIndex.lastCall.args[2], "deltaIndex");
	

	context.activeSubmenusIds = [];
	context.currentCursorItemUid = rootUid;
	await sample.methods.goHorizontalTopLevel.call(context, "deltaIndex");
	
	assert.equal(context.getItemByUid.callCount, 2);
	assert.equal(context.getItemByUid.lastCall.args[0], rootUid);	
});


test("goVerticalMenu moves cursor up or down", ()=>{
	const activeSubmenu = {menu: [2, 1, 3]};
	const context = {
		getActiveSubmenu: ()=>activeSubmenu,
		getUidThatIsNotSeparator: (menu, idx)=>(menu[idx]),
		
		setKeyboardCursor: new sinon.fake()
	};
	
	let item = 1;
	let itemsIndex = 1;
	let dir = "ArrowDown";
	let nextId = 3;
	sample.methods.goVerticalMenu.call(context, dir, item, itemsIndex);
	assert.equal(context.setKeyboardCursor.callCount, 1);
	assert.equal(context.setKeyboardCursor.lastCall.args[0], nextId);
	
	dir = "ArrowUp";
	nextId = 2;
	sample.methods.goVerticalMenu.call(context, dir, item, itemsIndex);
	assert.equal(context.setKeyboardCursor.callCount, 2);
	assert.equal(context.setKeyboardCursor.lastCall.args[0], nextId);
});

test("goVerticalMenu moves cursor to top or bottom in submenu", ()=>{
	const activeSubmenu = {menu: [2, 1, 3]};
	const context = {
		getActiveSubmenu: ()=>activeSubmenu,
		getUidThatIsNotSeparator: (menu, idx)=>(menu[idx]),
		
		setKeyboardCursor: new sinon.fake()
	};
	
	let parentItem = 4;
	let childItemsIndex = 1;
	let dir = "ArrowDown";
	let nextId = 2;	
	sample.methods.goVerticalMenu.call(context, dir, parentItem, childItemsIndex);
	assert.equal(context.setKeyboardCursor.callCount, 1);
	assert.equal(context.setKeyboardCursor.lastCall.args[0], nextId);	
	
	dir = "ArrowUp";
	nextId = 3;
	sample.methods.goVerticalMenu.call(context, dir, parentItem, childItemsIndex);
	assert.equal(context.setKeyboardCursor.callCount, 2);
	assert.equal(context.setKeyboardCursor.lastCall.args[0], nextId);	
});


test("goRight moves cursor to first item in submenu", async ()=>{
	const context = {
		getActiveSubmenu: ()=>({menu: [{uid: 123}]}),
		setKeyboardCursor: new sinon.fake(),
		showSubmenu: new sinon.fake(),
		activeSubmenus: [1,2,3]
	};	
	
	const item = {uid: 456};
	const hasSubmenu = true;
	const indexActiveSubmenu = 2;	
	
	await sample.methods.goRight.call(context, item, indexActiveSubmenu, hasSubmenu);	
	assert.equal(context.showSubmenu.callCount, 1);
	assert.equal(context.showSubmenu.lastCall.args[0], 456);	
	assert.equal(context.setKeyboardCursor.callCount, 1);
	assert.equal(context.setKeyboardCursor.lastCall.args[0], 123);	
});

test("goRight calls goHorizontalTopLevel with direction parameter", async ()=>{
	const context = {
		goHorizontalTopLevel: new sinon.fake(),
		activeSubmenus: []
	};
	
	let indexActiveSubmenu = null;
	let hasSubmenu = false;
	await sample.methods.goRight.call(context, null, indexActiveSubmenu, hasSubmenu);	
	assert.equal(context.goHorizontalTopLevel.callCount, 1);
	assert.strictEqual(context.goHorizontalTopLevel.lastCall.args[0], 1);
	
	hasSubmenu = true;
	context.activeSubmenus = [1,2,3];
	indexActiveSubmenu = 1;
	await sample.methods.goRight.call(context, null, indexActiveSubmenu, hasSubmenu);	
	assert.equal(context.goHorizontalTopLevel.callCount, 2);
	assert.strictEqual(context.goHorizontalTopLevel.lastCall.args[0], 1);	
	
});


test("goLeft closes last submenu and moves cursor to its parent item", async ()=>{
	const item = 2;
	const parentUid = 5;	
	const moreThanOneSubmenusOpen = ["one", "two"];
	const activeSubmenu = {menu: [3,2,4], parentUid};
	const context = {
		activeSubmenusIds: moreThanOneSubmenusOpen,		
		getActiveSubmenu: ()=>activeSubmenu,
		
		hideLastSubmenu: new sinon.fake(),
		setKeyboardCursor: new sinon.fake()
	};
	
	await sample.methods.goLeft.call(context, item);
	assert.equal(context.hideLastSubmenu.callCount, 1);
	assert.equal(context.setKeyboardCursor.callCount, 1);
	assert.equal(context.setKeyboardCursor.lastCall.args[0], parentUid);
});

test("goLeft closes last submenu and leaves cursor at current item if cursor is over item with submenu that is opened", async ()=>{
	const itemNotInActiveSubmenu = {uid: 5};
	const moreThanOneSubmenusOpen = ["one", "two"];
	const activeSubmenu = {menu: [3,2,4]};
	const context = {
		activeSubmenusIds: moreThanOneSubmenusOpen,		
		getActiveSubmenu: ()=>activeSubmenu,
		
		hideLastSubmenu: new sinon.fake(),
		setKeyboardCursor: new sinon.fake()
	};
	
	await sample.methods.goLeft.call(context, itemNotInActiveSubmenu);
	assert.equal(context.hideLastSubmenu.callCount, 1);
	assert.equal(context.setKeyboardCursor.callCount, 1);
	assert.equal(context.setKeyboardCursor.lastCall.args[0], itemNotInActiveSubmenu.uid);	
});

test("goLeft calls goHorizontalTopLevel with direction parameter", async ()=>{
	const lessThanOneSubmenusOpen = ["one"];
	const context = {
		activeSubmenusIds: lessThanOneSubmenusOpen,	
		goHorizontalTopLevel: new sinon.fake()
	};	
	
	await sample.methods.goLeft.call(context, null);
	assert.equal(context.goHorizontalTopLevel.callCount, 1);
	assert.equal(context.goHorizontalTopLevel.lastCall.args[0], -1);
});


test("goVerticalTopLevel moves cursor to top or bottom of submenu if submenu open", async ()=>{
	const context = {
		activeSubmenus: [{menu: [{uid: 2}, {uid: 1}, {uid: 3} ]}],
		setKeyboardCursor: new sinon.fake()
	};
	
	let dir = "ArrowDown";
	let uid = 2;
	await sample.methods.goVerticalTopLevel.call(context, dir, null);
	assert.equal(context.setKeyboardCursor.callCount, 1);
	assert.equal(context.setKeyboardCursor.lastCall.args[0], uid);	
	
	dir = "ArrowUp";
	uid = 3;
	await sample.methods.goVerticalTopLevel.call(context, dir, null);
	assert.equal(context.setKeyboardCursor.callCount, 2);
	assert.equal(context.setKeyboardCursor.lastCall.args[0], uid);
});

test("goVerticalTopLevel opens first submenu and moves cursor to first item", async ()=>{
	const futureSubmenus = [{menu: [{uid: 2}, {uid: 1}, {uid: 3} ]}]
	
	const context = {
		activeSubmenus: [],
		setKeyboardCursor: new sinon.fake(),
		gotoSubmenuRoot: new sinon.fake(()=>{ context.activeSubmenus = futureSubmenus; }),
	};
	
	const item = {uid: 123};
	let dir = "ArrowDown";
	let uid = 2;
	await sample.methods.goVerticalTopLevel.call(context, dir, item);
	assert.equal(context.setKeyboardCursor.callCount, 1);
	assert.equal(context.setKeyboardCursor.lastCall.args[0], uid);	

	assert.equal(context.gotoSubmenuRoot.callCount, 1);
	assert.equal(context.gotoSubmenuRoot.lastCall.args[0], item.uid);
	
	dir = "ArrowUp";
	uid = 2;
	context.activeSubmenus = [];
	await sample.methods.goVerticalTopLevel.call(context, dir, item);
	assert.equal(context.setKeyboardCursor.callCount, 2);
	assert.equal(context.setKeyboardCursor.lastCall.args[0], uid);	
});


test("goRightTopLevel calls goHorizontalTopLevel with direction parameter", async ()=>{
	const context = {
		goHorizontalTopLevel: new sinon.fake()
	};	
	
	await sample.methods.goRightTopLevel.call(context, null);
	assert.equal(context.goHorizontalTopLevel.callCount, 1);
	assert.strictEqual(context.goHorizontalTopLevel.lastCall.args[0], 1);
});


test("goLeftTopLevel calls goHorizontalTopLevel with direction parameter", async ()=>{
	const context = {
		goHorizontalTopLevel: new sinon.fake()
	};	
	
	await sample.methods.goLeftTopLevel.call(context, null);
	assert.equal(context.goHorizontalTopLevel.callCount, 1);
	assert.equal(context.goHorizontalTopLevel.lastCall.args[0], -1);
});