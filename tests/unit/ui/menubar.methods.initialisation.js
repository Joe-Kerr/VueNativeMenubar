const assert = require("assert");
const sinon = require("sinon");
const sample = require("../../../src/ui/menubar.methods.initialisation.js").default;

suite("menubar.methods.initialisation.js");

const recursiveTestMenu = [
	{id: 1, label: "Sub 1", submenu: [
		{id: 2, label: "Subsub 1", submenu: []}, {id: 3, label: "Subsub 2", submenu: []}
	]},
	
	{id: 4, label: "Sub 2", submenu: [
		{id: 5, label: "Subsub 3 ", submenu: [
			{id: 6, label: "Sub³ 1", submenu: []}
		]}, 
		{id: 7, label: "Subsub 4", submenu: []}
	]}
];

const cloned_recursiveTestMenu = JSON.parse(JSON.stringify(recursiveTestMenu));

function getConvertedFlatMenu() {
	const context = {
		menuItemsFlat: [],
		index: {}
	};
	
	sample.methods.buildMenuFromTemplate.call(context, recursiveTestMenu);
	return context.menuItemsFlat;
}

test("buildMenuFromTemplate converts recursive menu to flat array", ()=>{
	const flat = getConvertedFlatMenu();
	const actualIds = flat.map((itemWrapper)=>(itemWrapper.item.id)).sort();
	const expectedIds = [1,2,3,4,5,6,7];
	
	assert.deepEqual(actualIds, expectedIds);
});

test("buildMenuFromTemplate stores flat array members in menu item wrappers", ()=>{
	const flat = getConvertedFlatMenu();
	flat.forEach((itemWrapper)=>{
		 assert.deepEqual(Object.keys(itemWrapper).sort(), ["uid", "submenu", "item"].sort());
	});
});

test("buildMenuFromTemplate stores flat array members' first level submenus in menu item wrappers", ()=>{
	const flat = getConvertedFlatMenu();
	flat.forEach((itemWrapper)=>{
		itemWrapper.submenu.forEach((subItemWrapper)=>{
			assert.deepEqual(Object.keys(subItemWrapper).sort(), ["uid", "submenu", "item"].sort());
		});
	});	
});

test("buildMenuFromTemplate stores untouched references to original menu items", ()=>{
	const flat = getConvertedFlatMenu();
	
	assert.deepEqual(recursiveTestMenu, cloned_recursiveTestMenu);
	assert.equal(recursiveTestMenu[0], flat[0].item);
	assert.equal(recursiveTestMenu[1].submenu[1], flat[flat.length-1].item);
});