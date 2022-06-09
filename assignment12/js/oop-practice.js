// STEP 1
// 1.	Create two classes, one called Cat and another called Dog. 
// Both classes should be created using constructor syntax. 
//The Cat class should be created using a named declaration and 
//the Dog class should be created using an anonymous declaration.




// function Cat() {
//     this.name = 'Sharpie';
//     this.color = 'brown';
//         this.breed = 'persian cat'
//      }
//     const myCat = new Cat();
//     console.log(myCat.name);


//  const Dog = function() {
//     this.name = 'Moon';
//     this.color = 'white';
//     }
//     const myDog = new Dog();
//     console.log(myDog.name);



// STEP 2
// 2.	Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.

// const cat2 = new Cat();

// const dog2 = new Dog();


// STEP 3


// 3.	Create a new class using constructor syntax called Animal. 
// Create a method within the Animal class that when called, 
// displays the message “The Animal has been created” in the console window. 


// const Animal = {
// 	status: 'The Animal has been created'
// };
// const Cat = Object.create(Animal);
// console.log(Cat.status);


// STEP 4
// 4.	Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.


// const Animal = {
//     status: 'The Animal has been created',
// 	displayCatInfo: function(breed, color) {
// 		return `${this.status}. His name is ${this.name} he is a ${color}  ${breed}`;
// 	}
// };
// const Cat = Object.create(Animal, {
// 	name: {value: 'Sharpie'}
// });
// console.log(Cat.displayCatInfo('Sharpie', 'brown'));
// console.log(Cat.name);
// console.log(Cat.breed);



// STEP 5

// 5.	Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. 


// class Animal {
//     constructor(type, breed, color, height, lengt){
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.lengt = lengt;
//     }
// hungry = function(){
//     console.log(`The ${this.type} animal is a ${this.breed} he is ${this.color}  and ${this.height} and ${this.lengt} is hungry`)
// }
// static bark = function() {console.log(`Now he is barkling`)}
// }

// const Sharpie = new Animal (`Cat`, `Persian cat` `White`  `9.1 in` `18 in`)
// Sharpie.hungry();
// Animal.bark();


// STEP 6
// 6.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

// const Animal = {
//     type : 'Dog',
//     breed : 'Persian cat',
//     color : 'White',
//     height : '9.1 in',
//     lengt : '18 in',
// }

// for (const key in Animal){
//     if(Animal.hasOwnProperty(key)){
//         console.log(`${key}: ${Animal[key]}`);
//     }
// }

// STEP 7
// 7.	Now, create a public method called speak. 
// Within the speak method you will use a conditional to check the type of Animal being created. 
// If it’s a dog, return “The <color> dog is barking!” 
// If it’s a cat return “The <color> cat is meowing!” instead. 
// Call that method after the Animal class has been instantiated.


// function Animal {

//     contructor(name, type, color){

//     }

// 	let color = breed;				
// 	let displayBreed = function() {			
// 		console.log(`The ${color} cat is meowing!`);
// 	}
// 	this.speack = function() {			
// 		displayBreed();
// 	}
// }

// const nixon = new Cat('Bengal');
// nixon.showBreedOfCat();					






// STEP 8

// STEP 9



