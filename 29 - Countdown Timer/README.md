<h1>Countdown Timer</h1>

* Don't use setInterval(seconds, {seconds --});<br />
Wes noticed it doesn't work sometimes and pauses while scrolling

* New function to get current time:

```javascript
const now = Date.now();
```
* clearInterval() always needs a variable name to stop set Interval() from running
* setInterval() doesn't run immediately. It needs 1 second to start
* document.title =  updates the Title of the Page
* You need to clear existing timers with clearInterval(countdown) at the beginning of the timer function
* If an element has a name attribute in HTML <b>(name="customForm")</b>, it can be directly selected as document.elementName in the DOM
* Use this.reset() to reset the textbox in the FORM


