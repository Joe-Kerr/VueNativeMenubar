const assert = require("assert");
const testSuite = require("../../../../../../+test_common/webdriverSuite.js");

const {By, until, Key} = testSuite;

//to=test objects
let driver, to={};

//
const common = require("../system_fix/common.js");
const {getMenuItemByLabel, expectItemsVisibleExclusive, mouseoverTo, waitForSubmenu} = common;
//

suite("Keyboard / mouse switching");

async function getHighlightedElements() {
	await driver.executeScript(`
		const actives = document.querySelectorAll(".native-menubar_item--active");
		const focuses = document.querySelectorAll(".native-menubar_item:focus");
		const report = {
			active: Array.prototype.slice.call(actives).map((el)=>(el.textContent)), 
			focus: Array.prototype.slice.call(focuses).map((el)=>(el.textContent))
		};
		
		document.getElementById("itemInFocus").textContent = JSON.stringify(report);
	`);
	const report = await to.itemInFocus.getText();
	return JSON.parse(report);
}

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

test("Mouse over to an item with submenu, then arrow right, is supposed to go to next top level menu", async ()=>{
	const root2 = await getMenuItemByLabel("2");	
	await root2.click();
	await mouseoverTo("2.2");

	const item = await getMenuItemByLabel("2.2");		
	await item.sendKeys(Key.ARROW_RIGHT);
	
	await expectItemsVisibleExclusive(["3.1"]);
});

test("Close submenu with keyboard (arrow left) then continue navigation with mouse in same submenu", async ()=>{
	const root2 = await getMenuItemByLabel("2");	
	await root2.click();
	
	await mouseoverTo("2.2");
	await mouseoverTo("2.2.3");	
	
	const item = await getMenuItemByLabel("2.2.3");		
	await item.sendKeys(Key.ARROW_LEFT);
	await mouseoverTo("2.2.2");	
	
	await expectItemsVisibleExclusive([
		"2.1", "2.2", "2.3", "2.4", 
		"2.2.1", "2.2.2", "2.2.3"
	]);
});

test("Keyboard navigation after mouse entered item with submenu but before submenu delay, cancels delayed submenu", async ()=>{
	const root2 = await getMenuItemByLabel("2");	
	await root2.click();	
	await mouseoverTo("2.3");	
	
	const item = await getMenuItemByLabel("2.3");		
	await mouseoverTo("2.2", false);
	await item.sendKeys(Key.ARROW_UP);
		
	await driver.sleep(200);
	
	await expectItemsVisibleExclusive([
		"2.1", "2.2", "2.3", "2.4", 
		"2.3.1", "2.3.2", "2.3.3"
	]);	
	
	const highlightedElements = await getHighlightedElements();
	assert.deepEqual(highlightedElements.active, ["2", "2.3"]);	
	assert.deepEqual(highlightedElements.focus, ["2.3.3"]);	
});


test("If mouse stays over item, then keyboard navigation, then moving mouse again: cannot detect mouseenter event yet", async ()=>{
	const root = await getMenuItemByLabel("1");	
	await root.click();	
	await mouseoverTo("1.1");
	
	const item = await getMenuItemByLabel("1.1");		
	await item.sendKeys(Key.ARROW_DOWN);
	await driver.actions({async: true})
					.move({duration: 30, x: 100, y: 50})
					.perform();
	await driver.sleep(200);
	const highlightedElements = await getHighlightedElements();
	assert.deepEqual(highlightedElements.focus, ["1.2"]);	//should be 1.1, workaround: mouseleave->mouseenter
});