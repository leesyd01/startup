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
