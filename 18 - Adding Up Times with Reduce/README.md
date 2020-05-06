<h1>Add up Times (like on YouTube) with Reduce</h1>

* We converted Nodelist to an Array by using:

```javascript
  const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
  ```
  
 * Then we used .map() function to get seconds from an Array of list items (<li>) into an Array of Strings
  
 * We used Math.floor() to get the whole number of hours, without a remainder.
 
 * TIL - Mod function (%)
 
 11 % 5 = 1 (Mod-% decides how many are left after they are evenly distributed)
 
 ```javascript
     const hours = Math.floor(secondsLeft / 3600);
     secondsLeft = secondsLeft % 3600;
```
After we distibute it evenly into hours, that's how many seconds we have left.


  
  
  
