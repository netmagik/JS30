<h1>Whack A Mole Video Game</h1>

* Select random number between 2 values (min and max):

```javascript
function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}  
```

* Click event has .isTrusted property, which tells the browser if the user clicked it or it was a fake click through JavaScript
