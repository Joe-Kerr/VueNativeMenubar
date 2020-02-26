const assert = require("assert");
const sinon = require("sinon");
const sample = require("../../../src/ui/submenu.vue").default;

suite("submenu.vue");

let backup;

before(()=>{
	backup = global.document;
	global.document = {
		getElementByIdLastParam: undefined,
		getElementById(id) {
			this.getElementByIdLastParam = id;
			return {
				getBoundingClientRect() {
					return {
						x: 1,
						y: 2,
						width: 3, 
						height: 4
					}
				}
			}
		}
	};
});

after(()=>{
	global.document = backup;
});

test("computed.style returns correct x/y-coordinates for top level menu item", ()=>{
	const context = {submenuIndex: 0, id: 0, vars: {itemIdPrefix: "test--"}};
	assert.deepEqual( sample.computed.style.call(context), {left: "1px", top: "6px"} );
});

test("computed.style returns correct x/y-coordinates for sub level menu item", ()=>{
	const context = {submenuIndex: 1, id: 0, vars: {itemIdPrefix: "test--"}};
	assert.deepEqual( sample.computed.style.call(context), {left: "4px", top: "2px"} );	
});

test("computed.style uses the correct composite id for querying parent DOM element", ()=>{
	const context = {id: 123, vars: {itemIdPrefix: "test--"}};
	sample.computed.style.call(context)
	assert.equal(global.document.getElementByIdLastParam, "test--123");
});

test("methods.getComponentType translates item.type to component name", ()=>{
	assert.equal(sample.methods.getComponentType({type: "separator"}), "menu-item-separator");
	assert.equal(sample.methods.getComponentType({type: "any"}), "menu-item-functional");
});