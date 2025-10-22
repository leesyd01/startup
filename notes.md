# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)
[My startup - HomeQuest](https://startup.homequest.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)
- [ColorValues repo]()

## AWS

My IP address is (with Elastic IPv4): 54.198.115.193

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML


## CSS

[ ] Use ColorValues tool to update image on homepage.html to match the colors in photo to the color of the website
[ ] Resize photos to fit border and make sure it looks nice
[ ] Upload ColorValues project to GitHub and touch up. Make interface to help with usability

 /* additional colors (from ChatGPT):
  /* 🎨 For a student-housing website aimed at college students, you’ll usually want something that feels fresh, friendly, and trustworthy. Some good choices:
  Blue tones (#2a7ae2, #3b82f6) → clean, trustworthy, professional.
  Green tones (#16a34a, #22c55e) → growth, affordability, eco-friendly vibes.
  Orange/Coral accents (#f97316, #fb923c) → energetic, youthful, attention-grabbing.
  Neutral grays (#374151, #6b7280) → modern and minimal, good as secondary colors.
A good combo is to keep the nav bar a bold, saturated color (blue or green) and use accent colors (like orange or yellow) for hover states and buttons. */
  

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```


MIDTERM REVIEW QUESTIONS
This exam covers all instructions given to this point in the course.  You may use any notes that you have added to your Start Up repository notes.md.
You may not consult any other resources or use any program to assist you while taking the exam.
Pick the best answer to each question.
You may want to make sure you can answer these questions and put any notes you need into your notes.md github page

1. In the following code, what does the link element do?
- Connects external resources(usually CSS files) to the HTML doc.
EX: ```<link rel="stylesheet" href="style.css">```

2. In the following code,  what does a div tag do?
- Defines a generic block-level container used to group elements for styling or layout.

3. In the following code, what is the difference between the #title and .grid selector?
- #title targets an element with id="title" (only one per page)
- .grid targets all elements with class="grid" (can be many)

4. In the following code, what is the difference between padding and margin?
- Padding = space INSIDE an element (between content and border)
- Margin = space OUTSIDE the element (between border and other elements)

5. Given this HTML and this CSS how will the images be displayed using flex?
- Images (or any flex items) align in a row by default (flex-direction: row), evenly spaced or wrapped depending on justify-content and flex-wrap.

6. What does the following padding CSS do?
- ```padding: 10px 20px;```
- Adds 10px top/bottom and 20px left/right inner spacing 

7. What does the following code using arrow syntax function declaration do?
- Shorter way to define a function: ```const add = (a, b) => a + b;```
- equivalent to: ```function add(a, b) { return a + b; }

8. What does the following code using map with an array output?
- ```[1, 2, 3].map(x => x * 2);```
- output = [2, 4, 6]

9. What does the following code output using getElementByID and addEventListener?
- Adds an event listener (like a click handler) to a specific element.
- EX: ```document.getElementById("btn").addEventListener("click", () => {console.log("clicked");});```
- Logs "clicked" when the element is clicked

10. What does the following line of Javascript do using a # selector?
- EX: ```document.querySelector("#title");```
- Selects the element with id="title"

11. Which of the following are true? (mark all that are true about the DOM)
- The DOM represents the HTML as a TREE STRUCTURE
- It allows JAVASCRIPT TO ACCESS AND MODIFY elements, styles, and content.

12. By default, the HTML span element has a default CSS display property value of: 
- ```<span>``` --> display: inline;

13. How would you use CSS to change all the div elements to have a background color of red?
- ```div { background-color: red; }```

14. How would you display an image with a hyperlink in HTML?
- ```<a href = "https://example.com">```
        ```<img src="image.jpg" alt="Example">```
   ``` </a>```

15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
- CONTENT -> PADDING -> BORDER -> MARGIN

16. Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
- ```<p><span class="green">trouble</span>double</p>```

17. What will the following code output when executed using a for loop and console.log?
- EX: ```for (let i = 0; i < 3; i++) console.log(i);```
- outputs: 0, 1, 2

18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
- ```document.getElementById("byu").style.color = "green";```

19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
- Paragraph: <p>
- Ordered list: <ol>
- Unordered list: <ul>
- Heading 1: <h1>
- Heading 2: <h2>
- Heading 3: <h3>

20. How do you declare the document type to be html?
- <!DOCTYPE html>

21. What is valid javascript syntax for if, else, for, while, switch statements?
- if (condition) { ... }
  else ( ... )

  for (let i = 0; i < n; i++) { ... }

  while (condition) { ... }

  switch (value) {
    case x: ...; break;
    default: ...;
  }

22. What is the correct syntax for creating a javascript object?
- const person = {
  name: "Alice",
  age: 25
};

23. Is it possible to add new properties to javascript objects?
- Yes, objects are dynamic
- EX: ```person.city = "Provo";```

24. If you want to include JavaScript on an HTML page, which tag do you use?
- <script src="script.js"></script>
OR
- <script>console.log("Hello!");</script>

25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
- HTML: <p id="animal">animal</p>
  <p>fish</p>
- JS: document.getElementById("animal").textContent = "crow";

26. Which of the following correctly describes JSON?
- {"name": "Alice", "age": 25}

27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
- Command	Description
chmod	Change file permissions
pwd	Print current working directory
cd	Change directory
ls	List files
vim	Open file in Vim editor
nano	Open file in Nano editor
mkdir	Make new directory
mv	Move or rename file
rm	Remove file
man	Show manual/help page
ssh	Connect to remote shell (Secure Shell)
ps	Show running processes
wget	Download file from web
sudo	Run command as superuser (admin)

28. Which of the following console command creates a remote shell session?
- ssh

29. Which of the following is true when the -la parameter is specified for the ls console command?
- Lists all files, including hidden ones (-a), in LONG FORMAT (-1)

30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
- Part	Type
click	Top-level domain (TLD)
bozo.click	Root domain
fruit.bozo.click	Subdomain
banana.fruit.bozo.click	Sub-subdomain

31. Is a web certificate is necessary to use HTTPS.
- Yes, HTTPS requires a valid SSL/TLS certificate

32. Can a DNS A record can point to an IP address or another A record.
- No, an A record points only to an IP ADDRESS (not another A record)

33. Port 443, 80, 22 is reserved for which protocol?
- Port	Protocol
443	HTTPS
80	HTTP
22	SSH

34. What will the following code using Promises output when executed?
- EX: Promise.resolve("done").then(v => console.log(v));
- Output: done
- If delayed: new Promise(r => setTimeout(() => r("ok"), 1000))
                  .then(console.log);
- After 1 second: "ok"



FROM TA'S:
Web Development Midterm Study Guide

In the following code, what does the link element do?
It links an external resource (usually a CSS file) to the HTML document. Example: <link rel="stylesheet"
href="styles.css"> applies styles from styles.css to the page.

In the following code, what does a div tag do?
A &lt;div&gt; is a block-level container that groups other elements. It's used for structure and layout.
Examples (use in layouts):
&lt;div class="header"&gt; ... &lt;/div&gt;
&lt;div class="content"&gt; ... &lt;/div&gt;
Divs have default display:block and take full width. They don't add behavior by themselves.

In the following code, what is the difference between the #title and .grid selector?
#title selects an element by ID (unique). .grid selects elements by class (can apply to multiple elements).

In the following code, what is the difference between padding and margin?
Padding: space inside the element (between content and border). Margin: space outside the element (between
border and other elements).

Given this HTML and this CSS how will the images be displayed using flex?
If the container uses display: flex;, the images will be displayed in a row by default, side by side, unless
flex-direction: column; is specified.

What does the following padding CSS do?
Example: padding: 10px 20px; adds 10px top/bottom and 20px left/right inside the element.

What does the following code using arrow syntax function declaration do?
Arrow functions are a compact function syntax. (a, b) => a + b means a function with parameters a and b that
returns a+b.
Examples:
const add = (a, b) => a + b;
const greet = name => `Hi ${name}`;
const square = x => { return x * x; } // block form
Note: arrow functions do not bind their own 'this' and are not suitable as constructors.

What does the following code using map with an array output?
map() transforms every element of an array and returns a new array without mutating the original.
Examples:
const nums = [1,2,3];
const doubled = nums.map(n => n * 2); // [2,4,6]
const names = ['Amy','Bob'];
const greetings = names.map(n => `Hi ${n}`); // ['Hi Amy','Hi Bob']

What does the following code output using getElementByID and addEventListener?
Typical pattern:
const btn = document.getElementById('btn');
btn.addEventListener('click', () => console.log('Clicked!'));
Behavior: When user clicks the element with id 'btn', the callback runs and prints 'Clicked!'.

What does the following line of Javascript do using a # selector?
document.querySelector('#title') selects the first element that matches the CSS selector #title (elemequerySelector accepts any CSS selector (classes, attributes, pseudos).

Which of the following are true? (mark all that are true about the DOM)
The DOM represents the HTML document as a tree of objects. You can use JavaScript to access and modify
DOM elements. Each HTML element is a node in the DOM.
By default, the HTML span element has a default CSS display property value of:
inline

How would you use CSS to change all the div elements to have a background color of red?
div { background-color: red; }

How would you display an image with a hyperlink in HTML?
Wrap the &lt;img&gt; element with an &lt;a&gt; tag. Ensure the image file is in the correct folder (public or
images/) and the src path points to it.
Example:
&lt;a href="https://example.com"&gt;
 &lt;img src="images/logo.png" alt="Logo"&gt;
&lt;/a&gt;
Folder scheme example:
project/
 index.html
 images/
 logo.png
 css/
 styles.css
If using a framework, the image may need to be in a 'public' or 'static' folder so it is served directly.

In the CSS box model, what is the ordering of the box layers starting at the inside and working
out?
Order: Content -> Padding -> Border -> Margin
Diagram:
+----------------+
| Margin |
| +------------+ |
| | Border | |
| | +--------+ | |
| | |Padding | | |
| | |Content | | |
| | +--------+ | |
| +------------+ |
+----------------+
Padding increases size inside border; margin creates space between elements.

Given the following HTML, what CSS would you use to set the text "trouble" to green and leave
the "double" text unaffected?
Given <p><span class="trouble">trouble</span> double</p>, use .trouble { color: green; }

What will the following code output when executed using a for loop and console.log?
for (let i = 0; i < 3; i++) { console.log(i); }
This initializes i=0, checks i<3 each loop, runs body and increments i++ after each iteration. Output 

How would you use JavaScript to select an element with the id of “byu” and change the text
color of that element to green?
Option 1 (direct):
document.getElementById('byu').style.color = 'green';
Option 2 (variable):
const byu = document.getElementById('byu');
byu.style.color = 'green';
Explanation: getElementById returns the DOM element. Assigning to variable avoids querying repeatedly.

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level
heading, first level heading, third level heading?
Paragraph: <p>, Ordered list: <ol>, Unordered list: <ul>, h2: <h2>, h1: <h1>, h3: <h3>

How do you declare the document type to be html?
<!DOCTYPE html>

What is valid javascript syntax for if, else, for, while, switch statements?
if (x > 5) { ... } else { ... } for (...) { ... } while (...) { ... } switch (x) { case 1: ...; break; default: ... }

What is the correct syntax for creating a javascript object?
const person = { name: "John", age: 30 };

Is it possible to add new properties to javascript objects?
Yes. Example: person.city = "Provo";

If you want to include JavaScript on an HTML page, which tag do you use?
<script src="script.js"></script>

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and
leave the "fish" text unaffected?
HTML:
<p id="animal">animal</p>
<p id="fish">fish</p>
Option 1 (direct):
document.getElementById('animal').textContent = 'crow';
Option 2 (variable):
const animal = document.getElementById('animal');
animal.textContent = 'crow';
Both work; second is clearer if reusing element.

Which of the following correctly describes JSON?
JSON (JavaScript Object Notation) is a text-based format for structured data using key-value pairs. Example: {
"name": "John", "age": 25 }

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps,
wget, sudo do?
chmod - change permissions, pwd - print working directory, cd - change directory, ls - list files, vim/nano - text
editors, mkdir - make directory, mv - move/rename, rm - remove, man - manual, ssh - remote shell, ps -
processes, wget - download files, sudo - run as admin

Which of the following console command creates a remote shell session?
ssh

Which of the following is true when the -la parameter is specified for the ls console command?
ls -la lists all files (including hidden) in long format

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top
level domain, which is a subdomain, which is a root domain?
TLD: .click, root domain: bozo.click, subdomain: fruit.bozo.click (and banana.fruit.bozo.click is a nested
subdomain)

Is a web certificate is necessary to use HTTPS?
Yes, HTTPS requires a valid SSL/TLS certificate.

Can a DNS A record can point to an IP address or another A record?
A DNS A record points to an IP address; it should not point to another A record.

Port 443, 80, 22 is reserved for which protocol?
443 -> HTTPS, 80 -> HTTP, 22 -> SSH

What will the following code using Promises output when executed?
Many possibilities depending on promise behavior. Examples:
1) Promise.resolve('Done').then(console.log) -> 'Done'
2) Promise.reject('Error').catch(console.error) -> 'Error'
3) new Promise(res => setTimeout(() => res('Hi'),1000)).then(console.log) -> 'Hi' after 1s
4) Async function returns value -> printed when awaited or .then
5) Promise chain: Promise.resolve(2).then(x=>x*2).then(x=>x+1).then(console.log) -> 5
6) Reject handled -> shows error via catch.
