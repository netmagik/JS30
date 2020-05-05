<h1>Local Storage and Event Delegation (Checklist)</h1>

If you have multiple forms on the page, select the field you need by using <b>this.querySelector</b> instead of <b>document.querySelector</b>
<br />Example:

```javascript
const text = (this.querySelector('[name=item]').value);
```

* We used e.preventDefault() while adding items to the list to store the items.
* We created an Array - plates, and used map function to take the object(plate) and convert into a string
* We used .join at the end to get one huge String instead of an array of strings
* We used <b>data-index</b> value on a checkbox to check if it's been checked.

*<b> Creative way of using checkboxes with Emoji</b>

* We put list of items entered into Local Storage to keep after browser refresh:

```javascript
  localStorage.setItem('items', JSON.stringify(items));
```

* Local Storage can only display strings, so that's why we need to JSON.stringify it
* In order for it to work, I had to Allow all cookies in the browser settings
* Event Delegation - listen for a click on a parent element and check if it's the target, then RETURN:

```javascript
  if(e.target.matches('input')) return; //skip this unles it's an input
```

<img width="485" alt="Screenshot 2020-05-05 15 41 38" src="https://user-images.githubusercontent.com/3833560/81108685-045cc680-8ee7-11ea-8128-201dad431442.png">
