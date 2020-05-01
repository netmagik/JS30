<h1>Dev Tools</h1>
* Debug in browser - find code that's causing an attribute: <br />
Right click on the HTML page - Inspect - Break On - Attribute Modification<br />
It brings you right to the JS code with that attribute

* Console.log - Styled<br />

```javascript
console.log('%cI am some text here', 'font-size: 100px; background: red; letter-spacing: 2');
```
* Console Warning! 

```javascript
console.warn('I am a warning');
```
* Console Error: Display an error in the console

```javascript
console.error('Display some error');
```
* Console Info: Display some information in the console

```javascript
console.info('Some info');
```
* View DOM elements in the console

```javascript
console.log(p);
```
Show all the methods on that element:

```javascript
console.dir(p);
```
* Console Group Array Elements Together:

```javascript
arrayName.forEach(arrayItem => {
 console.groupCollapsed(`${dog.name}`);
 console.log(`This is ${dog.name}`);
 console.groupEnd(`${dog.name}`);
});
```

