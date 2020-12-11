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
<p>RockPaperScissorsJS is a javascript library that simplifies the making of the great rock paper scissors game and easy to use</p><br>
<p> the package is made in a Javascript class format where your <b>play</b> will be considered an object</p>
Here is an example:

```js 
  const player = new Play('paper'); 
  //this creates a new object player and the action must be passed as an argument
  //the three actions are users guess which could be `rock`,`paper` or `scissors`

 console.log(player.Roll()); 
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
   <script src="./rockPaperScissors.JS"> </script>// get the library from the path where it's located
```
or if you are using a CDN then you can use the following
```html
   <script src="https://bethropolis.github.io/rockPaperScissorsJS/rockPaperScissors.JS"></script> 

```
> the import is still not fully functional <br>

> place the CDN link onto the header 
<br>

then crate an object to use
```js
    const player = new Play();// you can name it anything other than player
````
> you can find the demos [here](bethropolis.github.io/rockPaperScissorsJS)<br>

### using the functions
there are three functions; 
```js
       Roll(user)//argument are not required 
       Compute()
       Won(user, computer)// required!
```

> Note that the functions beggin with a capital letter.
### Roll
from the above example you can see that the `Roll()` function did everything for us without us doing anything.
the `Roll()` function requires no parameters if you stated it when making the Object.<br>
Example 1:
```js
  const player = new Play('rock');// user guess in this case is rock
  console.log(player.Roll());// since user guess was passed on the object there is no need to redo that again

```
Example 2:
```js
   const player = new Play();// user guess not passed
  console.log(player.Roll('paper'));

``` 
<br>
Example 1 output could be:

```js
    [
       user: rock,
       computer: scissors,
       won: true
    ]
```

Example 2 output could be:

```js
    [
       user: paper,
       computer: paper,
       won: draw
    ]
```
> the computer guess is randomly made



### Compute
---
  the `compute()` function will help you if you would like to get a random guess for the computer;<br>
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

you can do a lot more with this just check the examples [here](bethropolis.github.io/rockPaperScissorsJS)<br>

### won
  ```js    
         Won(user, computer)          
  ```
   This function determines the winner where the data passed <br>
   required arguments are `user` and `computer` guess or trows eg. `rock` or `paper` or `scissors`<br>
   but the arguments being passed are rather in numbers to represent the guesses.<br>
   how to represent:
   ```js
         'rock' = 1
         'paper' = 2
         'scissors' = 3
   ```
   it will to be like
  ```js
        player.Won(1,3)// user= rock and computer=scissors
        player.Won(2,2)// user= paper and computer=paper
        player.Won(3,1)// user=scissors  and computer=rock
  ```

Example:
```js
     const player = new Play();

        console.log(player.Won(1,2))// user= rock and computer=scissors
        console.log(player.Won(3,3))// user= scissors and computer=scissors
        console.log(player.Won(3,1))// user=scissors  and computer=rock
```
output:
```js
       true
       draw
       false
```
> it must be a number being passed
 
## extra
---
this are just some extras 
* you can clone this on [github](https://github.com/bethropolis/rockPaperScissorsJS) and if you would like to Contribute you can send  a pull request and I will check it out and see if I can marge it. 
* creator [bethropolis](https://twitter.com/bethropolis);

## License 
---
Licensed under my favourate License, MIT License.

