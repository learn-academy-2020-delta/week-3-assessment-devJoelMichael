# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer: Object destructering makes it so we do not have to use this.state.theThing or this.props.theThing. We make sue that the objects are = to this.state so that we can continue on with simpler code and make it more readable to ourselves and other developers who are working on the project with us.

  Researched answer: The object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables. What's better, object destructuring can extract multiple properties in one statement, can access properties from nested objects, and can set a default value if the property doesn't exist.



2. What are React lifecycle methods? Provide three examples.

  Your answer: I believe a lifecycle method is what goes inside of the components in react. They would include constructor and render but i don't know of a thrid.  

  Researched answer: You can think of React lifecycle methods as the series of events that happen from the birth of a React component to its death. 
  - componentDidMount() would be a third.



3. What is the difference between a class and an object?

  Your answer: A class is what stores objects, where as an Object like a piece of information that lives inside of the class. 
  class Person: (class)
  name: "" (Objects)
  age""(Objects) 

  Researched answer: Many people get confused by the difference between class and object. The difference is simple and conceptual. A class is a template for objects. A class defines object properties including a valid range of values, and a default value. A class also describes object behavior. An object is a member or an "instance" of a class. An object has a state in which all of its properties have values that you either explicitly define or that are defined by default settings.



4. What is the difference between a HTML div and a span?

  Your answer: Html div creates its own section/or seperates something from the main html page making it its own. Where as span works with indivitual parts of something on the web page. Like all the letters in a title could be <span> so that they could have seperate colors or movements depending on what you want to happen.

  Researched answer: A div is a block-level element and a span is an inline element. The div should be used to wrap sections of a document, while use spans to wrap small portions of text, images, etc. The <div> element is used while creating CSS based layouts in html, whereas <span> element is used to stylize texts.



5. What is React.Fragment (or <>) and why would you want to use it?

  Your answer: React.Fragments are used to hold all of our javascript inside (and anything else we put in there as well). Without them the code will not run properly and you will get error messages. They also hold acting as seperate pieces that we can all put into one big master piece (usually class App).

  Researched answer: You can use fragments to create components that return a list of elements without wrapping them in a container or array. This is useful for components that return form and text markup — as wrapping the result in a container <div> can cause headaches when styling things.



6. What are three options for creating responsive design?

  Your answer: Using CSS to manipulate the html and javascript. Styled-Components that allow you to manipulate each and every piece in fine detail (only in react, i think). In line, so inside of the property itself.

  Researched answer: 
  Responsive website design consists of the following three main components:
    Flexible layouts - Using a flexible grid to create the website layout that will dynamically resize to any width.
    Media queries - An extension to media types when targeting and including styles. Media queries allow designers to specify different styles for specific browser and device circumstances.
    Flexible media - Makes media (images, video and other formats) scalable, by changing the size of the media as the size of the viewport changes.

    (WOW I TOTALLY DIDN'T UNDERSTAND THE QUESTION HAHAHA SORRY ABOUT THAT.)

7. What are props in React?

  Your answer: They are used from the child class to reach the parent class anywhere in react, pretty much replacing (mostly in parts) this.state 

  Researched answer: “Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. But the important part here is that data with props are being passed in a uni-directional flow. ( one way from parent to child).



8. What is `this` in JavaScript?

  Your answer: `this` is what is needed to call state or props, it declares it to the code.

  Researched answer: A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode. In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).



9. STRETCH: What is a ternary operator in JavaScript?

  Your answer: I know it is something that can replace the use of if / else by using ? : but I don't fully know what it is. Or how its fully used.

  Researched answer: The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.



10. STRETCH: What is an anonymous function in JavaScript?

  Your answer:

  Researched answer:



## Looking Ahead: Terms for Next Week
- Ruby
- Object oriented programming
- RSpec
- Instance variable
- Ruby blocks
- Ruby hashes
- `getter` and `setter` methods in Ruby
