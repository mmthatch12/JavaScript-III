/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If 'this' is not otherwise assigned or scoped it will affect the global scope.
* 2. Even though an object may not specifically be set to or attached to 'this', if a function is called with the 'object.' before
    it the object will be 'this'.
* 3. New is used with a constructer function so that the constructor function can return an object. 
* 4. A binding that utilizes .call or .apply to explicitly define 'this'.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function whatUp(person) {
//     console.log(this);
//     return person;
// }
// whatUp('George');


// Principle 2

// code example for Implicit Binding

let obj1 = {
    favColor: 'Green',
    hobby: 'basketry',
    favThings: function() {
        console.log(`My favorite color is ${this.favColor} and my favorite hobby is ${this.hobby}`),
        console.log(this);
    }
};

obj1.favThings();

// Principle 3

// code example for New Binding

function PlayerAttributes(player) {
    this.strengh = 'High';
    this.balance = 'Medium';
    this.intelligence = 'Low';
    this.player = player;
    this.sayAttributes = function() {
        console.log(`${this.player} has ${this.strengh} strength, has ${this.balance} balance, and has ${this.intelligence} intelligence.`);
        // console.log(this);
    };
}

const verdasco = new PlayerAttributes('Verdasco')

verdasco.sayAttributes();
// Principle 4

// code example for Explicit Binding
function PlayerAttributes(player) {
    this.strengh = 'High';
    this.balance = 'Medium';
    this.intelligence = 'Low';
    this.player = player;
    this.sayAttributes = function() {
        console.log(`${this.player} has ${this.strengh} strength, has ${this.balance} balance, and has ${this.intelligence} intelligence.`);
        // console.log(this);
    };
}

const george = new PlayerAttributes('George')

verdasco.sayAttributes.call(george)