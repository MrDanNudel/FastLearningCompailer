document.addEventListener("DOMContentLoaded", function () {
  const allData = [
    {
      subject: "html",
      questions: [
        // Existing questions
        {
          question: "What does HTML stand for?",
          answer: "HyperText Markup Language",
        },
        {
          question: "What is the purpose of the <head> tag in HTML?",
          answer: "To contain metadata and links to external resources",
        },
        // Add 20 new questions for HTML
        {
          question: "What is the purpose of the <meta> tag in HTML?",
          answer: "To provide metadata about the HTML document",
        },
        {
          question: "How do you insert an image in HTML?",
          answer: "Using the <img> tag with the src attribute",
        },
        {
          question: "What does the <a> tag do in HTML?",
          answer: "Defines a hyperlink",
        },
        {
          question: "How can you create a table in HTML?",
          answer: "Using <table>, <tr>, <td>, and <th> tags",
        },
        {
          question: "What is the purpose of the <form> tag?",
          answer: "To create an HTML form for user input",
        },
        {
          question: "How do you create a checkbox in HTML?",
          answer: 'Using the <input> tag with type="checkbox"',
        },
        {
          question: "What is the difference between <div> and <span> tags?",
          answer:
            "<div> is a block-level element while <span> is an inline element",
        },
        {
          question: "How do you make text bold in HTML?",
          answer: "Using the <strong> or <b> tag",
        },
        {
          question: "What is the <iframe> tag used for?",
          answer: "To embed another HTML document within the current one",
        },
        {
          question: "How do you create an ordered list in HTML?",
          answer: "Using the <ol> tag",
        },
        {
          question: "How do you include an external CSS file in HTML?",
          answer: 'Using the <link> tag with rel="stylesheet"',
        },
        {
          question: "What is the purpose of the <title> tag?",
          answer:
            "To set the title of the HTML document displayed in the browser's title bar",
        },
        {
          question: "How do you create a hyperlink that opens in a new tab?",
          answer: 'Using the <a> tag with target="_blank" attribute',
        },
        {
          question: "What does the <script> tag do?",
          answer: "Defines client-side JavaScript",
        },
        {
          question: "How do you add a comment in HTML?",
          answer: "Using <!-- comment -->",
        },
        {
          question:
            "What is the purpose of the <link> tag in the <head> section?",
          answer: "To link external resources like CSS files",
        },
        {
          question: "How do you make text italic in HTML?",
          answer: "Using the <em> or <i> tag",
        },
        {
          question: "What is the <noscript> tag used for?",
          answer:
            "To provide alternative content for users with JavaScript disabled",
        },
        {
          question: "How do you create a dropdown list in HTML?",
          answer: "Using the <select> tag with <option> elements",
        },
        {
          question: "What does the <meta name='viewport'> tag do?",
          answer: "Controls the viewport's size and scale on mobile browsers",
        },
        {
          question: "How do you add a favicon to your HTML page?",
          answer: 'Using the <link> tag with rel="icon"',
        },
        {
          subject: "JavaScript",
          questions: [
            {
              question: "What is JavaScript?",
              answer:
                "JavaScript is a versatile programming language primarily used for creating interactive effects within web browsers.",
            },
            {
              question: "How do you create a variable in JavaScript?",
              answer:
                "You can create a variable in JavaScript using var, let, or const. For example: let myVariable = 'Hello';",
            },
            {
              question: "What are the data types in JavaScript?",
              answer:
                "JavaScript has several data types including undefined, null, boolean, string, symbol, number, and object.",
            },
            {
              question: "What is a function in JavaScript?",
              answer:
                "A function in JavaScript is a block of code designed to perform a particular task. It is executed when it is called (invoked).",
            },
            {
              question: "How do you create a function in JavaScript?",
              answer:
                "You can create a function using the function keyword: function myFunction() { // code to be executed }",
            },
            {
              question:
                "What is the difference between == and === in JavaScript?",
              answer:
                "== checks for value equality while === checks for both value and type equality.",
            },
            {
              question: "What is an array in JavaScript?",
              answer:
                "An array is a single variable that is used to store different elements. It is a collection of elements of any data type.",
            },
            {
              question: "How do you add an element to an array in JavaScript?",
              answer:
                "You can add an element to an array using the push() method: array.push(element);",
            },
            {
              question: "What is an object in JavaScript?",
              answer:
                "An object is a collection of properties, and a property is an association between a name (or key) and a value.",
            },
            {
              question: "How do you create an object in JavaScript?",
              answer:
                "You can create an object using object literals or the new Object() syntax: let obj = {}; or let obj = new Object();",
            },
            {
              question: "What is a prototype in JavaScript?",
              answer:
                "A prototype is an object from which other objects inherit properties.",
            },
            {
              question: "What is a callback function in JavaScript?",
              answer:
                "A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.",
            },
            {
              question: "What is a promise in JavaScript?",
              answer:
                "A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
            },
            {
              question: "How do you create a promise in JavaScript?",
              answer:
                "You can create a promise using the Promise constructor: let promise = new Promise(function(resolve, reject) { // executor code });",
            },
            {
              question: "What are async and await in JavaScript?",
              answer:
                "Async functions are functions that return a Promise, and await is an operator used to wait for a Promise. It can only be used inside an async function.",
            },
            {
              question: "What is the DOM in JavaScript?",
              answer:
                "The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.",
            },
            {
              question:
                "How do you select an element in the DOM using JavaScript?",
              answer:
                "You can select an element using methods like getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), and querySelectorAll().",
            },
            {
              question: "What is event bubbling in JavaScript?",
              answer:
                "Event bubbling is a type of event propagation where the event starts from the target element and bubbles up to the root element.",
            },
            {
              question: "What is event delegation in JavaScript?",
              answer:
                "Event delegation is a technique of using a single event listener to manage all events of a particular type, forgoing the need to attach separate listeners to each element.",
            },
            {
              question:
                "What is the difference between null and undefined in JavaScript?",
              answer:
                "Undefined means a variable has been declared but has not yet been assigned a value, while null is an assignment value that represents no value.",
            },
            {
              question: "What are closures in JavaScript?",
              answer:
                "A closure is a function that remembers the environment in which it was created. This environment consists of any local variables that were in-scope at the time the closure was created.",
            },
            {
              question: "How do you create a closure in JavaScript?",
              answer:
                "A closure is created when a function is defined within another function and the inner function references variables from the outer function.",
            },
            {
              question: "What is the use of the 'this' keyword in JavaScript?",
              answer:
                "The 'this' keyword refers to the object it belongs to. It has different values depending on where it is used: in a method, alone, in a function, in an event, etc.",
            },
            {
              question:
                "What is the difference between call, apply, and bind in JavaScript?",
              answer:
                "call and apply are used to invoke functions with a specified 'this' value, while bind returns a new function with a bound 'this' value.",
            },
            {
              question: "What is the use of the spread operator in JavaScript?",
              answer:
                "The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected.",
            },
            {
              question: "What is destructuring in JavaScript?",
              answer:
                "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.",
            },
            {
              question: "What are template literals in JavaScript?",
              answer:
                "Template literals are string literals that allow embedded expressions, and they are enclosed by backticks (` `) instead of quotes.",
            },
            {
              question: "How do you handle exceptions in JavaScript?",
              answer:
                "You can handle exceptions using try, catch, finally blocks: try { // code } catch (error) { // handle error } finally { // cleanup code }",
            },
            {
              question: "What is the use of the fetch API in JavaScript?",
              answer:
                "The fetch API is used to make network requests similar to XMLHttpRequest. It returns a promise that resolves to the response of the request.",
            },
            {
              question: "What is an IIFE in JavaScript?",
              answer:
                "An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined: (function() { // code })();",
            },
            {
              question:
                "What is the difference between let, var, and const in JavaScript?",
              answer:
                "var is function-scoped, while let and const are block-scoped. const also ensures that the variable is not reassignable.",
            },
            {
              question: "What is hoisting in JavaScript?",
              answer:
                "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Only the declarations are hoisted, not the initializations.",
            },
            {
              question: "What is the event loop in JavaScript?",
              answer:
                "The event loop is a mechanism that continuously checks the message queue and executes tasks from it one at a time.",
            },
            {
              question: "What are the different types of loops in JavaScript?",
              answer:
                "JavaScript supports various types of loops including for, while, do-while, for-in, and for-of loops.",
            },
            {
              question: "What is a promise chain in JavaScript?",
              answer:
                "A promise chain is a sequence of promises where each promise returns another promise, allowing asynchronous operations to be performed in sequence.",
            },
            {
              question: "What is a module in JavaScript?",
              answer:
                "A module is a file containing JavaScript code that is executed in its own scope, not in the global scope. Modules export values, functions, or classes that can be imported into other modules.",
            },
            {
              question: "How do you export and import modules in JavaScript?",
              answer:
                "You can export modules using export keyword and import them using import keyword: export const myFunction = () => {}; import { myFunction } from './myModule';",
            },
            {
              question:
                "What is the difference between synchronous and asynchronous code in JavaScript?",
              answer:
                "Synchronous code is executed line by line, while asynchronous code allows the program to continue running while waiting for an operation to complete.",
            },
            {
              question: "What is JSON and how is it used in JavaScript?",
              answer:
                "JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is used to exchange data between a server and a web application. JSON data can be converted to a JavaScript object using JSON.parse(), and a JavaScript object can be converted to JSON using JSON.stringify().",
            },
            {
              question: "What is the use of the map method in JavaScript?",
              answer:
                "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.",
            },
            {
              question: "What is the use of the filter method in JavaScript?",
              answer:
                "The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
            },
            {
              question: "What is the use of the reduce method in JavaScript?",
              answer:
                "The reduce() method executes a reducer function on each element of the array, resulting in a single output value.",
            },
            {
              question: "What is a generator function in JavaScript?",
              answer:
                "A generator function is a special type of function that can be paused and resumed, and it generates an iterator. It is defined using the function* syntax.",
            },
            {
              question: "How do you use a generator function in JavaScript?",
              answer:
                "You can use a generator function by calling the function to create an iterator and using the next() method to iterate through the values: function* myGenerator() { yield 1; yield 2; } const gen = myGenerator(); gen.next().value; // 1",
            },
            {
              question: "What is an arrow function in JavaScript?",
              answer:
                "An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target. It is defined using the => syntax.",
            },
            {
              question: "What is the use of the rest parameter in JavaScript?",
              answer:
                "The rest parameter syntax allows a function to accept an indefinite number of arguments as an array: function myFunction(...args) { // args is an array }",
            },
          ],
        },
      ],
    },
    {
      subject: "css",
      questions: [
        // Existing questions
        {
          question: "What does CSS stand for?",
          answer: "Cascading Style Sheets",
        },
        {
          question: "How do you include a CSS file in an HTML document?",
          answer: 'Using the <link> tag with rel="stylesheet"',
        },
        // Add 20 new questions for CSS
        {
          question: "What is the purpose of the 'box-sizing' property?",
          answer:
            "To control how the width and height of an element are calculated",
        },
        {
          question: "How do you center a block-level element horizontally?",
          answer: "Using margin: auto with a fixed width",
        },
        {
          question: "What does the 'display: flex;' property do?",
          answer: "Enables a flexible layout for children elements",
        },
        {
          question: "How do you create a CSS grid layout?",
          answer: "Using the display: grid; property",
        },
        {
          question: "What is the purpose of the 'z-index' property?",
          answer: "To control the stacking order of positioned elements",
        },
        {
          question: "How do you make a text element bold using CSS?",
          answer: "Using font-weight: bold;",
        },
        {
          question: "What is the use of the 'opacity' property?",
          answer: "To set the transparency level of an element",
        },
        {
          question: "How can you create a hover effect in CSS?",
          answer: "Using the :hover pseudo-class",
        },
        {
          question: "What does the 'position: absolute;' property do?",
          answer:
            "Positions an element relative to its closest positioned ancestor",
        },
        {
          question: "How do you set a background image in CSS?",
          answer: "Using the background-image property",
        },
        {
          question: "What is the purpose of the 'float' property?",
          answer:
            "To position elements to the left or right, allowing text to wrap around them",
        },
        {
          question:
            "How do you apply a style to all <p> elements within a <div>?",
          answer: "Using div p { ... } selector",
        },
        {
          question: "What does the 'text-align' property do?",
          answer: "Aligns text within an element",
        },
        {
          question: "How can you create rounded corners on an element?",
          answer: "Using the border-radius property",
        },
        {
          question: "What does the 'flex-direction' property control?",
          answer: "The direction in which flex items are laid out",
        },
        {
          question: "How do you change the font size of text in CSS?",
          answer: "Using the font-size property",
        },
        {
          question: "What is the 'em' unit used for in CSS?",
          answer:
            "To specify font sizes relative to the parent element's font size",
        },
        {
          question: "How do you set a fixed height for an element in CSS?",
          answer: "Using the height property with a fixed value",
        },
        {
          question: "What is the purpose of the 'border' property?",
          answer: "To set the width, style, and color of an element's border",
        },
        {
          question: "How can you use a CSS variable?",
          answer:
            "By defining a variable with --variable-name and using it with var(--variable-name)",
        },
      ],
    },
    {
      subject: "JavaScript",
      questions: [
        {
          question: "What is JavaScript?",
          answer:
            "JavaScript is a versatile programming language primarily used for creating interactive effects within web browsers.",
        },
        {
          question: "How do you create a variable in JavaScript?",
          answer:
            "You can create a variable in JavaScript using var, let, or const. For example: let myVariable = 'Hello';",
        },
        {
          question: "What are the data types in JavaScript?",
          answer:
            "JavaScript has several data types including undefined, null, boolean, string, symbol, number, and object.",
        },
        {
          question: "What is a function in JavaScript?",
          answer:
            "A function in JavaScript is a block of code designed to perform a particular task. It is executed when it is called (invoked).",
        },
        {
          question: "How do you create a function in JavaScript?",
          answer:
            "You can create a function using the function keyword: function myFunction() { // code to be executed }",
        },
        {
          question: "What is the difference between == and === in JavaScript?",
          answer:
            "== checks for value equality while === checks for both value and type equality.",
        },
        {
          question: "What is an array in JavaScript?",
          answer:
            "An array is a single variable that is used to store different elements. It is a collection of elements of any data type.",
        },
        {
          question: "How do you add an element to an array in JavaScript?",
          answer:
            "You can add an element to an array using the push() method: array.push(element);",
        },
        {
          question: "What is an object in JavaScript?",
          answer:
            "An object is a collection of properties, and a property is an association between a name (or key) and a value.",
        },
        {
          question: "How do you create an object in JavaScript?",
          answer:
            "You can create an object using object literals or the new Object() syntax: let obj = {}; or let obj = new Object();",
        },
        {
          question: "What is a prototype in JavaScript?",
          answer:
            "A prototype is an object from which other objects inherit properties.",
        },
        {
          question: "What is a callback function in JavaScript?",
          answer:
            "A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.",
        },
        {
          question: "What is a promise in JavaScript?",
          answer:
            "A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
        },
        {
          question: "How do you create a promise in JavaScript?",
          answer:
            "You can create a promise using the Promise constructor: let promise = new Promise(function(resolve, reject) { // executor code });",
        },
        {
          question: "What are async and await in JavaScript?",
          answer:
            "Async functions are functions that return a Promise, and await is an operator used to wait for a Promise. It can only be used inside an async function.",
        },
        {
          question: "What is the DOM in JavaScript?",
          answer:
            "The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.",
        },
        {
          question: "How do you select an element in the DOM using JavaScript?",
          answer:
            "You can select an element using methods like getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), and querySelectorAll().",
        },
        {
          question: "What is event bubbling in JavaScript?",
          answer:
            "Event bubbling is a type of event propagation where the event starts from the target element and bubbles up to the root element.",
        },
        {
          question: "What is event delegation in JavaScript?",
          answer:
            "Event delegation is a technique of using a single event listener to manage all events of a particular type, forgoing the need to attach separate listeners to each element.",
        },
        {
          question:
            "What is the difference between null and undefined in JavaScript?",
          answer:
            "Undefined means a variable has been declared but has not yet been assigned a value, while null is an assignment value that represents no value.",
        },
        {
          question: "What are closures in JavaScript?",
          answer:
            "A closure is a function that remembers the environment in which it was created. This environment consists of any local variables that were in-scope at the time the closure was created.",
        },
        {
          question: "How do you create a closure in JavaScript?",
          answer:
            "A closure is created when a function is defined within another function and the inner function references variables from the outer function.",
        },
        {
          question: "What is the use of the 'this' keyword in JavaScript?",
          answer:
            "The 'this' keyword refers to the object it belongs to. It has different values depending on where it is used: in a method, alone, in a function, in an event, etc.",
        },
        {
          question:
            "What is the difference between call, apply, and bind in JavaScript?",
          answer:
            "call and apply are used to invoke functions with a specified 'this' value, while bind returns a new function with a bound 'this' value.",
        },
        {
          question: "What is the use of the spread operator in JavaScript?",
          answer:
            "The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected.",
        },
        {
          question: "What is destructuring in JavaScript?",
          answer:
            "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.",
        },
        {
          question: "What are template literals in JavaScript?",
          answer:
            "Template literals are string literals that allow embedded expressions, and they are enclosed by backticks (` `) instead of quotes.",
        },
        {
          question: "How do you handle exceptions in JavaScript?",
          answer:
            "You can handle exceptions using try, catch, finally blocks: try { // code } catch (error) { // handle error } finally { // cleanup code }",
        },
        {
          question: "What is the use of the fetch API in JavaScript?",
          answer:
            "The fetch API is used to make network requests similar to XMLHttpRequest. It returns a promise that resolves to the response of the request.",
        },
        {
          question: "What is an IIFE in JavaScript?",
          answer:
            "An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined: (function() { // code })();",
        },
        {
          question:
            "What is the difference between let, var, and const in JavaScript?",
          answer:
            "var is function-scoped, while let and const are block-scoped. const also ensures that the variable is not reassignable.",
        },
        {
          question: "What is hoisting in JavaScript?",
          answer:
            "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Only the declarations are hoisted, not the initializations.",
        },
        {
          question: "What is the event loop in JavaScript?",
          answer:
            "The event loop is a mechanism that continuously checks the message queue and executes tasks from it one at a time.",
        },
        {
          question: "What are the different types of loops in JavaScript?",
          answer:
            "JavaScript supports various types of loops including for, while, do-while, for-in, and for-of loops.",
        },
        {
          question: "What is a promise chain in JavaScript?",
          answer:
            "A promise chain is a sequence of promises where each promise returns another promise, allowing asynchronous operations to be performed in sequence.",
        },
        {
          question: "What is a module in JavaScript?",
          answer:
            "A module is a file containing JavaScript code that is executed in its own scope, not in the global scope. Modules export values, functions, or classes that can be imported into other modules.",
        },
        {
          question: "How do you export and import modules in JavaScript?",
          answer:
            "You can export modules using export keyword and import them using import keyword: export const myFunction = () => {}; import { myFunction } from './myModule';",
        },
        {
          question:
            "What is the difference between synchronous and asynchronous code in JavaScript?",
          answer:
            "Synchronous code is executed line by line, while asynchronous code allows the program to continue running while waiting for an operation to complete.",
        },
        {
          question: "What is JSON and how is it used in JavaScript?",
          answer:
            "JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is used to exchange data between a server and a web application. JSON data can be converted to a JavaScript object using JSON.parse(), and a JavaScript object can be converted to JSON using JSON.stringify().",
        },
        {
          question: "What is the use of the map method in JavaScript?",
          answer:
            "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.",
        },
        {
          question: "What is the use of the filter method in JavaScript?",
          answer:
            "The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
        },
        {
          question: "What is the use of the reduce method in JavaScript?",
          answer:
            "The reduce() method executes a reducer function on each element of the array, resulting in a single output value.",
        },
        {
          question: "What is a generator function in JavaScript?",
          answer:
            "A generator function is a special type of function that can be paused and resumed, and it generates an iterator. It is defined using the function* syntax.",
        },
        {
          question: "How do you use a generator function in JavaScript?",
          answer:
            "You can use a generator function by calling the function to create an iterator and using the next() method to iterate through the values: function* myGenerator() { yield 1; yield 2; } const gen = myGenerator(); gen.next().value; // 1",
        },
        {
          question: "What is an arrow function in JavaScript?",
          answer:
            "An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target. It is defined using the => syntax.",
        },
        {
          question: "What is the use of the rest parameter in JavaScript?",
          answer:
            "The rest parameter syntax allows a function to accept an indefinite number of arguments as an array: function myFunction(...args) { // args is an array }",
        },
      ],
    },
    {
      subject: "SQL",
      questions: [
        {
          question: "What is SQL?",
          answer:
            "SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases.",
        },
        {
          question: "What is a database?",
          answer:
            "A database is an organized collection of structured information, or data, typically stored electronically in a computer system.",
        },
        {
          question: "What is a table in SQL?",
          answer:
            "A table is a collection of related data entries that consists of columns and rows in a relational database.",
        },
        {
          question: "How do you create a table in SQL?",
          answer:
            "You create a table using the CREATE TABLE statement: CREATE TABLE table_name (column1 datatype, column2 datatype, ...);",
        },
        {
          question: "What is a primary key in SQL?",
          answer:
            "A primary key is a field (or fields) in a table that uniquely identifies each row/record in that table.",
        },
        {
          question: "How do you insert data into a table in SQL?",
          answer:
            "You insert data using the INSERT INTO statement: INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);",
        },
        {
          question: "What is a foreign key in SQL?",
          answer:
            "A foreign key is a field (or fields) in one table that uniquely identifies a row of another table or the same table.",
        },
        {
          question: "How do you update data in a table in SQL?",
          answer:
            "You update data using the UPDATE statement: UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;",
        },
        {
          question: "How do you delete data from a table in SQL?",
          answer:
            "You delete data using the DELETE statement: DELETE FROM table_name WHERE condition;",
        },
        {
          question: "What is a SELECT statement in SQL?",
          answer:
            "The SELECT statement is used to select data from a database: SELECT column1, column2, ... FROM table_name;",
        },
        {
          question: "What is a JOIN in SQL?",
          answer:
            "A JOIN clause is used to combine rows from two or more tables, based on a related column between them.",
        },
        {
          question: "What are the different types of JOINs in SQL?",
          answer:
            "The different types of JOINs are INNER JOIN, LEFT JOIN (or LEFT OUTER JOIN), RIGHT JOIN (or RIGHT OUTER JOIN), and FULL JOIN (or FULL OUTER JOIN).",
        },
        {
          question: "What is a WHERE clause in SQL?",
          answer:
            "The WHERE clause is used to filter records. It is used to extract only those records that fulfill a specified condition.",
        },
        {
          question: "What is an SQL injection?",
          answer:
            "SQL injection is a code injection technique that might destroy your database. It is one of the most common web hacking techniques.",
        },
        {
          question: "How do you prevent SQL injection?",
          answer:
            "You can prevent SQL injection by using parameterized queries, stored procedures, and by validating user inputs.",
        },
        {
          question: "What is a stored procedure in SQL?",
          answer:
            "A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again.",
        },
        {
          question: "What is a view in SQL?",
          answer:
            "A view is a virtual table based on the result-set of an SQL statement. It contains rows and columns, just like a real table.",
        },
        {
          question: "What is a subquery in SQL?",
          answer:
            "A subquery is a query within another query. The outer query is called the main query, and the inner query is called the subquery.",
        },
        {
          question:
            "What is the difference between UNION and UNION ALL in SQL?",
          answer:
            "UNION combines the result set of two or more SELECT statements and removes duplicates, while UNION ALL combines the result set and includes duplicates.",
        },
        {
          question: "What is indexing in SQL?",
          answer:
            "Indexing is a database technique used to improve the speed of data retrieval operations on a table by creating a special lookup table that the database search engine can use to speed up data retrieval.",
        },
      ],
    },
    {
      subject: "Java",
      questions: [
        {
          question: "What is Java?",
          answer:
            "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        },
        {
          question: "What is JVM?",
          answer:
            "JVM (Java Virtual Machine) is an abstract machine that enables your computer to run a Java program.",
        },
        {
          question: "What is JRE?",
          answer:
            "JRE (Java Runtime Environment) is a set of software tools used for developing Java applications. It includes the JVM, core libraries, and other components to run applications written in Java.",
        },
        {
          question: "What is JDK?",
          answer:
            "JDK (Java Development Kit) is a software development environment used for developing Java applications and applets. It includes JRE, an interpreter/loader, a compiler, an archiver, a documentation generator, and other tools needed for Java development.",
        },
        {
          question: "What are the main features of Java?",
          answer:
            "The main features of Java are: Simple, Object-Oriented, Portable, Platform Independent, Secured, Robust, Multithreaded, Architecture Neutral, Interpreted, High Performance, Distributed, and Dynamic.",
        },
        {
          question: "What is a class in Java?",
          answer:
            "A class is a blueprint from which individual objects are created. A class can contain fields and methods to define the behavior of an object.",
        },
        {
          question: "What is an object in Java?",
          answer:
            "An object is an instance of a class. It has state (fields) and behavior (methods).",
        },
        {
          question: "What is inheritance in Java?",
          answer:
            "Inheritance is a mechanism where one class acquires the property of another class. With inheritance, we can reuse the fields and methods of the existing class.",
        },
        {
          question: "What is polymorphism in Java?",
          answer:
            "Polymorphism means 'many forms'. In Java, polymorphism allows us to perform a single action in different ways. It is mainly achieved through method overloading and method overriding.",
        },
        {
          question: "What is encapsulation in Java?",
          answer:
            "Encapsulation is the process of wrapping code and data together into a single unit. In Java, encapsulation is achieved through the use of classes and access modifiers.",
        },
        {
          question: "What is abstraction in Java?",
          answer:
            "Abstraction is the concept of hiding the complex implementation details and showing only the essential features of an object. It is achieved through abstract classes and interfaces.",
        },
        {
          question:
            "What is the difference between an abstract class and an interface in Java?",
          answer:
            "An abstract class can have both abstract and concrete methods, while an interface can have only abstract methods (before Java 8). From Java 8, interfaces can have default and static methods.",
        },
        {
          question: "What is a constructor in Java?",
          answer:
            "A constructor is a block of code that initializes a newly created object. It has the same name as the class and does not have a return type.",
        },
        {
          question: "What is method overloading in Java?",
          answer:
            "Method overloading is a feature that allows a class to have more than one method with the same name, but different parameters.",
        },
        {
          question: "What is method overriding in Java?",
          answer:
            "Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass.",
        },
        {
          question: "What is a static method in Java?",
          answer:
            "A static method is a method that belongs to the class rather than an instance of the class. It can be called without creating an instance of the class.",
        },
        {
          question: "What is 'this' keyword in Java?",
          answer:
            "The 'this' keyword is a reference variable that refers to the current object.",
        },
        {
          question: "What is 'super' keyword in Java?",
          answer:
            "The 'super' keyword is a reference variable that is used to refer to the immediate parent class object.",
        },
        {
          question: "What is an exception in Java?",
          answer:
            "An exception is an event that disrupts the normal flow of the program. It is an object which is thrown at runtime.",
        },
        {
          question:
            "What is the difference between checked and unchecked exceptions in Java?",
          answer:
            "Checked exceptions are checked at compile-time, while unchecked exceptions are checked at runtime. Examples of checked exceptions include IOException and SQLException. Examples of unchecked exceptions include ArithmeticException and NullPointerException.",
        },
        {
          question: "What is a try-catch block in Java?",
          answer:
            "A try-catch block is used to handle exceptions. The code that might throw an exception is placed inside the try block, and the code to handle the exception is placed inside the catch block.",
        },
        {
          question: "What is a finally block in Java?",
          answer:
            "A finally block is used to execute important code such as closing a resource. The code inside the finally block will always be executed whether an exception is handled or not.",
        },
        {
          question: "What is a package in Java?",
          answer:
            "A package is a namespace that organizes classes and interfaces by functionality. It helps to avoid name conflicts and to control access.",
        },
        {
          question: "What is a Java thread?",
          answer:
            "A thread is a lightweight subprocess, the smallest unit of processing. It is a separate path of execution.",
        },
        {
          question: "What is multithreading in Java?",
          answer:
            "Multithreading is a process of executing multiple threads simultaneously to maximize the utilization of CPU.",
        },
        {
          question: "What is synchronization in Java?",
          answer:
            "Synchronization is a mechanism that ensures that two or more concurrent threads do not simultaneously execute some particular segment of the program, which can lead to unexpected results.",
        },
        {
          question:
            "What is the difference between String, StringBuilder, and StringBuffer in Java?",
          answer:
            "String is immutable, meaning it cannot be changed once created. StringBuilder is mutable and not synchronized, making it faster. StringBuffer is mutable and synchronized, making it thread-safe but slower.",
        },
        {
          question: "What is garbage collection in Java?",
          answer:
            "Garbage collection is the process by which Java programs perform automatic memory management by reclaiming memory used by objects that are no longer reachable.",
        },
        {
          question:
            "What is the difference between a class and an object in Java?",
          answer:
            "A class is a blueprint or template from which objects are created, while an object is an instance of a class.",
        },
        {
          question: "What is the role of the main method in Java?",
          answer:
            "The main method is the entry point of any Java program. It is always written as public static void main(String[] args).",
        },
      ],
    },
    {
      subject: "Spring Boot",
      questions: [
        {
          question: "What is Spring Boot?",
          answer:
            "Spring Boot is an open source, microservice-based framework that is used to create stand-alone, production-grade Spring-based applications with minimal configuration.",
        },
        {
          question: "What are the advantages of using Spring Boot?",
          answer:
            "Spring Boot simplifies the development of new Spring applications, reduces the amount of boilerplate code, and provides out-of-the-box configurations for various services, making it easier to create and deploy production-ready applications quickly.",
        },
        {
          question: "What is the Spring Boot starter?",
          answer:
            "Spring Boot starters are a set of convenient dependency descriptors that you can include in your application to get a set of libraries and configurations for a specific functionality, such as web, data, or security.",
        },
        {
          question: "What is the use of the @SpringBootApplication annotation?",
          answer:
            "The @SpringBootApplication annotation is used to mark a configuration class that declares one or more @Bean methods and triggers auto-configuration and component scanning. It is a combination of @Configuration, @EnableAutoConfiguration, and @ComponentScan annotations.",
        },
        {
          question: "How do you create a Spring Boot application?",
          answer:
            "You can create a Spring Boot application using Spring Initializr (a web-based tool), Spring Boot CLI, or your favorite IDE with Spring Boot support. The process typically involves creating a new project, adding necessary dependencies, and writing the application code.",
        },
        {
          question: "What is Spring Initializr?",
          answer:
            "Spring Initializr is a web-based tool provided by the Spring team to bootstrap a Spring Boot project with the necessary dependencies and configurations.",
        },
        {
          question: "What is an embedded server in Spring Boot?",
          answer:
            "An embedded server is a server that is packaged with your Spring Boot application, allowing you to run your application as a standalone service without the need for an external server.",
        },
        {
          question:
            "What are some common embedded servers supported by Spring Boot?",
          answer:
            "Spring Boot supports several embedded servers, including Tomcat, Jetty, and Undertow.",
        },
        {
          question: "How do you configure an embedded server in Spring Boot?",
          answer:
            "You can configure an embedded server in Spring Boot using application.properties or application.yml files. You can specify server properties such as port number, context path, and other settings.",
        },
        {
          question: "What is the use of application.properties in Spring Boot?",
          answer:
            "The application.properties file is used to configure application settings and properties in a Spring Boot application. It allows you to set various configuration parameters, such as server port, database connection details, and more.",
        },
        {
          question:
            "What is the difference between application.properties and application.yml in Spring Boot?",
          answer:
            "Both application.properties and application.yml are used for configuration in Spring Boot. The primary difference is the format: application.properties uses a key-value pair format, while application.yml uses YAML (YAML Ain't Markup Language) format, which is more human-readable and supports hierarchical data structures.",
        },
        {
          question: "What is Spring Boot auto-configuration?",
          answer:
            "Spring Boot auto-configuration is a feature that automatically configures your Spring application based on the dependencies you have added. It reduces the need for manual configuration and helps to get your application up and running quickly.",
        },
        {
          question:
            "What is the use of the @RestController annotation in Spring Boot?",
          answer:
            "The @RestController annotation is used to create RESTful web services in Spring Boot. It combines the @Controller and @ResponseBody annotations, allowing you to handle HTTP requests and return JSON or XML responses directly from the controller methods.",
        },
        {
          question:
            "What is the difference between @Controller and @RestController in Spring Boot?",
          answer:
            "The @Controller annotation is used to define a standard web controller that handles HTTP requests and returns a view name, while the @RestController annotation is used to create RESTful web services and returns JSON or XML responses directly.",
        },
        {
          question:
            "What is the use of the @RequestMapping annotation in Spring Boot?",
          answer:
            "The @RequestMapping annotation is used to map HTTP requests to specific handler methods in a controller. It can be used at both the class and method levels to define the URL patterns and HTTP methods for handling requests.",
        },
        {
          question:
            "What is the use of the @GetMapping, @PostMapping, @PutMapping, and @DeleteMapping annotations in Spring Boot?",
          answer:
            "These annotations are specialized versions of the @RequestMapping annotation. They are used to map specific HTTP methods to handler methods in a controller: @GetMapping for GET requests, @PostMapping for POST requests, @PutMapping for PUT requests, and @DeleteMapping for DELETE requests.",
        },
        {
          question: "How do you handle exceptions in Spring Boot?",
          answer:
            "You can handle exceptions in Spring Boot using @ExceptionHandler methods in a controller, @ControllerAdvice classes for global exception handling, and custom error pages or error attributes.",
        },
        {
          question:
            "What is the use of the @EnableAutoConfiguration annotation in Spring Boot?",
          answer:
            "The @EnableAutoConfiguration annotation is used to enable Spring Boot's auto-configuration feature. It tells Spring Boot to automatically configure the application based on the dependencies and configurations available in the classpath.",
        },
        {
          question: "What is Spring Data JPA in Spring Boot?",
          answer:
            "Spring Data JPA is a part of the Spring Data project that makes it easier to implement JPA-based repositories. It provides a set of interfaces and classes for accessing and managing relational data using the Java Persistence API (JPA).",
        },
        {
          question: "What is the use of the @Entity annotation in Spring Boot?",
          answer:
            "The @Entity annotation is used to mark a class as a JPA entity. It indicates that the class is a persistent entity that will be mapped to a database table.",
        },
        {
          question:
            "What is the use of the @Repository annotation in Spring Boot?",
          answer:
            "The @Repository annotation is used to indicate that a class is a repository, which is a mechanism for encapsulating storage, retrieval, and search behavior of objects. It is also a marker for component scanning and exception translation.",
        },
        {
          question:
            "What is the use of the @Service annotation in Spring Boot?",
          answer:
            "The @Service annotation is used to mark a class as a service layer component. It is a specialization of the @Component annotation and is used to indicate that the class contains business logic.",
        },
        {
          question: "What is Spring Boot Actuator?",
          answer:
            "Spring Boot Actuator is a set of built-in endpoints that provide various management and monitoring features for a Spring Boot application. It includes endpoints for health checks, metrics, application info, environment properties, and more.",
        },
        {
          question:
            "What is the use of the application.yml file in Spring Boot?",
          answer:
            "The application.yml file is used for configuring application settings and properties in a Spring Boot application. It uses YAML format, which is more human-readable and supports hierarchical data structures.",
        },
        {
          question:
            "What is the use of the @Configuration annotation in Spring Boot?",
          answer:
            "The @Configuration annotation is used to mark a class as a source of bean definitions for the Spring IoC container. It indicates that the class can be used to define beans and configure dependencies.",
        },
        {
          question:
            "What is the difference between @Component, @Service, @Repository, and @Controller in Spring Boot?",
          answer:
            "All four annotations are used to define Spring beans, but they have different roles: @Component is a generic stereotype for any Spring-managed component, @Service indicates a service layer component, @Repository indicates a data access component, and @Controller indicates a web controller.",
        },
        {
          question: "What is Spring Boot DevTools?",
          answer:
            "Spring Boot DevTools is a set of tools that enhance the development experience by providing features such as automatic restarts, live reload, and configurations for improved development workflow.",
        },
        {
          question: "How do you enable caching in Spring Boot?",
          answer:
            "You can enable caching in Spring Boot by adding the @EnableCaching annotation to your main application class and using cache-related annotations such as @Cacheable, @CachePut, and @CacheEvict on your methods.",
        },
        {
          question: "What is the use of the @Bean annotation in Spring Boot?",
          answer:
            "The @Bean annotation is used to define a Spring bean in a @Configuration class. It indicates that a method produces a bean to be managed by the Spring container.",
        },
      ],
    },
    {
      subject: "Network",
      questions: [
        {
          question: "What is HTTP?",
          answer:
            "HTTP (Hypertext Transfer Protocol) is the protocol used for transferring hypertext requests and information on the web. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands.",
        },
        {
          question: "What is HTTPS?",
          answer:
            "HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP. It uses TLS (Transport Layer Security) or SSL (Secure Sockets Layer) to encrypt the data transferred between the client and the server, ensuring privacy and data integrity.",
        },
        {
          question: "What is a DNS server?",
          answer:
            "A DNS (Domain Name System) server translates domain names (like www.example.com) into IP addresses (like 192.0.2.1) that computers use to identify each other on the network.",
        },
        {
          question: "What is an IP address?",
          answer:
            "An IP (Internet Protocol) address is a unique string of numbers separated by periods (IPv4) or colons (IPv6) that identifies each computer using the Internet Protocol to communicate over a network.",
        },
        {
          question: "What is the difference between IPv4 and IPv6?",
          answer:
            "IPv4 is the fourth version of the Internet Protocol, using 32-bit addresses, allowing for approximately 4.3 billion unique addresses. IPv6 is the sixth version, using 128-bit addresses, allowing for a vastly larger number of unique addresses.",
        },
        {
          question: "What is a web server?",
          answer:
            "A web server is a computer system that hosts websites and serves web pages to users over the internet or an intranet. It handles requests from clients, typically browsers, and delivers web content such as HTML pages, images, and scripts.",
        },
        {
          question: "What is a URL?",
          answer:
            "A URL (Uniform Resource Locator) is the address used to access resources on the web. It consists of the protocol (http/https), domain name (www.example.com), and optionally, the path to a specific page or resource (/path/to/resource).",
        },
        {
          question: "What is a web browser?",
          answer:
            "A web browser is a software application used to access and display web pages. It retrieves the content from web servers, interprets HTML, CSS, and JavaScript, and renders the pages for users to view and interact with.",
        },
        {
          question: "What is the difference between a GET and a POST request?",
          answer:
            "A GET request is used to retrieve data from a server, and the data is appended to the URL. A POST request is used to send data to a server to create or update a resource, and the data is included in the body of the request.",
        },
        {
          question: "What is a cookie?",
          answer:
            "A cookie is a small piece of data stored on the user's computer by the web browser while browsing a website. It is used to remember information about the user, such as login status, preferences, and tracking identifiers.",
        },
        {
          question: "What is a session?",
          answer:
            "A session is a way to store information (in variables) to be used across multiple pages in a web application. It is typically used to keep track of user interactions and maintain state between different requests from the same user.",
        },
        {
          question: "What is a CDN?",
          answer:
            "A CDN (Content Delivery Network) is a system of distributed servers that deliver web content and other media to users based on their geographic location. It improves website performance by reducing latency and load times.",
        },
        {
          question: "What is latency?",
          answer:
            "Latency is the time delay between a user's action and the response from the server. It is influenced by various factors, including the distance between the client and server, network congestion, and the speed of the server.",
        },
        {
          question: "What is bandwidth?",
          answer:
            "Bandwidth is the maximum rate of data transfer across a network or internet connection. It is typically measured in bits per second (bps) and determines how much data can be sent or received in a given amount of time.",
        },
        {
          question: "What is a firewall?",
          answer:
            "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks.",
        },
        {
          question: "What is SSL/TLS?",
          answer:
            "SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols designed to provide secure communication over a computer network. They encrypt data transmitted between clients and servers, ensuring privacy and data integrity.",
        },
        {
          question: "What is a VPN?",
          answer:
            "A VPN (Virtual Private Network) is a service that allows users to connect to the internet securely and privately by routing their traffic through a server and hiding their IP address. It encrypts the data, ensuring privacy and security.",
        },
        {
          question: "What is a proxy server?",
          answer:
            "A proxy server acts as an intermediary between a client and a server. It forwards client requests to the server and returns the server's response to the client. Proxies can be used for various purposes, such as improving performance, filtering content, and hiding the client's IP address.",
        },
        {
          question: "What is a load balancer?",
          answer:
            "A load balancer is a device or software that distributes network or application traffic across multiple servers. It ensures no single server becomes overwhelmed, improving overall performance and reliability.",
        },
        {
          question: "What is an API?",
          answer:
            "An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information.",
        },
        {
          question:
            "What is the difference between front-end and back-end development?",
          answer:
            "Front-end development involves creating the visual and interactive aspects of a website that users interact with. Back-end development involves building and maintaining the server-side logic, databases, and application programming interfaces (APIs) that power the front-end.",
        },
        {
          question: "What is a web application?",
          answer:
            "A web application is a software application that runs on a web server and is accessed through a web browser. It can be a simple static site or a complex interactive platform with dynamic content and user interactions.",
        },
        {
          question: "What is a PWA?",
          answer:
            "A PWA (Progressive Web Application) is a type of web application that uses modern web technologies to deliver a user experience similar to native mobile applications. PWAs are fast, reliable, and can work offline or with poor network conditions.",
        },
        {
          question: "What is the DOM?",
          answer:
            "The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a web page as a tree of objects, allowing programs and scripts to dynamically access and update the content, structure, and style of the document.",
        },
        {
          question: "What is AJAX?",
          answer:
            "AJAX (Asynchronous JavaScript and XML) is a technique for creating fast and dynamic web pages. It allows web applications to asynchronously send and receive data from a server without refreshing the entire page.",
        },
        {
          question: "What is the difference between TCP and UDP?",
          answer:
            "TCP (Transmission Control Protocol) is a connection-oriented protocol that ensures reliable data transmission. UDP (User Datagram Protocol) is a connectionless protocol that allows faster transmission but does not guarantee delivery, order, or error-checking.",
        },
        {
          question: "What is a subnet?",
          answer:
            "A subnet (subnetwork) is a logical subdivision of an IP network. Subnets are used to organize and manage IP addresses more efficiently and improve network performance and security by segmenting large networks into smaller, more manageable parts.",
        },
        {
          question: "What is a MAC address?",
          answer:
            "A MAC (Media Access Control) address is a unique identifier assigned to network interfaces for communications at the data link layer of a network. It is used to identify devices on a local network and is typically assigned by the manufacturer.",
        },
        {
          question: "What is a gateway?",
          answer:
            "A gateway is a network node that serves as an access point to another network. It allows data to flow between different networks and can perform various functions, such as protocol translation, data filtering, and traffic routing.",
        },
      ],
    },
    {
      subject: "JobInterviewQuestion",
      questions: [
        {
          question: "What is the difference between REST and SOAP?",
          answer:
            "REST (Representational State Transfer) is an architectural style that uses HTTP methods for communication and is stateless. SOAP (Simple Object Access Protocol) is a protocol that uses XML for messaging and can operate over multiple protocols like HTTP, SMTP, etc.",
        },
        {
          question: "What are microservices?",
          answer:
            "Microservices are an architectural style that structures an application as a collection of small, autonomous services modeled around a business domain. Each microservice is independent, deployable, and scalable.",
        },
        {
          question:
            "What is continuous integration and continuous deployment (CI/CD)?",
          answer:
            "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. The main concepts attributed to CI/CD are continuous integration, continuous deployment, and continuous delivery.",
        },
        {
          question: "Explain the concept of DevOps.",
          answer:
            "DevOps is a set of practices that combine software development (Dev) and IT operations (Ops) aimed at shortening the development lifecycle and providing continuous delivery with high software quality.",
        },
        {
          question: "What is the difference between SQL and NoSQL databases?",
          answer:
            "SQL databases are relational and use structured query language for defining and manipulating data. NoSQL databases are non-relational and are used for large sets of distributed data. They are schema-less and can handle unstructured data.",
        },
        {
          question: "What is the purpose of Docker?",
          answer:
            "Docker is a platform that uses OS-level virtualization to deliver software in packages called containers. Containers are isolated from each other and bundle their own application, tools, libraries, and configuration files.",
        },
        {
          question: "What is React?",
          answer:
            "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
        },
        {
          question: "What is the use of the useState hook in React?",
          answer:
            "The useState hook is a function that allows you to add React state to function components. It returns an array with two values: the current state and a function to update it.",
        },
        {
          question:
            "What is the difference between class-based and functional components in React?",
          answer:
            "Class-based components are ES6 classes that extend from React.Component and have a render method. Functional components are simple JavaScript functions that return JSX. Functional components can use hooks to manage state and side effects.",
        },
        {
          question: "What is Node.js?",
          answer:
            "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript to write server-side code and create scalable network applications.",
        },
        {
          question: "What is Express.js?",
          answer:
            "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is used to build single-page, multi-page, and hybrid web applications.",
        },
        {
          question: "What are Promises in JavaScript?",
          answer:
            "Promises are objects that represent the eventual completion or failure of an asynchronous operation. They provide a cleaner, more flexible way to handle asynchronous operations compared to traditional callback-based approaches.",
        },
        {
          question:
            "What is the difference between synchronous and asynchronous programming?",
          answer:
            "Synchronous programming executes tasks sequentially, blocking the main thread until each task completes. Asynchronous programming allows tasks to run concurrently, using callbacks, promises, or async/await to handle the results, without blocking the main thread.",
        },
        {
          question: "What is RESTful API?",
          answer:
            "A RESTful API is an application programming interface that follows the principles of REST. It uses HTTP requests to perform CRUD operations and is stateless, meaning each request from a client contains all the information needed to process the request.",
        },
        {
          question: "What is JWT (JSON Web Token)?",
          answer:
            "JWT is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and information exchange. A JWT is composed of three parts: header, payload, and signature.",
        },
        {
          question: "What is GraphQL?",
          answer:
            "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. It allows clients to request exactly the data they need, reducing over-fetching and under-fetching of data.",
        },
        {
          question: "What is the role of a full-stack developer?",
          answer:
            "A full-stack developer is proficient in both front-end and back-end development. They are capable of working on the complete stack of technology, including databases, servers, front-end development, and client-side development.",
        },
        {
          question: "What is Agile methodology?",
          answer:
            "Agile methodology is an iterative approach to software development that focuses on collaboration, customer feedback, and small, rapid releases. It emphasizes flexibility and adaptability throughout the development process.",
        },
        {
          question: "What is MVC architecture?",
          answer:
            "MVC (Model-View-Controller) is a software architectural pattern that separates an application into three main logical components: the model (data), the view (user interface), and the controller (business logic).",
        },
        {
          question: "What is Test-Driven Development (TDD)?",
          answer:
            "TDD is a software development approach where tests are written before writing the actual code. Developers write a test for a specific functionality, then write the code to pass the test, and finally refactor the code while keeping the tests green.",
        },
        {
          question: "What is the purpose of unit testing?",
          answer:
            "Unit testing involves testing individual units or components of a software application to ensure that each part functions correctly. It helps identify bugs early and improves code quality.",
        },
        {
          question: "What is the use of the fetch API in JavaScript?",
          answer:
            "The fetch API provides a way to make network requests similar to XMLHttpRequest (XHR). It is more powerful and flexible, returning promises and supporting modern JavaScript features like async/await.",
        },
        {
          question: "What is middleware in Express.js?",
          answer:
            "Middleware in Express.js is a function that executes during the request-response cycle. It can modify the request and response objects, end the request-response cycle, and call the next middleware function in the stack.",
        },
        {
          question:
            "What is the difference between GET and POST methods in HTTP?",
          answer:
            "GET requests data from a specified resource, and the data is appended to the URL. POST submits data to be processed to a specified resource, with the data included in the body of the request.",
        },
        {
          question:
            "What is the purpose of the package.json file in a Node.js project?",
          answer:
            "The package.json file is used to define the properties, dependencies, and scripts of a Node.js project. It includes metadata about the project and lists the packages that the project depends on.",
        },
        {
          question: "What is the Virtual DOM in React?",
          answer:
            "The Virtual DOM is a lightweight, in-memory representation of the actual DOM. React uses the Virtual DOM to optimize updates by computing the differences between the current and previous states and applying the minimal set of changes to the actual DOM.",
        },
        {
          question: "What are hooks in React?",
          answer:
            "Hooks are functions that let you use state and other React features in functional components. Examples include useState, useEffect, useContext, and useReducer.",
        },
        {
          question: "What is CORS and why is it important?",
          answer:
            "CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers to restrict how resources on a web page can be requested from another domain. It is important for preventing unauthorized access and ensuring secure interactions between different domains.",
        },
        {
          question: "What is a monolithic architecture?",
          answer:
            "A monolithic architecture is a traditional software model where all components and functionalities of an application are bundled together into a single unit. It contrasts with microservices architecture, where the application is broken down into smaller, independent services.",
        },
        {
          question: "What is responsive design?",
          answer:
            "Responsive design is an approach to web development that ensures web pages render well on a variety of devices and window sizes. It uses flexible layouts, images, and CSS media queries to adapt the content to different screen sizes.",
        },
      ],
    },
    {
      subject: "explainTheCode",
      questions: [
        {
          question: `const sum = (a, b) => a + b;\n\n// Explain this code`,
          answer:
            "This code defines an arrow function named 'sum' that takes two parameters 'a' and 'b' and returns their sum.",
        },
        {
          question: `let person = { name: 'John', age: 30 };\n\n// Explain this code`,
          answer:
            "This code creates an object 'person' with two properties: 'name' and 'age'.",
        },
        {
          question: `for (let i = 0; i < 5; i++) { console.log(i); }\n\n// Explain this code`,
          answer:
            "This code runs a loop from 0 to 4, logging each value of 'i' to the console.",
        },
        {
          question: `const numbers = [1, 2, 3].map(x => x * 2);\n\n// Explain this code`,
          answer:
            "This code creates an array of numbers, applies the 'map' method to multiply each element by 2, and returns a new array.",
        },
        {
          question: `function greet(name) { return 'Hello ' + name; }\n\n// Explain this code`,
          answer:
            "This code defines a function 'greet' that takes a parameter 'name' and returns a greeting string.",
        },
        {
          question: `const items = [1, 2, 3].reduce((acc, cur) => acc + cur, 0);\n\n// Explain this code`,
          answer:
            "This code uses the 'reduce' method to sum up all the elements in the 'items' array, starting with an initial value of 0.",
        },
        {
          question: `let x = 10;\nif (x > 5) { x = 20; }\n\n// Explain this code`,
          answer:
            "This code checks if 'x' is greater than 5, and if so, sets 'x' to 20.",
        },
        {
          question: `const isEven = num => num % 2 === 0;\n\n// Explain this code`,
          answer:
            "This code defines an arrow function 'isEven' that returns true if the given number 'num' is even.",
        },
        {
          question: `let arr = [1, 2, 3];\narr.push(4);\n\n// Explain this code`,
          answer:
            "This code creates an array 'arr' and then adds the number 4 to the end of the array using the 'push' method.",
        },
        {
          question: `const greet = () => 'Hello World';\n\n// Explain this code`,
          answer:
            "This code defines an arrow function 'greet' that returns the string 'Hello World'.",
        },
      ],
    },
    {
      subject: "explainJavaCode",
      questions: [
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    int sum = 5 + 3;\n    System.out.println(sum);\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code defines a class 'Main' with a 'main' method. The 'main' method calculates the sum of 5 and 3, then prints the result (8) to the console.",
        },
        {
          question: `public class Person {\n  String name;\n  int age;\n  public Person(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code defines a class 'Person' with two attributes: 'name' and 'age'. It includes a constructor that initializes these attributes.",
        },
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    for (int i = 0; i < 5; i++) {\n      System.out.println(i);\n    }\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code defines a 'main' method that uses a 'for' loop to print numbers from 0 to 4 to the console.",
        },
        {
          question: `public class ArrayExample {\n  public static void main(String[] args) {\n    int[] numbers = {1, 2, 3};\n    System.out.println(numbers[1]);\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code defines a class 'ArrayExample' with a 'main' method that initializes an array 'numbers' and prints the element at index 1 (which is 2).",
        },
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    String greeting = \"Hello, World!\";\n    System.out.println(greeting);\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code defines a 'main' method that initializes a string variable 'greeting' with \"Hello, World!\" and prints it to the console.",
        },
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    int result = multiply(4, 5);\n    System.out.println(result);\n  }\n\n  public static int multiply(int a, int b) {\n    return a * b;\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code defines a 'main' method that calls a static method 'multiply' with arguments 4 and 5, and prints the result (20). The 'multiply' method returns the product of the two numbers.",
        },
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    boolean isTrue = (5 > 3);\n    System.out.println(isTrue);\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code defines a 'main' method that initializes a boolean variable 'isTrue' with the result of the expression (5 > 3), which evaluates to true, and prints it.",
        },
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    int[] numbers = {1, 2, 3};\n    for (int number : numbers) {\n      System.out.println(number);\n    }\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code uses an enhanced 'for' loop to iterate through an array 'numbers' and print each element.",
        },
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    String[] names = {\"Alice\", \"Bob\", \"Charlie\"};\n    System.out.println(names.length);\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code initializes an array 'names' with three elements and prints the length of the array (which is 3).",
        },
        {
          question: `public class Main {\n  public static void main(String[] args) {\n    try {\n      int result = 10 / 0;\n    } catch (ArithmeticException e) {\n      System.out.println(\"Cannot divide by zero\");\n    }\n  }\n}\n\n// Explain this code`,
          answer:
            "This Java code includes a 'try-catch' block to handle an 'ArithmeticException' that occurs when dividing by zero. It catches the exception and prints an error message.",
        },
      ],
    },
    {
      subject: "cmdCommands",
      questions: [
        {
          question: "ipconfig",
          answer: `Displays IP configuration information.\n\nExample:\nipconfig`,
        },
        {
          question: "ping",
          answer: `Sends network packets to a specified IP address to test connectivity.\n\nExample:\nping www.google.com`,
        },
        {
          question: "dir",
          answer: `Displays a list of files and directories in the current directory.\n\nExample:\ndir`,
        },
        {
          question: "cd",
          answer: `Changes the current directory.\n\nExample:\ncd C:\\Windows`,
        },
        {
          question: "mkdir",
          answer: `Creates a new directory.\n\nExample:\nmkdir newfolder`,
        },
        {
          question: "rmdir",
          answer: `Removes a directory.\n\nExample:\nrmdir oldfolder`,
        },
        {
          question: "del",
          answer: `Deletes one or more files.\n\nExample:\ndel file.txt`,
        },
        {
          question: "copy",
          answer: `Copies files from one location to another.\n\nExample:\ncopy file.txt D:\\destination`,
        },
        {
          question: "move",
          answer: `Moves files from one location to another.\n\nExample:\nmove file.txt D:\\destination`,
        },
        {
          question: "rename",
          answer: `Renames a file or directory.\n\nExample:\nrename oldname.txt newname.txt`,
        },
        {
          question: "tasklist",
          answer: `Displays a list of currently running processes.\n\nExample:\ntasklist`,
        },
        {
          question: "taskkill",
          answer: `Terminates a process by its process ID.\n\nExample:\ntaskkill /PID 1234`,
        },
        {
          question: "systeminfo",
          answer: `Displays detailed configuration information about the computer and operating system.\n\nExample:\nsysteminfo`,
        },
        {
          question: "chkdsk",
          answer: `Checks the disk for errors and repairs them.\n\nExample:\nchkdsk C:`,
        },
        {
          question: "sfc /scannow",
          answer: `Scans the system files for integrity violations and repairs them.\n\nExample:\nsfc /scannow`,
        },
        {
          question: "netstat",
          answer: `Displays network connections, routing tables, and network interface statistics.\n\nExample:\nnetstat`,
        },
        {
          question: "tracert",
          answer: `Traces the route taken by packets to a destination.\n\nExample:\ntracert www.google.com`,
        },
        {
          question: "shutdown",
          answer: `Shuts down or restarts the computer.\n\nExample:\nshutdown /s /t 0`,
        },
        {
          question: "cls",
          answer: `Clears the command prompt screen.\n\nExample:\ncls`,
        },
        {
          question: "echo",
          answer: `Displays a message or turns command echoing on or off.\n\nExample:\necho Hello World`,
        },
        {
          question: "set",
          answer: `Displays, sets, or removes environment variables.\n\nExample:\nset PATH=C:\\Windows`,
        },
        {
          question: "assoc",
          answer: `Displays or modifies file extension associations.\n\nExample:\nassoc .txt`,
        },
        {
          question: "cipher",
          answer: `Manages encryption of files and directories.\n\nExample:\ncipher /e file.txt`,
        },
        {
          question: "comp",
          answer: `Compares the contents of two files or sets of files.\n\nExample:\ncomp file1.txt file2.txt`,
        },
        {
          question: "fc",
          answer: `Compares two files or sets of files and displays the differences.\n\nExample:\nfc file1.txt file2.txt`,
        },
        {
          question: "find",
          answer: `Searches for a text string in a file or files.\n\nExample:\nfind "example" file.txt`,
        },
        {
          question: "findstr",
          answer: `Searches for strings in files.\n\nExample:\nfindstr "example" file.txt`,
        },
        {
          question: "for",
          answer: `Runs a specified command for each file in a set of files.\n\nExample:\nfor %i in (*.txt) do echo %i`,
        },
        {
          question: "type",
          answer: `Displays the contents of a text file.\n\nExample:\ntype file.txt`,
        },
        {
          question: "path",
          answer: `Displays or sets a search path for executable files.\n\nExample:\npath C:\\Windows`,
        },
        {
          question: "pause",
          answer: `Pauses the processing of a batch file and prompts the user to press any key.\n\nExample:\npause`,
        },
        {
          question: "shutdown",
          answer: `Shuts down or restarts the computer.\n\nExample:\nshutdown /r /t 0`,
        },
      ],
    },
  ];

  const subjects = [
    "HTML",
    "CSS",
    "JAVA-SCRIPT",
    "SQL",
    "JAVA",
    "Spring Boot",
    "Network",
    "Job-Interview-Question",
    "explainTheCode",
    "explainJavaCode",
    "Cmd",
  ];

  const ButtonController = {
    enablePreqAndStartOverButtons() {
      document.getElementById("prevQuestionButton").disabled = false;
      document
        .getElementById("prevQuestionButton")
        .classList.remove("disabled-button");
      document.getElementById("startOverButton").disabled = false;
      document
        .getElementById("startOverButton")
        .classList.remove("disabled-button");
    },
    disablePreqAndStartOverButtons() {
      document.getElementById("prevQuestionButton").disabled = true;
      document
        .getElementById("prevQuestionButton")
        .classList.add("disabled-button");
      document.getElementById("startOverButton").disabled = true;
      document
        .getElementById("startOverButton")
        .classList.add("disabled-button");
    },
    disablePrevQuestionButton() {
      document.getElementById("prevQuestionButton").disabled = true;
      document
        .getElementById("prevQuestionButton")
        .classList.add("disabled-button");
    },
    enableNextQuestionButton() {
      document.getElementById("nextQuestionButton").disabled = false;
      document
        .getElementById("nextQuestionButton")
        .classList.remove("disabled-button");
    },
    disableNextQuestionButton() {
      document.getElementById("nextQuestionButton").disabled = true;
      document
        .getElementById("nextQuestionButton")
        .classList.add("disabled-button");
    },
    enableStartOverButton() {
      document.getElementById("startOverButton").disabled = false;
      document
        .getElementById("startOverButton")
        .classList.remove("disabled-button");
    },
    disableStartOverButton() {
      document.getElementById("startOverButton").disabled = true;
      document
        .getElementById("startOverButton")
        .classList.add("disabled-button");
    },
    enableNextSubjectButton() {
      document.getElementById("nextSubjectButton").disabled = false;
      document
        .getElementById("nextSubjectButton")
        .classList.remove("disabled-button");
    },
    disableNextSubjectButton() {
      document.getElementById("nextSubjectButton").disabled = true;
      document
        .getElementById("nextSubjectButton")
        .classList.add("disabled-button");
    },
  };

  const FastCodeLearningCompiler = {
    questionIndex: 0,
    currentSubjectIndex: 0,
    currentSubject: subjects[0],
    currentQuestion: allData[0].questions[0].question,
    currentAnswerToQuestion: allData[0].questions[0].answer,
    isLastQuestion: false,
    isRandom: false,
    isAnswerDisplayed: false,
    randomQuestions: [], // Array to keep track of questions already displayed in random mode

    updateProgressBar() {
      const totalQuestions = allData[this.currentSubjectIndex].questions.length;
      const progressBar = document.getElementById("progressBar");

      let percentage = (this.questionIndex / (totalQuestions - 1)) * 100;
      percentage = Math.max(0, Math.min(percentage, 100));

      progressBar.value = percentage;
      this.isLastQuestion = this.questionIndex === totalQuestions - 1;
      updateQuestionCounter();
    },

    displayQuestion() {
      const textarea = document.getElementById("message");
      textarea.value = this.currentQuestion;
      updateQuestionCounter();
    },

    updateCurrentQuestion() {
      this.currentQuestion =
        allData[this.currentSubjectIndex].questions[
          this.questionIndex
        ].question;
      this.currentAnswerToQuestion =
        allData[this.currentSubjectIndex].questions[this.questionIndex].answer;
    },

    updateNextQuestion() {
      const totalQuestions = allData[this.currentSubjectIndex].questions.length;

      if (this.questionIndex < totalQuestions - 1) {
        this.questionIndex++;
        this.updateCurrentQuestion();
        this.displayQuestion();
        ButtonController.enablePreqAndStartOverButtons();
        this.updateProgressBar();

        if (this.isLastQuestion) {
          ButtonController.disableNextQuestionButton();
        }
      }
    },

    updatePreviousQuestion() {
      if (this.questionIndex > 0) {
        this.questionIndex--;
        this.updateCurrentQuestion();
        this.displayQuestion();
        ButtonController.enableNextQuestionButton();
        this.updateProgressBar();

        if (this.questionIndex === 0) {
          ButtonController.disablePrevQuestionButton();
          ButtonController.disableStartOverButton();
        }
      }
    },

    restartQuestions() {
      this.questionIndex = 0;
      this.updateCurrentQuestion();
      this.displayQuestion();
      this.updateProgressBar();
      ButtonController.disablePrevQuestionButton();
      ButtonController.enableNextQuestionButton();
      ButtonController.disableStartOverButton();
      this.isAnswerDisplayed = false;
      this.isRandom = false;
      this.randomQuestions = []; // Reset randomQuestions array
    },

    switchToNextSubject() {
      if (this.currentSubjectIndex < allData.length - 1) {
        this.currentSubjectIndex++;
        this.questionIndex = 0;
        this.currentSubject = subjects[this.currentSubjectIndex];
        this.updateCurrentQuestion();
        this.displayQuestion();
        this.updateProgressBar();

        ButtonController.enableNextSubjectButton();
        ButtonController.enableNextQuestionButton();
        ButtonController.disablePreqAndStartOverButtons();
        if (this.currentSubjectIndex === allData.length - 1) {
          ButtonController.disableNextSubjectButton();
        }
        updateSubjectTitle();
      }
    },

    random() {
      const questions = allData[this.currentSubjectIndex].questions;
      if (this.randomQuestions.length === questions.length) {
        alert("All questions have been displayed.");
        ButtonController.disableNextQuestionButton();
        return;
      }

      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * questions.length);
      } while (this.randomQuestions.includes(randomIndex));

      this.questionIndex = randomIndex;
      this.updateCurrentQuestion();
      this.displayQuestion();
      this.isAnswerDisplayed = false;
      document.getElementById("showAnswerButton").textContent = "show answer";
      this.randomQuestions.push(randomIndex);
      this.updateProgressBar();
    },
  };

  const navbar = document.querySelector(".navbar");
  const subjectButtons = document.querySelectorAll(".subject-button");
  const textarea = document.getElementById("message");
  const questionCounter = document.getElementById("questionCounter");

  function updateQuestionCounter() {
    const totalQuestions =
      allData[FastCodeLearningCompiler.currentSubjectIndex].questions.length;
    questionCounter.textContent = `Question ${
      FastCodeLearningCompiler.questionIndex + 1
    } of ${totalQuestions}`;
  }

  function updateSubjectTitle() {
    currentSubject.textContent = FastCodeLearningCompiler.currentSubject;
  }

  updateSubjectTitle();

  textarea.value = FastCodeLearningCompiler.currentQuestion;

  document
    .getElementById("startOverButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      FastCodeLearningCompiler.restartQuestions();
      const submitButton = document.getElementById("showAnswerButton");
      submitButton.textContent = "show answer";
    });

  document
    .getElementById("showAnswerButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const submitButton = document.getElementById("showAnswerButton");
      if (!FastCodeLearningCompiler.isAnswerDisplayed) {
        textarea.value +=
          "\n\n" + FastCodeLearningCompiler.currentAnswerToQuestion;
        FastCodeLearningCompiler.isAnswerDisplayed = true;
        submitButton.textContent = "hide answer";
      } else {
        textarea.value = FastCodeLearningCompiler.currentQuestion;
        FastCodeLearningCompiler.isAnswerDisplayed = false;
        submitButton.textContent = "show answer";
      }
    });

  document
    .getElementById("nextQuestionButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      if (!FastCodeLearningCompiler.isLastQuestion) {
        if (FastCodeLearningCompiler.isRandom) {
          FastCodeLearningCompiler.random();
        } else {
          FastCodeLearningCompiler.updateNextQuestion();
          FastCodeLearningCompiler.isAnswerDisplayed = false;
          document.getElementById("showAnswerButton").textContent =
            "show answer";
        }
      }
    });

  document
    .getElementById("prevQuestionButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      FastCodeLearningCompiler.updatePreviousQuestion();
      document.getElementById("showAnswerButton").textContent = "show answer";
    });

  document
    .getElementById("nextSubjectButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      FastCodeLearningCompiler.switchToNextSubject();
      FastCodeLearningCompiler.isAnswerDisplayed = false;
      document.getElementById("showAnswerButton").textContent = "show answer";
    });

  document.getElementById("random").addEventListener("click", function () {
    FastCodeLearningCompiler.isRandom = true;
    FastCodeLearningCompiler.random();
  });

  document.getElementById("byOrder").addEventListener("click", function () {
    FastCodeLearningCompiler.isRandom = false;
    FastCodeLearningCompiler.restartQuestions();
    document.getElementById("showAnswerButton").textContent = "show answer";
  });

  // Initial call to set the question counter
  updateQuestionCounter();

  // Function to update button states
  function updateButtonStates() {
    const nextSubjectButton = document.getElementById("nextSubjectButton");
    const startOverButton = document.getElementById("startOverButton");

    // Check if the current question is the last in the subject
    if (FastCodeLearningCompiler.isLastQuestion) {
      nextSubjectButton.disabled = true;
    } else {
      nextSubjectButton.disabled = false;
    }

    // Check if the current question is the first in the subject
    if (FastCodeLearningCompiler.questionIndex === 0) {
      startOverButton.disabled = true;
    } else {
      startOverButton.disabled = false;
    }
  }

  // Function to reset and disable the progress bar
  function resetAndDisableProgressBar() {
    const progressBar = document.getElementById("progressBar");
    progressBar.value = 0; // Reset the progress bar value to zero
    progressBar.disabled = true; // Disable the progress bar
  }

  // Function to enable the progress bar
  function enableProgressBar() {
    const progressBar = document.getElementById("progressBar");
    progressBar.disabled = false; // Enable the progress bar
  }

  subjectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const subjectIndex = parseInt(button.dataset.subjectIndex, 10);
      const subjectName = button.dataset.subjectName;
      handleSubjectButtonClick(button, subjectIndex, subjectName);
    });
  });
  function handleSubjectButtonClick(button, subjectIndex, subjectName) {
    console.log(
      "Handling button click:",
      button,
      "Subject Index:",
      subjectIndex,
      "Subject Name:",
      subjectName
    );

    // Check if the subjectIndex is valid
    if (
      subjectIndex < 0 ||
      subjectIndex >= FastCodeLearningCompiler.allData.length
    ) {
      console.error("Invalid subjectIndex:", subjectIndex);
      return;
    }

    const subjectData = FastCodeLearningCompiler.allData[subjectIndex];

    // Check if subjectData and questions exist
    if (!subjectData || !Array.isArray(subjectData.questions)) {
      console.error(
        "Subject data or questions array is not defined:",
        subjectData
      );
      return;
    }

    // Remove any existing dropdown content
    const existingDropdownContent = document.querySelector(".dropdown-content");
    if (existingDropdownContent) {
      existingDropdownContent.remove();
      console.log("Removed existing dropdown content.");
    }

    // Create new dropdown content
    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");
    console.log("Created new dropdown content.");

    // Populate dropdown content with questions
    subjectData.questions.forEach((question, i) => {
      const questionButton = document.createElement("button");
      questionButton.textContent = question.question;
      questionButton.classList.add("nav-button", "new-button");
      questionButton.addEventListener("click", function () {
        console.log("Question button clicked:", question.question);
        document.getElementById("message").value = question.question;
        FastCodeLearningCompiler.currentSubject = subjectName;
        FastCodeLearningCompiler.updateCurrentQuestion();
        FastCodeLearningCompiler.questionIndex = i;
        document.getElementById("progressBar").value =
          (i / (subjectData.questions.length - 1)) * 100;
        FastCodeLearningCompiler.isAnswerDisplayed = false;
        const submitButton = document.getElementById("showAnswerButton");
        submitButton.textContent = "Show answer";
        updateButtonStates(); // Update button states after question is selected
      });
      dropdownContent.appendChild(questionButton);
    });

    // Style the dropdown content
    dropdownContent.style.position = "absolute"; // Ensure it's positioned correctly
    dropdownContent.style.top = button.offsetTop + button.offsetHeight + "px"; // Position below the button
    dropdownContent.style.left = button.offsetLeft + "px"; // Align with the button
    dropdownContent.style.overflowY = "auto";
    dropdownContent.style.maxHeight = "400px";
    dropdownContent.style.scrollbarWidth = "thin";
    dropdownContent.style.scrollbarColor =
      "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.05)";
    dropdownContent.style.display = "flex";
    dropdownContent.style.flexDirection = "column";
    dropdownContent.style.alignItems = "center";
    dropdownContent.style.backgroundColor = "#fff"; // Add background color to make it visible
    dropdownContent.style.border = "1px solid #ccc"; // Add border for better visibility

    // Append the dropdown content to the navbar
    document.querySelector(".navbar").appendChild(dropdownContent);
    console.log("Appended dropdown content to navbar.");
  }
});

/*
  // Add event listener to "Random" radio button
  document.getElementById("random").addEventListener("click", function () {
    if (this.checked) {
      // Disable the "Previous Question" and "Start Over" buttons and also click the random again button
      disabelPreqAndStartOverButtons();
      const byOrderCheckbox = document.getElementById("byOrder");
      let byOrderSelected = byOrderCheckbox.checked;
      if (!byOrderSelected) {
        // Disable the progress bar
        resetAndDisableProgressBar();
      } else {
        enableProgressBar();
        return;
      }
      isAnswerDisplayed = false;
      const submitButton = document.getElementById("showAnswerButton");
      submitButton.textContent = "show answer";
      document.getElementById("random").disabled = true;
      indexQuestion = 0;
      isByOrder = false;
      displayRandomQuestion();
    }
  });

  // Add event listener to "By Order" radio button
  document.getElementById("byOrder").addEventListener("click", function () {
    if (this.checked) {
      // Enable the "Previous Question" and "Start Over" buttons
      enablePreqAndStartOverButtons();

      document.getElementById("random").disabled = false;
      isAnswerDisplayed = false;
      const submitButton = document.getElementById("showAnswerButton");
      submitButton.textContent = "show answer";

      // Set default current subject
      currentSubject = "html";

      // Function that updates the display of the current subject
      updateCurrentSubject();

      // HTML

      // CSS

      // Function to display HTML question in textarea
      isByOrder = true;
      textarea.value = questionsArray[0];
    }
  });

  // Function to display a random question
  function displayRandomQuestion() {
    // Check if all questions have been displayed
    if (displayQuestionAndAnswer.length === questionsArray.length) {
      alert("All questions have been displayed.");
      // Disable the next question button and change its style
      let nextQ = document.getElementById("nextQuestionButton");
      nextQ.disabled = true;
      nextQ.classList.add("disabled-button");
      // Define a variable to keep track of the questions that have already been displayed
      displayedQuestions = [];
      return;
    }

    // Generate a random index to select a question from the array
    var randomIndex = Math.floor(Math.random() * questionsArray.length);

    // Check if the selected question has already been displayed
    if (displayedQuestions.includes(questionsArray[randomIndex])) {
      // If the question has already been displayed, recursively call the function again
      displayRandomQuestion();
      return;
    }

    // Get the random question
    var randomQuestion = questionsArray[randomIndex];

    // Get the corresponding answer
    var answer = questionsAndAnswers[randomQuestion];

    // Display the random question in the textarea
    document.getElementById("message").value = randomQuestion;

    // Display the answer also when the show answer is clicked
    document
      .getElementById("showAnswerButton")
      .addEventListener("click", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        const submitButton = document.getElementById("showAnswerButton");
        if (currentSubject === "html" && isByOrder === false) {
          if (!isAnswerDisplayed) {
            textarea.value = randomQuestion + "\n\n" + answer;
            isAnswerDisplayed = true;
            submitButton.textContent = "hide answer";
          } else {
            alert("hide answer");
            textarea.value = randomQuestion;
            isAnswerDisplayed = false;
            submitButton.textContent = "show answer";
          }
        }
        indexQuestion = 0;
        // Add the question to the displayedQuestions array
        displayedQuestions.push(randomQuestion);
        return;
      });
  }
});
/*
  Function to display a random question
  function displayRandomQuestion() {
      // Check if all questions have been displayed
      if (displayedQuestions.length === questionsArray.length) {
        alert("All questions have been displayed.");
        // disabeling the next qestion and oslo changing its style
        let nextQ = document.getElementById("nextQuestionButton");
        nextQ.disabled = true;
        nextQ.classList.add("disabled-button");
        // Define a variable to keep track of the questions that have already been displayed
        displayedQuestions = [];
      return;
      }       
    
    // Generate a random index to select a question from the array
    var randomIndex = Math.floor(Math.random() * questionsArray.length);

    // Check if the selected question has already been displayed
    if (displayedQuestions.includes(questionsArray[randomIndex])) {
      // If the question has already been displayed, recursively call the function again
      displayRandomQuestion();
      return;
    }

    // Get the random question
    var randomQuestion = questionsArray[randomIndex];

    // Get the corresponding answer
    var answer = questionsAndAnswers[randomQuestion];

    // Display the random question in the textarea
    document.getElementById("message").value = randomQuestion;

    // Display the answer olso when the show answer is clicked  document
    document
      .getElementById("showAnswerButton")
      .addEventListener("click", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        const submitButton = document.getElementById("showAnswerButton");
        if (currentSubject == "html" && isByOrder == false) {
          if (!isAnswerDisplayed) {
            textarea.value = randomQuestion + "\n\n" + answer;
            isAnswerDisplayed = true;
            submitButton.textContent = "hide answer";
          } else {
            alert("hide answer");
            textarea.value = randomQuestion;
            isAnswerDisplayed = false;
            submitButton.textContent = "show answer";
          }        
      };
    indexQuestion = 0;
    // Add the question to the displayedQuestions array
    displayedQuestions.push(randomQuestion);
    return;   
    }};
   */
