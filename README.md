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

###### Usage

```js
import util from '@plomis/util';
this.eventListener = util.addEventListener(document.body, 'click', function(e){
  console.log(e.target); // works for ie
  
  console.log(e.nativeEvent); // native dom event
});
this.eventListener.remove(); // delete event listener
```

#### getClientSize

###### Usage

```js
import util from '@plomis/util';
const { clintHeight, clintWidth } = util.getClientSize();
```

#### getOffset

> `(target: Element)`

###### Usage

```js
import util from '@plomis/util';
const { offsetLeft, offsetRight } = util.getClientSize(document.body);
```


#### requestAnimationFrame

> `(fc: function)`

###### Usage

```js
import util from '@plomis/util';
this.animation = util.requestAnimationFrame(() => {
  // do someting
});
```

#### cancelAnimationFrame

> `(fc: function)`

###### Usage

```js
import util from '@plomis/util';
this.animation = util.requestAnimationFrame(() => {
  // do sometings
});
util.cancelAnimationFrame(this.animation);  // delete animation frame
```
