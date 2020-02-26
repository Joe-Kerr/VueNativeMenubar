import mixinActivation from "./menubar.methods.menubarActivation.js";
import mixinInit from "./menubar.methods.initialisation.js";
import mixinKeyboard from "./menubar.methods.keyboardInteraction.js";
import mixinMouse from "./menubar.methods.mouseInteraction.js";
import mixinSubmenusAddRemove from "./menubar.methods.submenusAddRemove.js";
import mixinQueries from "./menubar.methods.queries.js";

import menuItemTop from "./menuItemTop.vue";
import submenu from "./submenu.vue";

import modalService from "@joe_kerr/stackthemmodals";

let keyListener = null;

export default {
	name: "menu-bar",
	
	mixins: [mixinActivation, mixinInit, mixinKeyboard, mixinMouse, mixinSubmenusAddRemove, mixinQueries],
	
	props: {
		menu: {type: Array, required: true},
		
		menuShowTimeoutMs: {type: Number, default: 200},
		showAccelerators: {type: Boolean, default: false},
		modalServiceUser: {type: Object, validator(_service) {			
			const service = _service || {};
			return (typeof service.push === "function" && typeof service.forcePop === "function");
		}},
		
		/*//#todo
		enableKeyboardCursor: {type: Boolean, default: false},
		enableEscapeClose: {type: Boolean, default: false},		
		enableAltShortcut: {type: Boolean, default: false},	
		systemKeyBehavior: "default|prevent|doubleTap",
		/*/
		
		//??
		//environment: {type: String, default: "any", validator: function(val) {return ["any", "browser", "electron"].indexOf(val) > -1;}},
		//os: {type: String, default: "any", validator: function(val) {return ["any", "windows", "darwin", "linux"].indexOf(val) > -1;}},	
	},
	
	computed: {
		//Each submenu has a parent item. "activeSubmenus" is build from "this.activeSubmenusIds", i.e. an array of parent item uids (that have a submenu).
		//So, each member in "activeSubmenus" holds all the items in a parent item's "submenu" property.
		//A parent item uid can be set as a submenu's id.
		activeSubmenus() {
			const activeSubmenus = [];
			
			this.activeSubmenusIds.forEach((uid)=>{
				const parentItem = this.getItemByUid(uid);
				
				if(parentItem && parentItem.submenu.length > 0) {
					activeSubmenus.push({menu: parentItem.submenu, parentUid: parentItem.uid, id: parentItem.uid}); //#todo deprecate parentUid
				}
			});

			return activeSubmenus;
		},
		
		rootMenuItems() {
			return this.menuItemsFlat.filter((itemWrapper)=>{
				return (this.menu.indexOf(itemWrapper.item) > -1);
			});
		},
		
		modalService() {
			return this.modalServiceUser || modalService;
		},
		
		vars() {
			const isMouseMode = (this.inputMode === "mouse");
			
			return {
				focusedUid: (isMouseMode) ? this.focusedUid : this.currentCursorItemUid,
				highlightedUids: (isMouseMode) ? this.highlightedUids : this.activeSubmenusIds,
				itemIdPrefix: "native-menubar_item--"
			};
		}
	},
	
	data() {
		return {
			isMenuActive: false,

			inputMode: "mouse",			
						
			menuItemsFlat: [],
			index: {},				
			activeSubmenusIds: [],
			
			previousCursorItem: null,
			currentCursorItem: null,
			previousCursorItemUid: null,
			currentCursorItemUid: null,
			
			indexActiveItemInSubmenu: null,
			indexActiveSubmenu: null,			

			focusedUid: null,
			highlightedUids: [],

			currentSubmenuTimeout: null
		}
	},
	
	watch: {
		isMenuActive(opening) {
			if(opening) {
				this.modalService.push(this.$refs.menubar, ()=>{ this.deactivateMenu(); });
				//this.activateESCListener();
			}
			else {
				this.modalService.forcePop(true);
				//this.deactivateESCListener();
			}
		}
	},
	
	methods: {
		//
		// Cursor movement
		//				
		setCursor(uid) {
			this.previousCursorItem = this.currentCursorItem;
			this.previousCursorItemUid = this.currentCursorItemUid;	
			
			this.currentCursorItemUid = uid;
			this.currentCursorItem = this.getItemByUid(uid);	
		},
	
		//
		// ??
		//			
		switchInputMode(newMode) {			
			if(this.inputMode === newMode) {
				return false;
			}
			
			const MODES = [null, "mouse", "keyboard"];			
			if(MODES.indexOf(newMode) === -1) {
				throw new Error("switchInputMode was called with an undefined mode: "+newMode);
			}
						
			const oldMode = this.inputMode;
			
			const fnExit = oldMode+"InputModeExit";
			const fnEnter = newMode+"InputModeEnter";
			
			if(typeof this[fnExit] === "function") {
				this[fnExit]();
			}
			
			if(typeof this[fnEnter] === "function") {
				this[fnEnter]();
			}
						
			this.inputMode = newMode;
		},		
		
		dispatchItemEvent(eventSource, item) {
			if(typeof item.click === "function") {
				item.click(item, null, eventSource);
			}
			
			this.$emit("itemExecute", {eventSource, item});
		},
		
		//
		// Currently not in use.
		//		
		activateESCListener(event) {
			keyListener = async (event) => {
				const ESC = 27;
				if(event.keyCode === ESC) {
					if(this.activeSubmenusIds.length > 0) {
						const nextUid = this.activeSubmenusIds[this.activeSubmenusIds.length - 1];
						await this.hideLastSubmenu();
						
						//whatever it is now...
						//this.setCursorOverMenuItem(nextUid);
					}
					
					else if(this.isMenuActive === true) {
						this.deactivateMenu();
					}
				}
			};
			
			document.addEventListener("keyup", keyListener);			
		},
		
		deactivateESCListener() {
			document.removeEventListener("keyup", keyListener);
			keyListener = null;
		}
	},
	
	created() {			
		this.buildMenuFromTemplate(this.menu);
	},
	
	mounted() {
		window.addEventListener("blur", this.deactivateMenu);
//
window.aaa = this;
//
	},
	
	destroyed() {
		this.deactivateMenu();
		window.removeEventListener("blur", this.deactivateMenu);
	},
	
	components: {"sub-menu": submenu, "menu-item-top": menuItemTop,}
};