# Native Menubar - data driven native main menu for Vue

## Features

- Main menu bar with submenus as known from Windows, Linux, Mac
- Mouse control: toggle with click, navigate with mouseover
- Keyboard control: navigate with arrow keys
- Delayed menu show for mouse control
- Uses [Electron's data format](https://www.electronjs.org/docs/api/menu#main-process) 

The Native Menubar was developed for replicating a desktop application's main menu (Electron environment) in the browser. A main menu is useful for feature rich applications where it allows quick and efficient access to categorised application functions, shortcuts or components.

The Native Menubar is not optimised for mobile devices nor is it responsive. It is designed for staying at a fixed location (e.g. top of a window) on a computer screen.

Make sure to read [the notes](#notes) on the current version. 


## Demo

[See it in action.](https://joe-kerr.github.io/VueNativeMenubar/)


## Requirements

- Vue


## Install

**1)**
```
npm install @joe_kerr/vue-native-menubar
```


**2a) dev environment**

```javascript
import {component} from "@joe_kerr/vue-native-menubar"; 
```


**2b) Pure node or browser**

```javascript
const nativeMenubar = require("path_to_node_modules/@joe_kerr/vue-native-menubar/dist/nativeMenubar.common.js");
```

or

```
<html> <script src="path_to_node_modules/@joe_kerr/vue-native-menubar/dist/nativeMenubar.umd.min.js"></script>
```

## Propagation of item events

When a menu item is clicked or pressed enter on, this is propagated in two ways:

1: Component event: @itemExecute({eventSource, item})

[see below](#itemexecuteeventdetails--function-)

2: Click callback on your item data, if any: click(event, null, item)

This is the optional click function that is also used by [Electron](https://www.electronjs.org/docs/api/menu-item#new-menuitemoptions). The middle parameter would be an instance of Electron's browserWindow which is unavailable here.

Notice: Despite its name, the callback will also be invoked by pressing enter on the item.


## Configuration

The menu bar component takes in the following properties:

```javascript
import {component as nativeMenubar} from "@joe_kerr/vue-native-menubar"; 

const menuData = [{label: "Hello world"}];

export default {
  template: `
    <menu-bar
      menu="menuData"
      menuShowTimeoutMs="200"
      showAccelerators="false"
      modalServiceUser="undefined"
      
      @itemExecute="callback"
    />
  `,
  components: {"menu-bar": nativeMenubar}
}
```

### menu < Array > required

The menu data in [Electron's data format](https://www.electronjs.org/docs/api/menu#main-process). The data will be treated read-only.


### menuShowTimeoutMs < Number >

When hovering with the mouse over a menu item with a submenu, wait for this delay in milliseconds before showing the submenu.

Default: 200


### showAccelerators < Bool >

Show the keyboard shortcut on the right of the item (if any). This will not register an event handler. 

Default: false


### modalServiceUser < Object >

Uses [internal service](https://github.com/Joe-Kerr/stackThemModals) by default. See link for interface if you wish to override.

Default: undefined, (internal service)


### css < Object >

Object that holds key value pairs that let you apply dynamic class names; e.g. css: {menubarClass: "my-menu-bar"}

[See below for details](#dynamic-classes).

Default: {}


### @itemExecute(eventDetails) < function >

Calls the callback function with {eventSource, item} where "eventSource" is the DOM event (mouse, keyboard) that triggered the event and "item" a reference to the menu item.

Default: undefined


## CSS theming

The Vue Native Menubar offers two ways to apply css: predefined classes and dynamic classes as component properties.

At present, there are no predefined themes. But see the demo.css file in the docs folder for some pointers. 

### Predefined classes

The classes below are predefined in the Vue components' templates. There is a minimal amount of styling predefined as well such as displying top level items inline. If you want to override the classes put the associate html tag in front as done below.

- **nav**.native-menubar
- div.native-menubar_submenu
- div.native-menubar_item
- div.native-menubar_item--separator
- div.native-menubar_item--toplevel
- div.native-menubar_item--functional
- div.native-menubar_item--content
- div.native-menubar_item--left
- div.native-menubar_item--middle
- div.native-menubar_item--right
- div.native-menubar_item--active


### Dynamic classes

The Native Menubar component takes in a css property as an object. Below, in the class tags, are all valid keys and where they are located in the html. Your values will be inserted in place of the keys.

```html
<nav class="cssMenubarClass">

 <div class="itemBaseClass itemTopClass">1</div> 
 <div class="itemBaseClass itemTopClass">2</div> 
  
 <div class="submenuClass">
 
  <div class="itemBaseClass itemFunctionalClass">
    <div class="itemContentClass itemLeftClass"></div>
    <div class="itemContentClass itemMiddleClass">1.1</div>
    <div class="itemContentClass itemRightClass"></div>
  </div>
  
  <div class="itemBaseClass itemSeparatorClass"></div>
  
  <div class="itemBaseClass itemFunctionalClass">
    <div class="itemContentClass itemLeftClass"></div>
    <div class="itemContentClass itemMiddleClass">1.2</div>
    <div class="itemContentClass itemRightClass"></div>  
  </div>
  
 </div>  
 
 <div class="submenuClass">
 
  <div class="itemBaseClass itemFunctionalClass">
    <div class="itemContentClass itemLeftClass"></div>
    <div class="itemContentClass itemMiddleClass">1.2.1</div>
    <div class="itemContentClass itemRightClass"></div>
  </div> 
  
 </div>

</nav>
```

### System styles

The top and left css properties of the submenus are applied inline. 


## Notes

In the current version basic features of the menu are working. That means:

- item.label is used for menu item names (basic fallback uses capitalised role or id or 'Unnamed')
- item.accelerator is displayed as is (given the config property is set to true)

- menu can be activated with mouse click
- menu can be navigated with mouse or keyboard arrow keys
- menu items can be executed with mouse click or keyboard enter

Platform specific features are not yet implemented. Also, there will be a lot of internal restructuring (feature separation, re-using submenu code for context menus). Expect interface changes (installation process, imports, **css selectors**).


## Versions

### 0.1.0
- First public release


## Copyright

MIT (c) Joe Kerr since 2020

