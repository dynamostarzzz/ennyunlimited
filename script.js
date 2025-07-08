const lessons = [
    {
        topic: "CHAPTER 1: FUNDAMENTALS OF JAVASCRIPT; VARIABLES ('let', 'const', 'var')",
        content: `
                   <p>
            Variables are used to store data in JavaScript. You can declare them using <strong>'let'</strong>, <strong>'const'</strong>, or the older <strong>'var'</strong>.
          </p>
          <p>
            - <strong>'let'</strong> allows you to declare variables that can be reassigned later.<br>
            Example:<br>
            <code>let age = 25;<br>age = 26;</code>
          </p>
          <p>
            - <strong>'const'</strong> is used for variables that should not change after being assigned.<br>
            Example:<br>
            <code>const name = "Tammy";<br>name = "John"; // ❌ This will cause an error</code>
          </p>
          <p>
            - <strong>'var'</strong> is the old way to declare variables. It's function-scoped and behaves differently in some cases, although it allows reassignment.<br>
            Example:<br>
            <code>var color = "blue";<br>color = "orange"; // ✅ allowed</code>
          </p>
        `,
        highlight: `<h4>Key Differences</h4>
          <ul>
            <li><code>let</code> is block-scoped and allows reassignment.</li>
            <li><code>const</code> is also block-scoped but does not allow reassignment.</li>
            <li><code>var</code> is function-scoped and should generally be avoided.</li>
          </ul>
          <h4>Tips</h4>
          <ul>
            <li>Use <code>let</code> for variables that may change.</li>
            <li>Use <code>const</code> by default unless you need to reassign.</li>
          </ul>`
    },
    {
        topic: "DATA TYPES",
        content: `
                     <p>JavaScript has different data types, grouped into two main categories: <strong>primitive</strong> and <strong>reference</strong> types.</p>
          <p><strong>Primitive Data Types:</strong></p>
          <ul>
            <li><code>String</code> – e.g. <code>"Hello"</code></li>
            <li><code>Number</code> – e.g. <code>42</code>, <code>3.14</code></li>
            <li><code>Boolean</code> – <code>true</code> or <code>false</code></li>
            <li><code>null</code> – intentional absence of value</li>
            <li><code>undefined</code> – variable declared but not assigned</li>
            <li><code>Symbol</code> – unique and immutable (advanced)</li>
          </ul>
          <p><strong>Reference Data Types:</strong></p>
          <ul>
            <li><code>Object</code> – key-value pairs: <code>{ name: "Tammy", age: 21 }</code></li>
            <li><code>Array</code> – ordered list: <code>[1, 2, 3]</code></li>
            <li><code>Function</code> – reusable block: <code>function greet() { alert("Hi"); }</code></li>
          </ul>
          <p>Use the <code>typeof</code> operator to check a value's data type:</p>
          <pre><code>
typeof "Hello"; // "string"
typeof 42;      // "number"
typeof true;    // "boolean"
          </code></pre>
                `,

        highlight: `<h4>Key Points</h4>
<ul>
  <li>JavaScript data types are divided into <strong>primitive</strong> and <strong>reference</strong> types.</li>
  <li>Primitives include <code>String</code>, <code>Number</code>, <code>Boolean</code>, <code>null</code>, <code>undefined</code>, and <code>Symbol</code>.</li>
  <li>Reference types include <code>Object</code>, <code>Array</code>, and <code>Function</code>.</li>
  <li>Use the <code>typeof</code> operator to identify most data types.</li>
</ul>
<h4>Tips</h4>
<ul>
  <li>Remember that arrays and functions are technically objects in JavaScript.</li>
  <li><code>null</code> returns <code>"object"</code> with <code>typeof</code> (a known JavaScript quirk).</li>
  <li>Primitives are compared by value, while reference types are compared by reference.</li>
</ul>
`
    },
    {
        topic: "OPERATORS",
        content: `
                        <p>Operators in JavaScript are symbols used to perform operations on values and variables.</p>
            <p><strong>1. Arithmetic Operators:</strong></p>
            <pre><code>
    +   Addition          → 5 + 3 // 8
    -   Subtraction       → 5 - 3 // 2
    *   Multiplication    → 5 * 3 // 15
    /   Division          → 6 / 2 // 3
    %   Modulus           → 5 % 2 // 1
    **  Exponentiation    → 2 ** 3 // 8
            </code></pre>
            <p><strong>2. Assignment Operators:</strong></p>
            <pre><code>
    =     Assign          → let x = 5;
    +=    Add & assign    → x += 2;
    -=    Subtract        → x -= 1;
    *=    Multiply        → x *= 3;
    /=    Divide          → x /= 2;
            </code></pre>
            <p><strong>3. Comparison Operators:</strong></p>
            <pre><code>
    ==   Equal (loose)      → 5 == "5" // true
    ===  Equal (strict)     → 5 === "5" // false
    !=   Not equal (loose)  → 5 != "5" // false
    !==  Not equal (strict) → 5 !== "5" // true
    >    Greater than       → 6 > 3 // true
    <    Less than          → 2 < 5 // true
    >=   Greater or equal   → 5 >= 5 // true
    <=   Less or equal      → 4 <= 3 // false
            </code></pre>
            <p><strong>4. Logical Operators:</strong></p>
            <pre><code>
    &&  AND   → true && false // false
    ||  OR    → true || false // true
    !   NOT   → !true         // false
            </code></pre>
            <p><strong>5. Ternary Operator:</strong></p>
            <pre><code>
    condition ? valueIfTrue : valueIfFalse

    let age = 18;
    let result = age >= 18 ? "Adult" : "Minor";
            </code></pre>
                    `,
        highlight: `<h4>Key Points</h4>
<ul>
  <li>Operators perform actions on values or variables.</li>
  <li>Arithmetic operators handle math: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>**</code>.</li>
  <li>Assignment operators combine updating and assigning: <code>=</code>, <code>+=</code>, <code>-=</code>, etc.</li>
  <li>Comparison operators compare values: <code>==</code>, <code>===</code>, <code>!=</code>, <code>!==</code>, <code>&gt;</code>, <code>&lt;</code>, etc.</li>
  <li>Logical operators handle conditions: <code>&&</code>, <code>||</code>, <code>!</code>.</li>
  <li>The ternary operator provides a concise inline decision.</li>
</ul>
<h4>Tips</h4>
<ul>
  <li>Use <code>===</code> and <code>!==</code> to avoid unexpected type coercion.</li>
  <li>Break complex conditions into smaller parts for clarity.</li>
  <li>Remember that the ternary operator is just a shorthand for <code>if...else</code>.</li>
</ul>
`
    },
    {
        topic: "CONTROL FLOW (if, else, else if, switch)",
        content: `
                        <p>Control flow allows you to make decisions in code.</p>
            <p><strong>1. if / else if / else:</strong></p>
            <pre><code>
    let score = 85;

    if (score >= 90) {
    console.log("Excellent");
    } else if (score >= 70) {
    console.log("Good");
    } else {
    console.log("Try again");
    }
            </code></pre>
            <p><strong>2. switch:</strong></p>
            <pre><code>
    let day = "Monday";

    switch(day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Just another day");
    }
            </code></pre>
            <p><strong>Truthy and Falsy Values:</strong></p>
            <ul>
                <li><strong>Falsy:</strong> <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>, <code>false</code></li>
                <li><strong>Truthy:</strong> Anything else</li>
            </ul>
            `,
        highlight: `<h4>Key Points</h4>
<ul>
  <li>Control flow structures let your code make decisions.</li>
  <li><code>if / else if / else</code> handle branching logic based on conditions.</li>
  <li><code>switch</code> is useful for checking a variable against multiple exact matches.</li>
  <li>JavaScript treats some values as <strong>falsy</strong> (e.g. <code>0</code>, <code>""</code>, <code>null</code>) and others as <strong>truthy</strong> (everything else).</li>
</ul>
<h4>Tips</h4>
<ul>
  <li>Always use <code>break</code> in <code>switch</code> statements to prevent fall-through.</li>
  <li>Group related conditions clearly to improve readability.</li>
  <li>Be aware of truthy and falsy rules to avoid logical bugs.</li>
</ul>
`
    },
    {
        topic: "LOOPS (for, while, do...while)",
        content: `
          <p>Loops allow repetition of code blocks.</p>
          <p><strong>1. for loop:</strong></p>
          <pre><code>
for (let i = 0; i < 5; i++) {
  console.log(i);
}
          </code></pre>
          <p><strong>2. while loop:</strong></p>
          <pre><code>
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
          </code></pre>
          <p><strong>3. do...while loop:</strong></p>
          <pre><code>
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
          </code></pre>
          <p><strong>4. break and continue:</strong></p>
          <ul>
            <li><code>break</code>: exits the loop completely</li>
            <li><code>continue</code>: skips the current iteration</li>
          </ul>
          <pre><code>
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
          </code></pre>
                `,
        highlight: `<h4>Quick Tips</h4>
          <ul>
            <li>Use <code>for</code> when iterations are known.</li>
            <li>Use <code>while</code> for open-ended conditions.</li>
            <li>Don't forget to increment your loop variable.</li>
            <li>Avoid infinite loops — double check your conditions!</li>
          </ul>`
    },
    {
        topic: "CHAPTER 2: FUNCTIONS, ARRAYS & OBJECTS; FUNCTIONS (Declaration, Expression, Arrow)",
        content: `
             <p>Functions are reusable blocks of code that perform a task when called. There are three main ways to define functions in JavaScript:
            </p>

    <h4>1. Function Declaration</h4>
    <pre><code>
function greet() {
  console.log("Hello!");
}
greet(); // "Hello!"
    </code></pre>

    <h4>2. Function Expression</h4>
    <pre><code>
const greet = function() {
  console.log("Hi there!");
};
greet(); // "Hi there!"
    </code></pre>

    <h4>3. Arrow Function</h4>
    <pre><code>
const greet = () => {
  console.log("Hey!");
};
greet(); // "Hey!"
    </code></pre><p>Gold has been valued by civilizations for thousands of years due to its beauty, rarity, and resistance to corrosion.</p>
                    <p>The chemical symbol for gold is <strong>Au</strong>, derived from the Latin word "aurum" meaning "shining dawn."</p>
                    <p>Gold is an excellent conductor of electricity and is used in electronics, jewelry, and as a store of value in economics.</p>
                `,
        highlight: ` <h4>Quick Tips</h4>
    <ul>
      <li><code>function</code> declarations are hoisted (they can be called before they appear).</li>
      <li>Function expressions and arrow functions are not hoisted.</li>
      <li>Arrow functions do not have their own <code>this</code> context — avoid using them as object methods.</li>
    </ul>`
    },
    {
        topic: "ARRAYS AND METHODS (pop, push, map, filter)",
        content: `<p>Arrays are used to store multiple values in a single variable. They are ordered and can hold any type of data.</p>

  <pre><code>
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
    </code></pre>

  <h4>Common Methods:</h4>

  <p><strong>1. push()</strong> – Adds an item to the end of the array</p>
  <pre><code>
fruits.push("orange"); 
console.log(fruits); // ["apple", "banana", "cherry", "orange"]
    </code></pre>

  <p><strong>2. pop()</strong> – Removes the last item from the array</p>
  <pre><code>
fruits.pop(); 
console.log(fruits); // ["apple", "banana", "cherry"]
    </code></pre>

  <p><strong>3. map()</strong> – Creates a new array by transforming each item</p>
  <pre><code>
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
    </code></pre>

  <p><strong>4. filter()</strong> – Creates a new array with items that pass a condition</p>
  <pre><code>
const scores = [85, 60, 90, 40];
const passed = scores.filter(score => score >= 70);
console.log(passed); // [85, 90]
    </code></pre>`,
        highlight: `<h4>Quick Tips</h4>
    <ul>
      <li>Use <code>push()</code> and <code>pop()</code> to change array size.</li>
      <li><code>map()</code> and <code>filter()</code> do not modify the original array — they return a new one.</li>
      <li>You can chain methods: <code>array.map(...).filter(...)</code></li>
    </ul>`
    },
    {
        topic: "OBJECTS & OBJECT METHODS",
        content: `<p>Objects allow you to store data using key-value pairs. They are great for representing structured information.</p>

          <pre><code>
const person = {
  name: "Tammy",
  age: 21,
  isStudent: true
};
console.log(person.name); // "Tammy"
          </code></pre>

          <h4>Modifying Properties:</h4>
          <pre><code>
person.age = 22;
person["isStudent"] = false;
          </code></pre>

          <h4>Object Methods:</h4>
          <pre><code>
const user = {
  name: "Charles",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
user.greet(); // "Hello, Charles"
          </code></pre>

          <h4>Avoid Arrow Functions as Methods:</h4>
          <pre><code>
const badUser = {
  name: "Alex",
  greet: () => {
    console.log("Hi " + this.name); // ❌ this is undefined
  }
};
          </code></pre>`,
        highlight: `<h4>Quick Tips</h4>
          <ul>
            <li>Access properties using <code>dot</code> or <code>bracket</code> notation.</li>
            <li>Use <code>this</code> in methods to refer to the object.</li>
            <li>Arrow functions do NOT have their own <code>this</code> — avoid them for methods.</li>
          </ul>`
    },
    {
        topic: "LOOPS OVER ARRAYS / OBJECTS",
        content: ` <p>Loops let you process items in arrays or objects repeatedly.</p>

          <h4>1. for loop (arrays)</h4>
          <pre><code>
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
          </code></pre>

          <h4>2. for...of (arrays)</h4>
          <pre><code>
for (let color of colors) {
  console.log(color);
}
          </code></pre>

          <h4>3. forEach() (arrays)</h4>
          <pre><code>
colors.forEach(color => {
  console.log(color);
});
          </code></pre>

          <h4>4. for...in (objects)</h4>
          <pre><code>
const user = { name: "Tammy", age: 21 };
for (let key in user) {
  console.log(key + ": " + user[key]);
}
          </code></pre>`,
        highlight: ` <h4>Quick Tips</h4>
          <ul>
            <li>Use <code>for...of</code> or <code>forEach()</code> for arrays — they’re clean and readable.</li>
            <li>Use <code>for...in</code> for looping through object keys.</li>
            <li>Don't use <code>for...in</code> for arrays — it can lead to bugs.</li>
          </ul>`
    },
    {
        topic: "CHAPTER 3: DOM MANIPULATION ; WHAT IS THE DOM?",
        content: `<p>The DOM (Document Object Model) is a programming interface for web documents. It represents the page as a structured tree of objects that you can interact with using JavaScript.</p>
          
          <p>Each HTML element is represented as a node in the DOM, which allows JavaScript to read, modify, or create content dynamically.</p>

          <h4>Example:</h4>
          <pre><code>
<!-- HTML -->
<h1 id="title">Hello</h1>

<!-- JavaScript -->
const heading = document.getElementById("title");
console.log(heading.textContent); // "Hello"
          </code></pre>`,
        highlight: `<h4>Quick Tips</h4>
          <ul>
            <li>The DOM is not the actual HTML file — it's a live in-memory representation.</li>
            <li>Use the browser's Developer Tools (Elements tab) to inspect the DOM in real time.</li>
          </ul>`
    },
    {
        topic: "SELECTING & MODIFYING ELEMENTS (getElementById, querySelector)",
        content: `<p>You can access and change elements in the DOM using selection methods like <code>getElementById</code> and <code>querySelector</code>.</p>

          <h4>1. getElementById()</h4>
          <pre><code>
const title = document.getElementById("main-title");
title.textContent = "New Title";
          </code></pre>

          <h4>2. querySelector()</h4>
          <pre><code>
const btn = document.querySelector(".btn");
btn.style.color = "white";
btn.style.backgroundColor = "blue";
          </code></pre>

          <h4>3. querySelectorAll()</h4>
          <p>Selects all elements matching a selector (returns a NodeList):</p>
          <pre><code>
const items = document.querySelectorAll("li");
items.forEach(item => item.classList.add("highlight"));
          </code></pre>`,
        highlight: `<h4>Quick Tips</h4>
          <ul>
            <li><code>getElementById</code> is fast but limited to IDs.</li>
            <li><code>querySelector</code> works with any CSS selector — classes, tags, IDs, etc.</li>
            <li>Always check that the element exists before modifying it to avoid errors.</li>
          </ul>`
    },
    {
        topic: "EVENT LISTENERS",
        content: `<p>Event listeners allow you to run code when a user interacts with the page (e.g. clicks a button or types in an input).</p>

          <h4>1. Basic click event:</h4>
          <pre><code>
const btn = document.querySelector("#submit-btn");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});
          </code></pre>

          <h4>2. Mouse & keyboard events:</h4>
          <pre><code>
document.addEventListener("keydown", (event) => {
  console.log("You pressed: " + event.key);
});
          </code></pre>

          <h4>3. Using named functions:</h4>
          <pre><code>
function handleClick() {
  console.log("Clicked!");
}

btn.addEventListener("click", handleClick);
          </code></pre>`,

        highlight: `<h4>Quick Tips</h4>
          <ul>
            <li>Use <code>addEventListener</code> to attach multiple event types to the same element.</li>
            <li>Don't use <code>onclick</code> in HTML — keep JS and HTML separate.</li>
            <li>You can remove listeners later using <code>removeEventListener</code> with a named function.</li>
          </ul>`
    },
    {
        topic: "DOM TREE TRAVERSAL",
        content: `
          <p>DOM traversal means navigating between elements in the DOM tree, such as parent, child, or sibling nodes.</p>

          <h4>1. parentNode / parentElement:</h4>
          <pre><code>
const item = document.querySelector("li");
console.log(item.parentElement); // the parent container
          </code></pre>

          <h4>2. children / childNodes:</h4>
          <pre><code>
const list = document.querySelector("ul");
console.log(list.children); // HTMLCollection of child <li> elements
          </code></pre>

          <h4>3. nextElementSibling / previousElementSibling:</h4>
          <pre><code>
const firstItem = document.querySelector("li");
console.log(firstItem.nextElementSibling); // the next <li>
          </code></pre>
        `,
        highlight: `
          <h4>Quick Tips</h4>
          <ul>
            <li><code>parentElement</code> gets the direct container of an element.</li>
            <li><code>children</code> only includes element nodes, not text or comments.</li>
            <li>Traversal is helpful when dynamically building or updating the DOM.</li>
          </ul>
        `
    }
];

// Quiz data
const questions = [
    {
        question: "Which keyword is used to declare a variable that should not be reassigned?",
        options: ["var", "let", "const", "static"],
        correct: 2
    },
    {
        question: "What is the result of: typeof null?",
        options: ["'object'", "'null'", "'undefined'", "'boolean'"],
        correct: 0
    },
    {
        question: "What does DOM stand for?",
        options: [
            "Document Order Model",
            "Document Object Model",
            "Data Object Mapping",
            "Dynamic Object Machine"
        ],
        correct: 1
    },
    {
        question: "Which method selects an element by ID?",
        options: [
            "querySelectorAll()",
            "getElementById()",
            "getElementsByClass()",
            "selectById()"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a primitive data type?",
        options: ["Array", "Object", "String", "Function"],
        correct: 2
    },
    {
        question: "Which keyword is used to declare a block-scoped variable?",
        options: ["var", "let", "def", "this"],
        correct: 1
    },
    {
        question: "Which operator checks for strict equality (value and type)?",
        options: ["==", "===", "!=", "="],
        correct: 1
    },
    {
        question: "Which DOM method returns the first matching element?",
        options: ["getElementById", "querySelector", "getElementsByClassName", "querySelectorAll"],
        correct: 1
    },
    {
        question: "What type of value does typeof undefined return?",
        options: ["'null'", "'object'", "'undefined'", "'NaN'"],
        correct: 2
    },

    {
        question: "Which method creates a new array without modifying the original?",
        options: ["push()", "map()", "pop()", "splice()"],
        correct: 1
    },
    {
        question: "What does the filter() method return?",
        options: ["A string", "An object", "A new array", "Nothing"],
        correct: 2
    },
    {
        question: "Which loop guarantees at least one execution even if the condition is false?",
        options: ["for", "while", "do...while", "forEach"],
        correct: 2
    },
    {
        question: "Which property gets all child elements of a DOM node?",
        options: ["childNodes", "children", "subNodes", "nodes"],
        correct: 1
    },
    {
        question: "What is the output of typeof []?",
        options: ["'object'", "'array'", "'list'", "'undefined'"],
        correct: 0
    },
    {
        question: "What keyword is used inside a loop to skip an iteration?",
        options: ["exit", "skip", "continue", "next"],
        correct: 2
    },
    {
        question: "Which DOM method can be used to change styles directly?",
        options: ["getElementById()", "style()", "querySelector()", "element.style"],
        correct: 3
    },
    {
        question: "What is the correct way to attach a click event to a button?",
        options: [
            "onClick(button)",
            "button.addEvent('click')",
            "button.addEventListener('click', function)",
            "button.click(function)"
        ],
        correct: 2
    },
    {
        question: "Which object method lets you loop over an array and transform its items?",
        options: ["filter()", "forEach()", "map()", "reduce()"],
        correct: 2
    }


,
    {
        question: "What is the scope of a variable declared with 'var'?",
        options: ["Block", "Function", "Global", "Module"],
        correct: 1
    },
    {
        question: "Which keyword refers to the current object in a regular function?",
        options: ["this", "self", "object", "that"],
        correct: 0
    },
    {
        question: "How do arrow functions differ from regular functions?",
        options: [
            "They can't return values",
            "They must be anonymous",
            "They do not bind their own 'this'",
            "They require semicolons"
        ],
        correct: 2
    },
    {
        question: "What happens when you declare a const array and use push()?",
        options: [
            "It works — values can be modified",
            "It throws an error",
            "It reassigns the array",
            "It becomes immutable"
        ],
        correct: 0
    },
    {
        question: "Which method allows you to select multiple elements?",
        options: ["getElementById()", "querySelector()", "querySelectorAll()", "getNodeList()"],
        correct: 2
    },
    {
        question: "What will '5' === 5 evaluate to?",
        options: ["true", "undefined", "error", "false"],
        correct: 3
    },
    {
        question: "Which event is triggered when a user presses a key?",
        options: ["click", "hover", "keyup", "keydown"],
        correct: 3
    },
    {
        question: "What’s the result of calling typeof function(){}?",
        options: ["'object'", "'function'", "'method'", "'undefined'"],
        correct: 1
    },
    {
        question: "What does nextElementSibling return?",
        options: ["The parent element", "The previous node", "The next sibling element", "Null always"],
        correct: 2
    }
];


// Global Variables (Application state)
let currentLesson = 0;
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timer = null;
let timeLeft = 15;
let startTime = null;

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    updateLessonDisplay();
    updateNavbar();
});


// Navigation functions
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Show target section
    document.getElementById(sectionName).classList.add('active');

    // Update navbar
    updateNavbar();

    // Reset quiz if going to quiz section
    if (sectionName === 'quiz') {
        resetQuiz();
    }

    // Update lesson if going to lessons
    if (sectionName === 'lessons') {
        updateLessonDisplay();
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

function updateNavbar() {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.classList.remove('active'));

    const activeSection = document.querySelector('.section.active');
    if (activeSection) {
        const activeLink = document.querySelector(`[data-section="${activeSection.id}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}


     function toggleMobileMenu() {
    const sidebar = document.getElementById("mobileSidebar");
    sidebar.style.display = sidebar.style.display === "flex" ? "none" : "flex";
}

// Hide sidebar when a mobile link is clicked
function navigateMobile(section) {
    showSection(section);
    document.getElementById("mobileSidebar").style.display = "none";
}


// Lesson functions
function updateLessonDisplay() {
    const lesson = lessons[currentLesson];
    document.getElementById('lesson-topic').textContent = lesson.topic;
    document.getElementById('lesson-text').innerHTML = lesson.content;
    document.getElementById('current-lesson').textContent = currentLesson + 1;
    document.getElementById('total-lessons').textContent = lessons.length;

    // Update progress bar
    const progress = ((currentLesson + 1) / lessons.length) * 100;
    document.getElementById('lesson-progress-bar').style.width = progress + '%';

    // Update navigation buttons
    document.getElementById('prev-lesson').disabled = currentLesson === 0;

    const nextBtn = document.getElementById('next-lesson');
    const quizBtn = document.getElementById('start-quiz-btn');

    if (currentLesson === lessons.length - 1) {
        nextBtn.classList.add('hidden');
        quizBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        quizBtn.classList.add('hidden');
    }

    // Update highlight
    const highlightContainer = document.querySelector('.lesson-highlight');
highlightContainer.innerHTML = lesson.highlight;
}

function nextLesson() {
    if (currentLesson < lessons.length - 1) {
        currentLesson++;
        updateLessonDisplay();
    }
    window.scrollTo(0, 0);
}

function previousLesson() {
    if (currentLesson > 0) {
        currentLesson--;
        updateLessonDisplay();
    }
    window.scrollTo(0, 0);
}

// Quiz functions
function resetQuiz() {
    document.getElementById('quiz-start').classList.remove('hidden');
    document.getElementById('quiz-difficulty').classList.add('hidden');
    document.getElementById('quiz-questions').classList.add('hidden');
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    if (timer) clearInterval(timer);
    // timeLeft = 3000;
    startTime = null;
}

function startQuiz() {
    document.getElementById('quiz-start').classList.add('hidden');
    document.getElementById('quiz-difficulty').classList.add('hidden');
    document.getElementById('quiz-questions').classList.remove('hidden');

    currentQuestion = 0;
    score = 0;
    startTime = Date.now();
    document.getElementById('total-questions').textContent = questions.length;

    loadQuestion();

     // Start timer
    startTimer();
}

function loadQuestion() {
    const question = questions[currentQuestion];

    document.getElementById('question-text').textContent = question.question;
    document.getElementById('current-question').textContent = currentQuestion + 1;

    // Update progress bar
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = progress + '%';

    // Clear previous options
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    selectedAnswer = null;
    document.getElementById('next-btn').disabled = false;

    // Create options
    question.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = option;
        div.onclick = () => selectOption(index, div);
        container.appendChild(div);
    });

}

function selectOption(index, element) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Select current option
    element.classList.add('selected');
    selectedAnswer = index;
    document.getElementById('next-btn').disabled = false;
}

function startTimer() {
    timeLeft = 1200;
    document.getElementById('timer').textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timeUp();
        }
    }, 1000);
}

function timeUp() {
    showCorrectAnswer();
    document.getElementById('next-btn').disabled = false;
    document.getElementById('next-btn').textContent =
        currentQuestion === questions.length - 1 ? 'View Results' : 'Next Question';
}

function showCorrectAnswer() {
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');

    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer) {
            option.classList.add('incorrect');
        }
        option.onclick = null;
    });

    if (selectedAnswer === question.correct) {
        score++;
    }
}

function nextQuestion() {
    if (timeLeft > 0) {
        showCorrectAnswer();
        setTimeout(() => {
            proceedToNext();
        }, 1500);
    } else {
        proceedToNext();
    }

     window.scrollTo(0, 0);
}

function proceedToNext() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
        document.getElementById('next-btn').textContent = 'Next Question';
    } else {
        showResults();
    }
}

function showResults() {
    showSection('results');
    clearInterval(timer);

    const totalTime = Math.round((Date.now() - startTime) / 1000);
    const accuracy = Math.round((score / questions.length) * 100);

    // Update results display
    document.getElementById('results-score').textContent = score + '/' + questions.length;
    document.getElementById('correct-answers').textContent = score;
    document.getElementById('incorrect-answers').textContent = questions.length - score;
    document.getElementById('accuracy').textContent = accuracy + '%';
    document.getElementById('time-taken').textContent = totalTime + 's';
}

function restartQuiz() {
    showSection('quiz');
    resetQuiz();
}