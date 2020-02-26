const assert = require("assert");

let driver, By, to;
let idMap, allMenuItemLabelIds;

const ID_PREFIX = "native-menubar_item--";
const MENU_SHOW_DELAY_MS = 200;

async function init(config) {	
	to = config.testObjects;
	driver = config.driver;
	By = config.By;
	until = config.until;
	
	//
	let idMapWip = await driver.findElement(By.id("idMap"));
	idMapWip = await idMapWip.getText();
	idMap = JSON.parse(idMapWip);
	allMenuItemLabelIds = Object.keys(idMap);
	
	//
	to[1] = await driver.findElement(By.id( ID_PREFIX+idMap[1] ));
	to[2] = await driver.findElement(By.id( ID_PREFIX+idMap[2] ));
	to[3] = await driver.findElement(By.id( ID_PREFIX+idMap[3] ));	
	//
	const ps = [];
	const ids = [
		"reset", "itemInFocus"
	];
	
	ids.forEach((id)=>{
		ps.push(driver.findElement(By.id(id)));
	});
	
	const res = await Promise.all(ps);
	
	ids.forEach((id, index)=>{
		to[id] = res[index];
	});		
}

function getDomIdByLabel(label) {
	const uid = idMap[label];	
	
	if(uid === undefined) {
		return null;
	}
	
	const domId = ID_PREFIX+uid;
	return domId;	
}

async function getMenuItemByLabel(label) {
	if(label == "1" || label == "2" || label == "2") {
		return to[label];
	} 

	const domId = getDomIdByLabel(label);
	
//	await waitForSubmenu(label);
	
	return driver.findElement(By.id(domId));
}

async function waitForSubmenu(elementOfSubmenuLabelId) {
	const id = getDomIdByLabel(elementOfSubmenuLabelId);
	const isLeaf = (id === null);	
	
	if(!isLeaf) {
		await driver.wait(until.elementLocated( By.id(id) ), MENU_SHOW_DELAY_MS, "Waiting for the following label id failed: "+elementOfSubmenuLabelId);
		return true
	}
	else {
		return false;
	}
}

async function expectItemsVisibleExclusive(expectedLabelIdsVisible) {
	expectedLabelIdsVisible.push("1", "2", "3");
	
	await driver.executeScript(`
		const activeItems = document.querySelectorAll(".native-menubar_item");
		const report = [];
		
		for(let i=0, ii=activeItems.length; i<ii; i++) {
			const text = activeItems[i].textContent;
			
			if(text.indexOf("Test") > -1 || text.indexOf("Sub") > -1) {continue}
			
			report.push(text);
		}
		
		document.getElementById("activeMenuItems").textContent = JSON.stringify(report);
	`);	
	
	let activeItemsByIdLabel = await driver.findElement(By.id("activeMenuItems"));

	activeItemsByIdLabel = await activeItemsByIdLabel.getText();
	activeItemsByIdLabel = JSON.parse(activeItemsByIdLabel);
	
	assert.deepEqual(activeItemsByIdLabel.sort(), expectedLabelIdsVisible.sort());
}

async function mouseoverTo(labelId, awaitItemReady=true) {
	const el = await getMenuItemByLabel(labelId);
	await driver.actions({async: true})
				 .move({duration: 30, origin: el})
				 .perform();
				 
	if(awaitItemReady) {
		const done = await waitForSubmenu(labelId+".1");
		
		// if no submenu, but wait for focus highlight
		if(!done) {
			await driver.sleep(200);
		}	
	}
}


module.exports =  {
	init,
	getMenuItemByLabel,
	expectItemsVisibleExclusive,
	mouseoverTo,
	waitForSubmenu
};