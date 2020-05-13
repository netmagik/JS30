<h1>Video Speed Controller</h1>

* To get vertical location of the mouse over the speed bar, we used e.pageY method:

```javascript
const y = e.pageY - this.offsetTop;
```
* We converted vertical distance location to %(Percent) by:

```javascript
const percent = y / this.offsetHeight;
```

* To calculate Height %:

```javascript
const height = Math.round((percent * 100)) + '%';
```
* Playback rate needed to be offset<br />
At 0 height it should be 0.4x<br />
At 1 height it should be 2.5x<br />

We used a formula to calculate playbackRate

```javascript
const playbackRate = percent * (max - min) + min;
