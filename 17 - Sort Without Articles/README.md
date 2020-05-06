<h1>Array Sorting</h1>

Array.sort(function (a, b)) 

* We used regular expression to strip out A, THE, AN from band names (i at the end makes it "insensitive" - either capital or small letter. We replaced it with nothing '', and used trim() at the end to get rid of spaces:

```javascript
return bandName.replace(/^(a |the |an )/i, '').trim();
```

* TIL - styling list items inside

```css
#bands {
list-style: inside square;
}
```
* We used Array.map function to display array items, and .join('') to join Array Items and get rid of ',' in between. DOM by default uses toString() method when we use .innerHTML, and it puts ',' in between Array Items


```javascript
document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
```

<img width="610" alt="Screenshot 2020-05-06 10 55 58" src="https://user-images.githubusercontent.com/3833560/81192426-36723500-8f88-11ea-8613-b23a18789251.png">
