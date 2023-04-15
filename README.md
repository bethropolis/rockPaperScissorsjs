# RockPaperScissorsJS
---

## Table of content
* [intro](#intro)
* [getting started](#getting-started)
  * [roll](#roll)
  * [compute](#compute)
  * [won](#won)
* [extras](#extras)
* [License](#license) 



## intro
---
RockPaperScissorsJS is a javascript library that simplifies the making of the great rock paper scissors game and easy to use. 
<p> the package is madein a Javascript class format where your <b>play</b> will be considered an object</p>
Here is an example:

```js 
  const player = new Play(); 
  //this creates a new object player and the action must be passed as an argument


 console.log(player.Roll('paper'));  
 //the three actions are users guess which could be `rock`,`paper` or `scissors`
 //the Roll() function assigned is where everything is done mostly.
 ```

the response or display on the console:

   ```js
   [
      user: 'paper',
      computer: 'scissors',
      won: true
   ]
   ```
   

   in the above the user placed `paper` which we see from the argument passed on `new play('paper')` and the computers guess is randomly generated and
   from the result we get that paper loses to scissors and hence the result brings `false` meaning the user lost, incase of a win it would be `true` and incase of draw it would be `draw`.
  
## getting started
---
getting started you will first require the library which can be done by using the script tags

```html
   <script src="./path/to/rockPaperScissors.JS"> </script> // get the library from the path where it's located
```
if you are using a CDN then you can use the following
```html
   <script src="https://cdn.jsdelivr.net/npm/rockpaperscissorsjs@1.5.0/rockPaperScissors.min.js"></script> 

```

you can also install using nodejs by running.

```bash
npm install rpsjs
```

> You can use import in node.js and other runtimes.

```js
const Play = require('rpsjs');

// create a new Play object and set rounds to play to 10.
const game = new Play(10);

// use the game object to play Rock, Paper, Scissors
const result = game.Roll("rock");
console.log(result);
```

> place the CDN link onto the header 
<br> 

then create an object to use
```js
    const player = new Play(...rounds=10, ...user=" ");// you can name it anything other than player

````
> you can find the demos [here](https://bethropolis.github.io/rockPaperScissorsJS)<br>

### using the functions
there are three functions; 
```js
       Roll(user)
       Compute()
       Won(user, computer)
       Multiplayer(user,computer)
       Scores() // get users scores
       Clear() // clear scores and plays
```

> Note that the functions begin with a capital letter.

### Roll

from the above example you can see that the `Roll()` function did everything for us without us doing anything.
the `Roll()` function requires no parameters if you stated it when making the Object.<br>
Example 1:
```js
  const player = new Play(10);
  console.log(player.Roll('paper'));// passing user guess to roll function (recommended)

```
Example 2:
```js

 const player = new Play(10,'rock');// user guess in this case is rock
  console.log(player.Roll());// since user guess was passed on the object there is no need to redo that again
``` 
<br>
Example 1 output could be:

```js
    [
       user: rock,
       computer: scissors,
       won: true,
       uscore: 1,
       cscore: 0
    ]
```

Example 2 output could be:

```js
    [
       user: paper,
       computer: paper,
       won: draw,
       uscore: 0,
       cscore: 0
    ]
```
> the computer guess is randomly made.



### Compute
---
  the `compute()` function will help you if you would like to get a random guess for the computer.<br>
  Example:
  ```js
  const player = new Play();
  let button = document.getElementById('computer-guess');
  button.addEventListener('click', function(){
      console.log('The computer guess is: '+player.Compute());
  })

  ```

  Example of output:<br>
  ` The computer guess is: rock`
<br>

you can do a lot more with this just check the examples [here](https://bethropolis.github.io/rockPaperScissorsJS)<br>

### won
  ```js    
         Won(user, computer)          
  ```
   This function determines the winner where the data passed <br>
   required arguments are `user` and `computer` guess or trows eg. `rock` or `paper` or `scissors`<br>
 <br>
 
   it will to be like
  ```js
        player.Won('rock','scissors')// user= rock and computer=scissors
        player.Won('paper','paper')// user= paper and computer=paper
        player.Won('scissors','rock')// user=scissors  and computer=rock
  ```

Example:
```js
     const player = new Play();

        console.log(player.Won('rock','scissors'))// user= rock and computer=scissors
        console.log(player.Won('scissors','scissors'))// user= scissors and computer=scissors
        console.log(player.Won('scissors','rock'))// user=scissors  and computer=rock 
```
output:
```js
       true
       draw
       false
```


 
## extra
---
this are just some extras 
* you can clone this on [github](https://github.com/bethropolis/rockPaperScissorsJS) and if you would like to Contribute you can send  a pull request and I will check it out and see if I can marge it. 
* creator [bethropolis](https://github.com/bethropolis);

## License 
---
Licensed under my favourate License, MIT License.

