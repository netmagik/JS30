<h1>Event capture, Bubbling and Propagation</h1>

* Event Capture happens from top down: document -> body -> top div => mid div -> small div<br />
When you click on the innermost div, we are also clicking on its parents. 
<br />So the event bubbles and calls out class ‘three’ then ‘two’ then ‘one’, moving from the innermost div to the outermost.
* Response(Event Capture) happens from down to top (the opposite) child -> parent<br />, three-two-one
It starts at the inside div and it bubbles up, goes on triggering events the way up.
* capture:true|false is passed as an object in the third parameter of addEventListener
* If set capture: true, it will capture event from parent to child: one, two, three
* Instead of inside-middle-outside event, it will trigger: outside-middle-inside

* e.stopPropagation() and capture: true stops bubbling up and capture event only happens on the parent
* e.stopPropagation() and capture: false stops bubbling up and capture event only happens on the inside div(child)

```javascript
divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true
}));
```

* once: true | false. If once is set to true, it's similar to removeEventListener()
* It's useful if you only want to capture click once from a button <b>Store Checkouts</b>


```javascript
button.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true
});
```
