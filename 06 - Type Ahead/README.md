<h1>Type Ahead - Search for City/State & Highlight found strings in dropdown</h1>

Tilted CSS row:

Use transform property (perspective (100px) Sets the z=0 plane further behind, by the given value):

```.suggestions li:nth-child(even) {
  transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
  background: linear-gradient(to bottom,  #ffffff 0%,#EFEFEF 100%);
}

.suggestions li:nth-child(odd) {
  transform: perspective(100px) rotateX(-3deg) translateY(3px);
  background: linear-gradient(to top,  #ffffff 0%,#EFEFEF 100%);
}
```
Background
```{
linear-gradient(to bottom, white 0%, black 100%};
```
The % in linear gradient means that that color should reach its full hue by that location in the gradient.

* fetch API is used to fetch JSON data
* '...' - ES6 spread. It is used to spread all arguments passed to the array as their own elements
* We used a variable  - wordToMatch and put it in the regular expression:
   const regex = new RegExp(wordToMatch, 'gi');
<br />g is for global
<br />i is for case insensitive

* We used .filter to apply a function to every single element in the array

