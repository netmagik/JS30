<h1>CSS Variables</h1>
<img width="1119" alt="CSS Variables-Input Types" src="https://user-images.githubusercontent.com/3833560/80553879-607c9380-8999-11ea-9d8c-0771790f69b3.png">
<ul>
<li>Input types:<br />

Color input to let users choose color:<br />

    <input type=“color” value=“red”>

Range input:<br />

    <input type=“range” min=“10” max=“100” name=“blur” value=“20”>

</li>

<li>You can set variables in CSS:</li>

    :root {
    --base: #ffc600;
    --spacing: 10px;
    --blur: 10px;
    }

    .hl {
     color: var(--base);
     }

<li>
document.querySelectorAll()  does not return an array. It returns a NodeList which is like an array but without most of the functions in the prototype.
<br />array.from(name_nodeList); - converts NodeList to an Array
</li>

