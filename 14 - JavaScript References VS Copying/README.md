<h1>Copy Vs. Reference</h1>

* JavaScript Copying

```javascript
let name = 'Irina';
let name2 = name;
console.log(name, name2);

name = 'Bob';
console.log(name, name2);
```

<b>If you change the original variable value, it will not change (name2)</b>

* In comparison with an array, if you <b>reference</b> an original array, it will update it:

```javascript
const players = ['Wes', 'Bob', 'Jen', 'Irina'];
const team = players;

team[3] = 'Lux';
console.log(players, team);
```
<b>Both Team-Array and Players-Array will show: [Wes', 'Bob', 'Jen', 'Lux'];</b>

* In the example above, we referenced an array

<b>To make a copy of the array use:</b>

```javascript
const team2 = players.slice();
//SAME - or concat the old one: const team2 = [].concat(players);
//SAME - or use ES6 spread: const team2 = [...players];
//SAME - or const team2 = Array.from(players);
team2[3] = 'God';
console.log(players, team2);
```

<b>It keeps the original array intact </b>

* Copy Objects:

```javascript
const person = {
      name: 'Wes Bos',
      age: 80
    };
```

New ES6 Spread way:

```javascript
const another = {...person};
```




