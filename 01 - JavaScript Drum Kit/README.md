<h1>Piano with keyboard keys</h1>

<kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd> <kbd>E</kbd> <kbd>F</kbd> <kbd>G</kbd> <kbd>H</kbd> <kbd>I</kbd>

<h2>Helpful notes:</h2>

<ul>
<li>Bind an event to the keys when they are pressed
window.addEventListener(‘keydown’, function(e){});
</li>

<li>*Notice it’s a window. and not document.</li>

<li>Inside the function, it’s const audio=document.querySelector(‘’);
<br /> document.querySelector is like $() in jQuery</li>

<li>Inside the querySelector, we write `audio[data-key=“{e.key}”]`</li>
</ul>
<img width="1306" alt="Piano" src="https://user-images.githubusercontent.com/3833560/80553066-8c4a4a00-8996-11ea-9109-4f697419f40a.png">
