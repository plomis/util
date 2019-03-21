# util
常用方法

## Install
```js
npm i @plomis/util
```

## API

* [addEventlistener](#addEventlistener)
* [getClientSize](#getClientSize)
* [getOffset](#getOffset)
* [requestAnimationFrame](#requestAnimationFrame)
* [cancelAnimationFrame](#cancelAnimationFrame)


#### addEventlistener

> `(target: Element, eventType: string, listener: Function): { remove: Function }`

###### Useage

```js
import { addEventlistener } from 'util';
this.eventListener = addEventListener(document.body, 'click', function(e){
  console.log(e.target); // works for ie
  
  console.log(e.nativeEvent); // native dom event
});
this.eventListener.remove(); // delete event listener
```

#### getClientSize

###### Useage

```js
import { getClientSize } from 'util';
const { clintHeight, clintWidth } = getClientSize();
```

#### getOffset

> `(target: Element)`

###### Useage

```js
import { getOffset } from 'util';
const { offsetLeft, offsetRight } = getClientSize(document.body);
```


#### requestAnimationFrame

> `(fc: function)`

###### Useage

```js
import { requestAnimationFrame } from 'util';
this.animation = requestAnimationFrame(() => {
  // do someting
});
```

#### cancelAnimationFrame

> `(fc: function)`

###### Useage

```js
import { requestAnimationFrame, cancelAnimationFrame } from 'util';
this.animation = requestAnimationFrame(() => {
  // do sometings
});
cancelAnimationFrame(this.animation);  // delete animation frame
```
