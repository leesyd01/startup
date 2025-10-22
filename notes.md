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
2. In the following code,  what does a div tag do?
3. In the following code, what is the difference between the #title and .grid selector?
4. In the following code, what is the difference between padding and margin?
5. Given this HTML and this CSS how will the images be displayed using flex?
6. What does the following padding CSS do?
7. What does the following code using arrow syntax function declaration do?
8. What does the following code using map with an array output?
9. What does the following code output using getElementByID and addEventListener?
10. What does the following line of Javascript do using a # selector?
11. Which of the following are true? (mark all that are true about the DOM)
12. By default, the HTML span element has a default CSS display property value of: 
13. How would you use CSS to change all the div elements to have a background color of red?
14. How would you display an image with a hyperlink in HTML?
15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
16. Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
17. What will the following code output when executed using a for loop and console.log?
18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
20. How do you declare the document type to be html?
21. What is valid javascript syntax for if, else, for, while, switch statements?
22. What is the correct syntax for creating a javascript object?
23. Is it possible to add new properties to javascript objects?
24. If you want to include JavaScript on an HTML page, which tag do you use?
25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
26. Which of the following correctly describes JSON?
27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
28. Which of the following console command creates a remote shell session?
29. Which of the following is true when the -la parameter is specified for the ls console command?
30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
31. Is a web certificate is necessary to use HTTPS.
32. Can a DNS A record can point to an IP address or another A record.
33. Port 443, 80, 22 is reserved for which protocol?
34. What will the following code using Promises output when executed?
