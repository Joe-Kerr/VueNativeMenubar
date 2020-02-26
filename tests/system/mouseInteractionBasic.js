const assert = require("assert");
const testSuite = require("../../../../../../+test_common/webdriverSuite.js");

const {By, until} = testSuite;

//to=test objects
let driver, to={};

//
const common = require("../system_fix/common.js");
const {getMenuItemByLabel, expectItemsVisibleExclusive, mouseoverTo, waitForSubmenu} = common;
//

suite("Basic mouse interaction");

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

test("Click on inactive menubar item renders submenu", async ()=>{
	const root1 = await getMenuItemByLabel("1");
	await root1.click();
	await expectItemsVisibleExclusive(["1.1", "1.2", "1.3"]);
});

test("Click on active menubar item deactivates menubar", async ()=>{
	const root1 = await getMenuItemByLabel("1");
	await root1.click();	
	await root1.click();	
	await expectItemsVisibleExclusive([]);
});

test("Click on outside menubar deactivates menubar", async ()=>{
	const root1 = await getMenuItemByLabel("1");
	await root1.click();	
	await to.reset.click();	
	await expectItemsVisibleExclusive([]);	
});

test("Click on submenu item with submenu does nothing", async ()=>{
	const root3 = await getMenuItemByLabel("3");
	await root3.click();
	
	const sub31 = await getMenuItemByLabel("3.1");
	await sub31.click();	
	await waitForSubmenu("3.1.1");
	
	await expectItemsVisibleExclusive(["3.1", "3.1.1"]);	
});

test("Mouseover active menubar renders respective submenus", async ()=>{
	const root2 = await getMenuItemByLabel("2");	
	await root2.click();
	
	await mouseoverTo("1");
	await expectItemsVisibleExclusive(["1.1", "1.2", "1.3"]);		
	
	await mouseoverTo("2");
	await expectItemsVisibleExclusive(["2.1", "2.2", "2.3", "2.4"]);		
	
	await mouseoverTo("3");
	await expectItemsVisibleExclusive(["3.1"]);	
});

test("Mouseover submenu item with submenu renders sub-submenu", async ()=>{
	const root3 = await getMenuItemByLabel("3");
	await root3.click();	
	
	await mouseoverTo("3.1");
	
	await expectItemsVisibleExclusive(["3.1", "3.1.1"]);	
});

test("Mouseover submenu item with submenu while another submenu is open destroyes opened sub-submenu and renders new sub-submenu", async ()=>{
	const root2 = await getMenuItemByLabel("2");	
	await root2.click();
	await mouseoverTo("2.2");
	await mouseoverTo("2.3");

	await expectItemsVisibleExclusive([
		"2.1", "2.2", "2.3", "2.4", 
		"2.3.1", "2.3.2", "2.3.3"
	]);	
});

test("Mouseover renders nested submenus", async ()=>{
	const root2 = await getMenuItemByLabel("2");	
	await root2.click();
	await mouseoverTo("2.2");
	await mouseoverTo("2.2.3");	
	await mouseoverTo("2.2.3.1");	
	await mouseoverTo("2.2.3.1.1");	
	

	await expectItemsVisibleExclusive([
		"2.1", "2.2", "2.3", "2.4", 
		"2.2.1", "2.2.2", "2.2.3",
		"2.2.3.1", "2.2.3.2",
		"2.2.3.1.1",
	]);		
});

test("Mouseover from a 3rd level submenu into a 1st level submenu item with submenu, destroys 3rd and 2nd level submenus", async ()=>{
	const root2 = await getMenuItemByLabel("2");	
	await root2.click();
	await mouseoverTo("2.2");
	await mouseoverTo("2.2.3");	
	await mouseoverTo("2.2.3.2");
	
	await driver.actions({async: true})
					.move({duration: 30, x: 10, y: 150})
					.move({duration: 30, x: 10, y: 70})
					.perform();
					
	await mouseoverTo("2.3");

	await expectItemsVisibleExclusive([
		"2.1", "2.2", "2.3", "2.4", 
		"2.3.1", "2.3.2", "2.3.3",
	]);		
});

test("Mouseover from a 3rd level submenu, while a 4th level submenu is still opened, into a 1st level submenu item with submenu, destroys 4th, 3rd and 2nd level submenus", async ()=>{
	const root2 = await getMenuItemByLabel("2");	
	await root2.click();
	await mouseoverTo("2.2");
	await mouseoverTo("2.2.3");	
	await mouseoverTo("2.2.3.1");	
	
	await driver.actions({async: true})
					.move({duration: 30, x: 360, y: 60})
					.move({duration: 30, x: 580, y: 60})
					.move({duration: 30, x: 580, y: 200})
					.move({duration: 30, x: 30, y: 200})
					.move({duration: 30, x: 30, y: 90})
					.perform();

	await mouseoverTo("2.3");

	await expectItemsVisibleExclusive([
		"2.1", "2.2", "2.3", "2.4", 
		"2.3.1", "2.3.2", "2.3.3",
	]);						
});

//
// Highlighting
//

test("Highlighting and focus reset when swichting between nested submenus", async ()=>{
	const root2 = await getMenuItemByLabel("2");	
	await root2.click();
	await mouseoverTo("2.2");
	await mouseoverTo("2.2.1");	
	
	await driver.actions({async: true})
					.move({duration: 30, x: 260, y: 50})
					.perform();		
	
	await mouseoverTo("2.1");	
	
	await expectItemsVisibleExclusive([
		"2.1", "2.2", "2.3", "2.4"
	]);		
	
	const highlightedElements = await getHighlightedElements();
	
	assert.deepEqual(highlightedElements.focus, ["2.1"]);
	assert.deepEqual(highlightedElements.active, ["2"]);
});


test("Highlighting and focus reset when switching between nested submenus under the menu show delay", async ()=>{
	const root2 = await getMenuItemByLabel("2");	
	await root2.click();
	await mouseoverTo("2.2");
	await mouseoverTo("2.2.1");
	
	await mouseoverTo("2.3", false); //do not await delay
	await mouseoverTo("2.2.1");

	const highlightedElements = await getHighlightedElements();
	assert.deepEqual(highlightedElements.active, ["2", "2.2"]);	
	assert.deepEqual(highlightedElements.focus, ["2.2.1"]);
});


test("Highlighting and focus reset when moving between top level items through submenu", async ()=>{
	const root = await getMenuItemByLabel("1");
	await root.click();	
	await mouseoverTo("1.1");	
	await mouseoverTo("2");	
	
	const highlightedElements = await getHighlightedElements();
	assert.deepEqual(highlightedElements.active, []);	
	assert.deepEqual(highlightedElements.focus, ["2"]);	
});

test("Highlighting and focus cleared when click-deactivating menu after switching from top menu item to submenu", async ()=>{
	const root = await getMenuItemByLabel("1");
	await root.click();		
	await mouseoverTo("1.1");
	await mouseoverTo("1");	
	await root.click();	

	const highlightedElements = await getHighlightedElements();
	assert.deepEqual(highlightedElements.active, []);	
	assert.deepEqual(highlightedElements.focus, []);		
});

test("Highlighting and focus cleared when modal-deactivating menu");