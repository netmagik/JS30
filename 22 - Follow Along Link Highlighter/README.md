<h1>Follow links highlighter</h1>

* We had to create element 'span' with a class of 'highlight' and add it to DOM:

```javascript
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);
```

* We added an Event Listener for each link mouse over trigger:

```javascript
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
```

* We got each link Coordinates - X and Y, by using function getBoundingClientRect()

```javascript
const linkCoords = this.getBoundingClientRect();
```

* We factored in someone scrolling down or horizontally on the page and offset that for the highlight

```javascript
top: linkCoords.top + window.scrollY,
left: linkCoords.left + window.scrollX
```



