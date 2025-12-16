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

## Services

Useful API's not implemented yet until database is implemented. Here are links to the API's to be used:
Zillow listings: (https://hasdata.com/apis/zillow-api?utm_source=google&utm_medium=cpc&utm_campaign=23045037726&utm_term=zillow%20api&utm_content=775748274124&gad_source=1&gad_campaignid=23045037726&gbraid=0AAAABBWhTr-9Xkiq6RCWgZyn3nuUrjjIU&gclid=Cj0KCQiAq7HIBhDoARIsAOATDxAOwhrRjtmivj8dxEuOgZUnK0px8GNSg6bwGHcIjxrwxFWyjLGOEdQaAiyxEALw_wcB)
Zillow reviews: (https://www.zillowgroup.com/developers/api/agents/agent-reviews/)
Crime: (https://rapidapi.com/collection/crime)




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


FINAL REVIEW QUESTIONS

Pick the best answer to each question.

2. What is the default port for HTTP/HTTPS/SSH? 
- HTTP: 80
- HTTPS: 443
- SSH: 22

3. What does an HTTP status code in the range of 300/400/500 indicate?
- 300s: Redirection (must take additional action)
- 400s: Client errors (bad request, unauthorized, not found)
- 500s: Server errors (server failed to handle request)

4. What does the HTTP header content-type allow you to do?
- Tells client what type of data is being sent (json, html, plain text) so it knows how to parse it

5. What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do? https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
- secure cookie: only sent over https
- httponly cookie: cannot be accessed via javascript (protects against xss)
- samesite cookie: controls whether cookies are sent with cross-site requests

6. Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?
- 

7. Given the following Express service code: What does the following front end JavaScript that performs a fetch return?
- 

8. Given the following MongoDB query, select all of the matching documents {name:Mark}
- 

9. How should user passwords be stored?
- hashed, salted, using a string algorithm like bcrypt, argon2, or scrypt

10. Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?
- 

11. What is the websocket protocol intended to provide?
- to provide full-duplex, persistent, real-time communication between a client and server over a single connection

12. What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM
- jsx=javascript xml
- js=javascript
- aws=amazon web services
- npm=node package manager
- nvm=node version manager

13. Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters.
- 

14. Given a set of React components that include each other, what will be generated
- 

15. What does a React component with React.useState do?
- allows a React component to store and update local state, causing the component to re-render when the state changes

16. What are React Hooks used for?
- they let you use state, handle side effects, access context, manage refs without writing class components

17. What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do? https://react.dev/reference/react/hooks
- useState: local component state
- useContext: access global/shared state
- useRef: persistent mutable values or DOM refs
- useEffect: side effects (fetching, subscriptions)
- useMemo, useCallback: optimize re-renders

18. Given React Router code, select statements that are true.
- 

19. What does the package.json file do?
- describes the project, lists dependencies, defines scripts, stores metadata (name, version, entry point)

20. What does the fetch function do?
- performs http requests from the browser or Node.js and returns a promise that resolves to a response

21. What does node.js do?
- allows js to run outside the browser for servers, apis, CLI tools

22. What does pm2 do?
- a process manager for node.js that keeps apps running, restarts on crashes, supports clustering, manages logs

23. What does Vite do?
- a modern frontend tool that provides fast dev server, optimized product builds, native ES module support
