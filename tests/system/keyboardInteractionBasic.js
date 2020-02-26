const assert = require("assert");
const testSuite = require("../../../../../../+test_common/webdriverSuite.js");

const {By, Key, until} = testSuite;

//to=test objects
let driver, to={};

const common = require("../system_fix/common.js");
const {getMenuItemByLabel, expectItemsVisibleExclusive, mouseoverTo} = common;

async function getElementInFocus() {
	await driver.executeScript(`
		document.getElementById("itemInFocus").textContent = document.activeElement.textContent;
	`);
	return to.itemInFocus.getText();
}

suite("Basic keyboard interaction");

before(async function() {		
	this.timeout(15000);
	
	//requires Apache
	await testSuite.open("http://localhost/OSS/vue_projects/projects/plugins/nativeMenubar/tests/system_fix/system_test.html");
	driver = testSuite.driver;
	
	await common.init({testObjects: to, driver, By, until});
});


afterEach(async ()=>{
	await to.reset.click();
});

test("With focus on root item by mouse click, left arrow focuses neighbouring left item and opens its submenu", async ()=>{
	const root = await getMenuItemByLabel("2");	
	await root.click();	
	await root.sendKeys(Key.ARROW_LEFT);
	
	await expectItemsVisibleExclusive(["1.1", "1.2", "1.3"]);
});

test("With focus on root item by mouse click, left arrow focuses on last item if active focus on first item", async ()=>{
	const root = await getMenuItemByLabel("1");	
	await root.click();	
	await root.sendKeys(Key.ARROW_LEFT);

	await expectItemsVisibleExclusive(["3.1"]);	
});

test("With focus on root item by mouse click, right arrow focuses neighbouring right item and opens its submenu", async ()=>{
	const root = await getMenuItemByLabel("2");	
	await root.click();	
	await root.sendKeys(Key.ARROW_RIGHT);

	await expectItemsVisibleExclusive(["3.1"]);		
});

test("With focus on root item by mouse click, right arrow focuses on first item if active focus on last item", async ()=>{
	const root = await getMenuItemByLabel("3");	
	await root.click();	
	await root.sendKeys(Key.ARROW_RIGHT);
	
	await expectItemsVisibleExclusive(["1.1", "1.2", "1.3"]);	
});

test("With focus on root item by mouse click, up arrow focuses on last item in submenu", async ()=>{
	const root = await getMenuItemByLabel("1");	
	await root.click();	
	await root.sendKeys(Key.ARROW_UP);	

	const focus = await getElementInFocus();
	assert.equal(focus, "1.3");
});

test("With focus on root item by mouse click, down arrow focuses on first item in submenu", async ()=>{
	const root = await getMenuItemByLabel("1");	
	await root.click();	
	await root.sendKeys(Key.ARROW_DOWN);	

	const focus = await getElementInFocus();
	assert.equal(focus, "1.1");	
});

test("With focus on submenu item, left arrow closes all submenus up to the focused menu", async ()=>{
	const root = await getMenuItemByLabel("2");	
	await root.click();
	await mouseoverTo("2.2");
	await mouseoverTo("2.2.3");	
	await mouseoverTo("2.2.3.1");	
	await mouseoverTo("2.2.3.1.1");	
	await root.sendKeys(Key.ARROW_LEFT);	
	await root.sendKeys(Key.ARROW_LEFT);	
	await root.sendKeys(Key.ARROW_LEFT);	

	await expectItemsVisibleExclusive(["2.1", "2.2", "2.3", "2.4", ]);	
});

test("With focus on submenu item, left arrow moves cursor to first submenu item of neighbouring left root item if no other submenus are opened", async ()=>{
	const root = await getMenuItemByLabel("2");	
	await root.click();
	await mouseoverTo("2.4");
	await root.sendKeys(Key.ARROW_LEFT);	
	
	await expectItemsVisibleExclusive(["1.1", "1.2", "1.3"]);
});

test("With focus on submenu item with submenu itself, right arrow opens sub-submenu", async ()=>{
	const root = await getMenuItemByLabel("3");
	await root.click();	
	await root.sendKeys(Key.ARROW_DOWN);
	
	const item = await getMenuItemByLabel("3.1");	
	await item.sendKeys(Key.ARROW_RIGHT);
	
	await expectItemsVisibleExclusive(["3.1", "3.1.1"]);
});

test("With focus on submenu item without submenu, right arrow moves cursor to first submenu item of neighbouring right root item", async ()=>{
	const root = await getMenuItemByLabel("2");	
	await root.click();
	await mouseoverTo("2.4");
	
	const item = await getMenuItemByLabel("2.4");	
	await item.sendKeys(Key.ARROW_RIGHT);	
	
	await expectItemsVisibleExclusive(["3.1"]);	
});

test("With focus on submenu item, up arrow moves cursor up by one", async ()=>{
	const root = await getMenuItemByLabel("2");	
	await root.click();
	await mouseoverTo("2.4");

	const item = await getMenuItemByLabel("2.4");	
	await item.sendKeys(Key.ARROW_UP);

	const focus = await getElementInFocus();
	assert.equal(focus, "2.3");		
});

test("With focus on submenu item, up arrow moves cursor to last item if focus on first", async ()=>{
	const root = await getMenuItemByLabel("2");	
	await root.click();
	await mouseoverTo("2.1");

	const item = await getMenuItemByLabel("2.1");	
	await item.sendKeys(Key.ARROW_UP);	
	
	const focus = await getElementInFocus();
	assert.equal(focus, "2.4");		
});

test("With focus on submenu item, down arrow moves cursor down by one", async ()=>{
	const root = await getMenuItemByLabel("2");	
	await root.click();
	await mouseoverTo("2.1");
	
	const item = await getMenuItemByLabel("2.1");	
	await item.sendKeys(Key.ARROW_DOWN);	

	const focus = await getElementInFocus();
	assert.equal(focus, "2.2");		
});

test("With focus on submenu item, down arrow moves cursor to first item if focus on last", async ()=>{
	const root = await getMenuItemByLabel("2");	
	await root.click();
	await mouseoverTo("2.4");
	
	const item = await getMenuItemByLabel("2.4");	
	await item.sendKeys(Key.ARROW_DOWN);	

	const focus = await getElementInFocus();
	assert.equal(focus, "2.1");		
});

test("Cursor up and down movement does not open submenus", async ()=>{
	let item;
	const root = await getMenuItemByLabel("2");	
	await root.click();	
	await mouseoverTo("2.1");
	
	item = await getMenuItemByLabel("2.1");	
	await item.sendKeys(Key.ARROW_DOWN);
	await expectItemsVisibleExclusive(["2.1", "2.2", "2.3", "2.4", ]);	
	
	item = await getMenuItemByLabel("2.2");	
	await item.sendKeys(Key.ARROW_DOWN);
	item = await getMenuItemByLabel("2.3");	
	await item.sendKeys(Key.ARROW_UP);
	await expectItemsVisibleExclusive(["2.1", "2.2", "2.3", "2.4", ]);	
	
});

test("With mouse over item with submenu, down arrow moves cursor to first item in sub-submenu", async ()=>{
	const root = await getMenuItemByLabel("2");	
	await root.click();	
	await mouseoverTo("2.2");	
	
	item = await getMenuItemByLabel("2.2");	
	await item.sendKeys(Key.ARROW_DOWN);	
	
	const focus = await getElementInFocus();
	assert.equal(focus, "2.2.1");		
});

test("With mouse over item with submenu, up arrow moves cursor to last item in sub-submenu", async ()=>{
	const root = await getMenuItemByLabel("2");	
	await root.click();	
	await mouseoverTo("2.2");	
	
	item = await getMenuItemByLabel("2.2");	
	await item.sendKeys(Key.ARROW_UP);	
	
	const focus = await getElementInFocus();
	assert.equal(focus, "2.2.3");		
});

test("With mouse over item with submenu while sub-submenu open, right arrow moves cursor to first submenu item of neighbouring right root item", async ()=>{
	const root = await getMenuItemByLabel("2");	
	await root.click();		
	
	await mouseoverTo("2.2");
	
	const item = await getMenuItemByLabel("2.2");	
	await item.sendKeys(Key.ARROW_RIGHT);	
	
	await expectItemsVisibleExclusive(["3.1"]);		
});