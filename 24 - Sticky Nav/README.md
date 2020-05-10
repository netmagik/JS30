<h1>Sticky Nav</h1>

You need to take care of the extra space after you fix the NAV.

* We used .offsetTop to find how far Nav bar is from the top of the window and give that as padding to the body

```javascript
const topOfNav = nav.offsetTop;
```
* We used window.scrollY to find how far we scrolled down the page
* If window.scrollY >= how far the Nav bar is from the top, we added a class of 'fixed-nav' to the <b>body</b>
* We updated Styles to make .fixed-nav nav position: fixed.
* In order to get rid of the jerky jump when scroll and the nav gets fixed on top, we offset the body to the height of Nav:

```javascript
document.body.style.paddingTop = nav.offsetHeight + 'px';
```

and removed it when scrolling down

```javascript
document.body.style.paddingTop = 0;
```

<h2>Animated Logo</h2>
You can't animate anything with a width = 0 that's why we set max-width: 0 instead of width: 0; <b>You have to use max-width</b> to get the transition to kick in


```html
li.logo {
max-width: 0;
transition: all .5s;
}

.fixed-nav li.log {
max-width: 500px;
}
```

<img width="936" alt="Screenshot 2020-05-10 15 38 45" src="https://user-images.githubusercontent.com/3833560/81508810-66953d00-92d4-11ea-8b8d-39fa79a7e3b0.png">

