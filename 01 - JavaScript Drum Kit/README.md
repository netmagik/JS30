<h1>Piano with keyboard keys</h1>

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
