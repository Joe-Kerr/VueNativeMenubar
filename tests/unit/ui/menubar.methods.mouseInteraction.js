const assert = require("assert");
const sinon = require("sinon");
const sample = require("../../../src/ui/menubar.methods.mouseInteraction.js").default;

suite("menubar.methods.mouseInteraction.js");

test("setHighlightedItems sets currently focused item uid", ()=>{
	const context = {
		focusedUid: null,
		highlightedUids: [],
		activeSubmenusIds: []
	};
	
	sample.methods.setHighlightedItems.call(context, 123, 0);
	assert.equal(context.focusedUid, 123);
});

test("setHighlightedItems copies opened submenu ids to highlighted ids until mouseover'ed submenu", ()=>{
	const context = {
		focusedUid: null,
		highlightedUids: [],
		activeSubmenusIds: [4, 2, 5, 1, 3]
		//indices			0  1  2  3  4
	};	
	const indexOfSubmenuMouseIsOver = 2;
	
	sample.methods.setHighlightedItems.call(context, 123, indexOfSubmenuMouseIsOver);
	assert.deepEqual(context.highlightedUids, [4, 2, 5]);
});

test("setMouseCursor calls setCursor with its uid parameter", ()=>{
	const context = {
		setCursor: new sinon.fake()
	};
	
	sample.methods.setMouseCursor.call(context, 123);
	assert.equal(context.setCursor.callCount, 1);
	assert.equal(context.setCursor.lastCall.args, 123);
});

test("setMouseCursor writes its index parameters to properies", ()=>{
	const context = {
		setCursor: ()=>{},
		indexActiveItemInSubmenu: null,
		indexActiveSubmenu: null
	};
	
	sample.methods.setMouseCursor.call(context, 1, 2, 3);	
	assert.equal(context.indexActiveItemInSubmenu, 2);
	assert.equal(context.indexActiveSubmenu, 3);
});

test("handleRenderNewSubmenu calls showSubmenu with parameter uid if item has no submenu and uid not yet rendered", ()=>{
	const context = {
		activeSubmenusIds: [123],
		showSubmenu: new sinon.fake()
	};
	
	sample.methods.handleRenderNewSubmenu.call(context, 123, true);
	assert.equal(context.showSubmenu.callCount, 0);	
	
	sample.methods.handleRenderNewSubmenu.call(context, 456, false);
	assert.equal(context.showSubmenu.callCount, 0);	
	
	sample.methods.handleRenderNewSubmenu.call(context, 456, true);
	assert.equal(context.showSubmenu.callCount, 1);
	assert.equal(context.showSubmenu.lastCall.args[0], 456);
});


[	
//handleDestroySubmenu...	
	{description: "does nothing if mouse is not moving back or is over last opened submenu", 	 index: 2, vector:  0, callsAfter: 0, callsLast: 0, arg: undefined},
	{description: "calls hideSubmenusAfterThisId with active menu's id if mouse is moving back", index: 2, vector: -1, callsAfter: 1, callsLast: 0, arg: 123},
	{description: "does nothing if mouse is not moving back or over last opened submenu", 		 index: 1, vector:  0, callsAfter: 0, callsLast: 1, arg: undefined}
	
].forEach((testObj)=>{
	
	test("handleDestroySubmenu "+testObj.description, ()=>{
		const context = {
			activeSubmenus: [{parentUid: 2}, {parentUid: 1}, {parentUid: 123}],
			hideSubmenusAfterThisId: new sinon.fake(),
			hideLastSubmenu: new sinon.fake(),
		};
		
		const indexOfSubmenuMouseIsOver = testObj.index;
		const crossMenuTransitVector = testObj.vector;
		
		sample.methods.handleDestroySubmenu.call(context, indexOfSubmenuMouseIsOver, crossMenuTransitVector);
		
		assert.equal(context.hideLastSubmenu.callCount, testObj.callsLast);
		assert.equal(context.hideSubmenusAfterThisId.callCount, testObj.callsAfter);
		if(testObj.arg) {
			assert.equal(context.hideSubmenusAfterThisId.lastCall.args[0], testObj.arg);
		}
					
	});
	
});

test("openCloseSubmenu calls getSubmenuTransitVector with previous and current active submenu index", ()=>{
	const context = {
		indexActiveSubmenu: 123,
		getSubmenuTransitVector: new sinon.fake(),
		setMouseCursor: ()=>{},
		handleDestroySubmenu: ()=>{},
		handleRenderNewSubmenu: ()=>{},
	};
	const currentIndex = 456;
	
	sample.methods.openCloseSubmenu.call(context, null, null, currentIndex, null);
	assert.equal(context.getSubmenuTransitVector.callCount, 1);
	assert.equal(context.getSubmenuTransitVector.lastCall.args[0], 123);
	assert.equal(context.getSubmenuTransitVector.lastCall.args[1], 456);
});

test("openCloseSubmenu calls setMouseCursor with expected parameters", ()=>{
	const context = {
		getSubmenuTransitVector: ()=>{},
		setMouseCursor: new sinon.fake(),
		handleDestroySubmenu: ()=>{},
		handleRenderNewSubmenu: ()=>{},
	};
	const uid = 123;
	const itemIndex = 456;
	const submenuIndex = 789;
	
	sample.methods.openCloseSubmenu.call(context, uid, itemIndex, submenuIndex, null);
	assert.equal(context.setMouseCursor.callCount, 1);
	assert.equal(context.setMouseCursor.lastCall.args[0], 123);
	assert.equal(context.setMouseCursor.lastCall.args[1], 456);	
	assert.equal(context.setMouseCursor.lastCall.args[2], 789);	
});

test("openCloseSubmenu calls handleDestroySubmenu with expected parameters", ()=>{
	const context = {
		getSubmenuTransitVector: ()=>456,
		setMouseCursor: ()=>{},
		handleDestroySubmenu: new sinon.fake(),
		handleRenderNewSubmenu: ()=>{},
	};

	const submenuIndex = 123;
	
	sample.methods.openCloseSubmenu.call(context, null, null, submenuIndex, null);
	assert.equal(context.handleDestroySubmenu.callCount, 1);
	assert.equal(context.handleDestroySubmenu.lastCall.args[0], 123);
	assert.equal(context.handleDestroySubmenu.lastCall.args[1], 456);		
});

test("openCloseSubmenu calls handleRenderNewSubmenu with expected parameters", ()=>{
	const context = {
		getSubmenuTransitVector: ()=>{},
		setMouseCursor: ()=>{},
		handleDestroySubmenu: ()=>{},
		handleRenderNewSubmenu: new sinon.fake(),
	};

	const uid = 123;
	const hasSubmenu = 456;
	
	sample.methods.openCloseSubmenu.call(context, uid, null, null, hasSubmenu);
	assert.equal(context.handleRenderNewSubmenu.callCount, 1);
	assert.equal(context.handleRenderNewSubmenu.lastCall.args[0], 123);
	assert.equal(context.handleRenderNewSubmenu.lastCall.args[1], 456);		
});

test("openCloseSubmenu calls critical functions in correct order", ()=>{
	const context = {
		getSubmenuTransitVector: ()=>{},
		setMouseCursor: new sinon.fake(),
		handleDestroySubmenu: new sinon.fake(),
		handleRenderNewSubmenu: new sinon.fake(),
	};

	sample.methods.openCloseSubmenu.call(context, null, null, null, null);	
	assert.ok( context.setMouseCursor.calledBefore(context.handleDestroySubmenu) );
	assert.ok( context.handleDestroySubmenu.calledBefore(context.handleRenderNewSubmenu) );
});

test("delayOpenCloseSubmenu stores timeout reference and calls it with expected parameters", ()=>{
	const backup = global.setTimeout;
	global.setTimeout = new sinon.fake(()=>123);
	
	const context = {
		currentSubmenuTimeout: null,
		isMenuActive: null,
		openCloseSubmenu: ()=>{},
		menuShowTimeoutMs: 456
	};
	
	sample.methods.delayOpenCloseSubmenu.call(context);
	assert.equal(context.currentSubmenuTimeout, 123);
	assert.equal(global.setTimeout.callCount, 1);
	assert.equal(typeof global.setTimeout.lastCall.args[0], "function");
	assert.equal(global.setTimeout.lastCall.args[1], 456);
	
	global.setTimeout = backup;
});

test("delayOpenCloseSubmenu returns before callback if menu became inactive", ()=>{
	const backup = global.setTimeout;
	global.setTimeout = new sinon.fake(()=>123);
	
	const context = {
		currentSubmenuTimeout: null,
		isMenuActive: null,
		openCloseSubmenu: new sinon.fake(),
		menuShowTimeoutMs: 456
	};
	
	context.isMenuActive = false;
	sample.methods.delayOpenCloseSubmenu.call(context);
	global.setTimeout.lastCall.args[0]();
	assert.equal(context.openCloseSubmenu.callCount, 0);
	
	global.setTimeout = backup;
});

test("delayOpenCloseSubmenu calls callback with its parameters", ()=>{
	const backup = global.setTimeout;
	global.setTimeout = new sinon.fake(()=>123);
	
	const context = {
		currentSubmenuTimeout: null,
		isMenuActive: null,
		openCloseSubmenu: new sinon.fake(),
		menuShowTimeoutMs: 456
	};
	
	const paramsPassedThrough = ["uid", "itemIndexInSubmenu", "submenuIndex", "hasSubmenu"];
	
	context.isMenuActive = true;
	sample.methods.delayOpenCloseSubmenu.apply(context, paramsPassedThrough);
	global.setTimeout.lastCall.args[0]();
	assert.equal(context.openCloseSubmenu.callCount, 1);
	assert.deepEqual(context.openCloseSubmenu.lastCall.args, paramsPassedThrough);
	
	global.setTimeout = backup;
});

test("cancelOpenCloseSubmenu calls clearTimeout with current timeout reference", ()=>{
	const backup = global.clearTimeout;
	global.clearTimeout = new sinon.fake();
	
	const context = {currentSubmenuTimeout: 123}
	
	sample.methods.cancelOpenCloseSubmenu.call(context);
	assert.equal(global.clearTimeout.callCount, 1);
	assert.equal(global.clearTimeout.lastCall.args[0], 123);
	
	global.clearTimeout = backup;
});

test("syncHighlightedWithActiveItems clears array of highlighted submenu ids, then copies opened submenu ids into it", ()=>{
	const context = {
		highlightedUids: ["a", "b", "c"],
		activeSubmenusIds: [1, 2, 3]
	};
	
	sample.methods.syncHighlightedWithActiveItems.call(context);
	
	assert.deepEqual(context.highlightedUids, [1, 2, 3]);
	assert.notEqual(context.highlightedUids, context.activeSubmenusIds);
});

test("itemClickCallback calls dispatchItemEvent with its parameters", ()=>{
	const context = {
		dispatchItemEvent: new sinon.fake(),
		deactivateMenu: ()=>{}
	};
	
	sample.methods.itemClickCallback.call(context, "event", "item");
	assert.equal(context.dispatchItemEvent.callCount, 1);
	assert.equal(context.dispatchItemEvent.lastCall.args[0], "event");
	assert.equal(context.dispatchItemEvent.lastCall.args[1], "item");
});

test("itemClickCallback calls deactivateMenu", ()=>{
	const context = {
		dispatchItemEvent: ()=>{},
		deactivateMenu: new sinon.fake()
	};
	
	sample.methods.itemClickCallback.call(context);
	assert.equal(context.deactivateMenu.callCount, 1);
});

test("itemMouseenterCallback calls switchInputMode with 'mouse'", ()=>{
	const context = {
		switchInputMode: new sinon.fake(),
		setHighlightedItems: ()=>{},
		cancelOpenCloseSubmenu: ()=>{},
		delayOpenCloseSubmenu: ()=>{}
	};	
	
	sample.methods.itemMouseenterCallback.call(context);
	assert.equal(context.switchInputMode.callCount, 1);
	assert.equal(context.switchInputMode.lastCall.args[0], "mouse");
});

test("itemMouseenterCallback calls setHighlightedItems with expected parameters", ()=>{
	const context = {
		switchInputMode: ()=>{},
		setHighlightedItems: new sinon.fake(),
		cancelOpenCloseSubmenu: ()=>{},
		delayOpenCloseSubmenu: ()=>{}
	};	
	
	sample.methods.itemMouseenterCallback.call(context, "uid", null, "itemIndex", null);
	assert.equal(context.setHighlightedItems.callCount, 1);
	assert.equal(context.setHighlightedItems.lastCall.args[0], "uid");
	assert.equal(context.setHighlightedItems.lastCall.args[1], "itemIndex");
});

test("itemMouseenterCallback calls cancelOpenCloseSubmenu", ()=>{
	const context = {
		switchInputMode: ()=>{},
		setHighlightedItems: ()=>{},
		cancelOpenCloseSubmenu: new sinon.fake(),
		delayOpenCloseSubmenu: ()=>{}
	};	
	
	sample.methods.itemMouseenterCallback.call(context);
	assert.equal(context.cancelOpenCloseSubmenu.callCount, 1);
});

test("itemMouseenterCallback calls delayOpenCloseSubmenu with expected parameters", ()=>{
	const context = {
		switchInputMode: ()=>{},
		setHighlightedItems: ()=>{},
		cancelOpenCloseSubmenu: ()=>{},
		delayOpenCloseSubmenu: new sinon.fake()
	};	
	
	sample.methods.itemMouseenterCallback.call(context, "uid", "submenuIndex", "itemIndex", "hasSubmenu");
	assert.equal(context.delayOpenCloseSubmenu.callCount, 1);
	assert.equal(context.delayOpenCloseSubmenu.lastCall.args[0], "uid");
	assert.equal(context.delayOpenCloseSubmenu.lastCall.args[1], "submenuIndex");
	assert.equal(context.delayOpenCloseSubmenu.lastCall.args[2], "itemIndex");
	assert.equal(context.delayOpenCloseSubmenu.lastCall.args[3], "hasSubmenu");
});

test("topItemClickCallback calls toggleMenuActive with its parameter", ()=>{
	const context = {
		isMenuActive: null,
		toggleMenuActive: new sinon.fake(),
		setMouseCursor: ()=>{},
		setHighlightedItems: ()=>{},
		switchInputMode: ()=>{}
	};	
	
	sample.methods.topItemClickCallback.call(context, 123);
	assert.equal(context.toggleMenuActive.callCount, 1);
	assert.equal(context.toggleMenuActive.lastCall.args[0], 123);
});

test("topItemClickCallback calls switchInputMode, if menu is active, with expected parameters", ()=>{
	const context = {
		isMenuActive: null,
		toggleMenuActive: ()=>{},
		setMouseCursor: ()=>{},
		setHighlightedItems: ()=>{},
		switchInputMode: new sinon.fake()
	};	
	
	context.isMenuActive = false;
	sample.methods.topItemClickCallback.call(context, 123);	
	assert.equal(context.switchInputMode.callCount, 0);
	
	context.isMenuActive = true;
	sample.methods.topItemClickCallback.call(context, 123);
	assert.equal(context.switchInputMode.callCount, 1);
	assert.equal(context.switchInputMode.lastCall.args[0], "mouse");	
});

test("topItemClickCallback calls setMouseCursor, if menu is active, with expected parameters", ()=>{
	const context = {
		isMenuActive: null,
		toggleMenuActive: ()=>{},
		setMouseCursor: new sinon.fake(),
		setHighlightedItems: ()=>{},
		switchInputMode: ()=>{}
	};	
	
	context.isMenuActive = false;
	sample.methods.topItemClickCallback.call(context, 123);	
	assert.equal(context.setMouseCursor.callCount, 0);
	
	context.isMenuActive = true;
	sample.methods.topItemClickCallback.call(context, 123);
	assert.equal(context.setMouseCursor.callCount, 1);
	assert.equal(context.setMouseCursor.lastCall.args[0], 123);	
});

test("topItemClickCallback calls setHighlightedItems, if menu is active, with expected parameters", ()=>{
	const context = {
		isMenuActive: null,
		toggleMenuActive: ()=>{},
		setMouseCursor: ()=>{},
		setHighlightedItems: new sinon.fake(),
		switchInputMode: ()=>{}
	};	
	
	context.isMenuActive = false;
	sample.methods.topItemClickCallback.call(context, 123);	
	assert.equal(context.setHighlightedItems.callCount, 0);
	
	context.isMenuActive = true;
	sample.methods.topItemClickCallback.call(context, 123);
	assert.equal(context.setHighlightedItems.callCount, 1);
	assert.equal(context.setHighlightedItems.lastCall.args[0], 123);		
	assert.equal(context.setHighlightedItems.lastCall.args[1], -1);		
});

test("topItemMouseenterCallback calls switchInputMode, if menu is active, with 'mouse'", ()=>{
	const context = {
		isMenuActive: null,
		switchInputMode: new sinon.fake(),
		gotoSubmenuRoot: ()=>{},
		setMouseCursor: ()=>{},
		setHighlightedItems: ()=>{},
		cancelOpenCloseSubmenu: ()=>{},
	};	
	
	context.isMenuActive = false;
	sample.methods.topItemMouseenterCallback.call(context, 123);	
	assert.equal(context.switchInputMode.callCount, 0);		
	
	context.isMenuActive = true;
	sample.methods.topItemMouseenterCallback.call(context, 123);	
	assert.equal(context.switchInputMode.callCount, 1);	
	assert.equal(context.switchInputMode.lastCall.args[0], "mouse");	
});

test("topItemMouseenterCallback calls gotoSubmenuRoot, if menu is active, with its parameter", ()=>{
	const context = {
		isMenuActive: null,
		switchInputMode: ()=>{},
		gotoSubmenuRoot: new sinon.fake(),
		setMouseCursor: ()=>{},
		setHighlightedItems: ()=>{},
		cancelOpenCloseSubmenu: ()=>{},
	};	
	
	context.isMenuActive = false;
	sample.methods.topItemMouseenterCallback.call(context, 123);	
	assert.equal(context.gotoSubmenuRoot.callCount, 0);		
	
	context.isMenuActive = true;
	sample.methods.topItemMouseenterCallback.call(context, 123);	
	assert.equal(context.gotoSubmenuRoot.callCount, 1);	
	assert.equal(context.gotoSubmenuRoot.lastCall.args[0], 123);	
});

test("topItemMouseenterCallback calls setMouseCursor, if menu is active, with its parameter", ()=>{
	const context = {
		isMenuActive: null,
		switchInputMode: ()=>{},
		gotoSubmenuRoot: ()=>{},
		setMouseCursor: new sinon.fake(),
		setHighlightedItems: ()=>{},
		cancelOpenCloseSubmenu: ()=>{},
	};	
	
	context.isMenuActive = false;
	sample.methods.topItemMouseenterCallback.call(context, 123);	
	assert.equal(context.setMouseCursor.callCount, 0);		
	
	context.isMenuActive = true;
	sample.methods.topItemMouseenterCallback.call(context, 123);	
	assert.equal(context.setMouseCursor.callCount, 1);	
	assert.equal(context.setMouseCursor.lastCall.args[0], 123);	
});

test("topItemMouseenterCallback calls setHighlightedItems, if menu is active", ()=>{
	const context = {
		isMenuActive: null,
		switchInputMode: ()=>{},
		gotoSubmenuRoot: ()=>{},
		setMouseCursor: ()=>{},
		setHighlightedItems: new sinon.fake(),
		cancelOpenCloseSubmenu: ()=>{},
	};	
	
	context.isMenuActive = false;
	sample.methods.topItemMouseenterCallback.call(context, 123);	
	assert.equal(context.setHighlightedItems.callCount, 0);		
	
	context.isMenuActive = true;
	sample.methods.topItemMouseenterCallback.call(context, 123);	
	assert.equal(context.setHighlightedItems.callCount, 1);	
	assert.equal(context.setHighlightedItems.lastCall.args[0], 123);	
	assert.equal(context.setHighlightedItems.lastCall.args[1], -1);	
});

test("topItemMouseenterCallback calls cancelOpenCloseSubmenu, if menu is active", ()=>{
	const context = {
		isMenuActive: null,
		switchInputMode: ()=>{},
		gotoSubmenuRoot: ()=>{},
		setMouseCursor: ()=>{},
		setHighlightedItems: ()=>{},
		cancelOpenCloseSubmenu: new sinon.fake(),
	};	
	
	context.isMenuActive = false;
	sample.methods.topItemMouseenterCallback.call(context, 123);	
	assert.equal(context.cancelOpenCloseSubmenu.callCount, 0);		
	
	context.isMenuActive = true;
	sample.methods.topItemMouseenterCallback.call(context, 123);	
	assert.equal(context.cancelOpenCloseSubmenu.callCount, 1);		
});

test("mouseInputModeExit calls cancelOpenCloseSubmenu", ()=>{
	const context = {
		focusedUid: null,
		cancelOpenCloseSubmenu: new sinon.fake(),
		syncHighlightedWithActiveItems: ()=>{},
		setCursor: ()=>{},
	};
	
	sample.methods.mouseInputModeExit.call(context);
	assert.equal(context.cancelOpenCloseSubmenu.callCount, 1);
});

test("mouseInputModeExit calls syncHighlightedWithActiveItems", ()=>{
	const context = {
		focusedUid: null,
		cancelOpenCloseSubmenu: ()=>{},
		syncHighlightedWithActiveItems: new sinon.fake(),
		setCursor: ()=>{},
	};
	
	sample.methods.mouseInputModeExit.call(context);
	assert.equal(context.syncHighlightedWithActiveItems.callCount, 1);
});

test("mouseInputModeExit calls setCursor with focused item uid", ()=>{
	const context = {
		focusedUid: 123,
		cancelOpenCloseSubmenu: ()=>{},
		syncHighlightedWithActiveItems: ()=>{},
		setCursor: new sinon.fake(),
	};
	
	sample.methods.mouseInputModeExit.call(context);
	assert.equal(context.setCursor.callCount, 1);
	assert.equal(context.setCursor.lastCall.args[0], 123);
});

test("mouseInputModeExit nulls focused item uid", ()=>{
	const context = {
		focusedUid: 123,
		cancelOpenCloseSubmenu: ()=>{},
		syncHighlightedWithActiveItems: ()=>{},
		setCursor: ()=>{},
	};
	
	sample.methods.mouseInputModeExit.call(context);	
	assert.strictEqual(context.focusedUid, null);
});