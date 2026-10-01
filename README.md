# 🧱 Dev Stack — Pick your tools. Build your stack.

Dev Stack is a small web app for developers and students planning their next project. Browse frontend, backend, database, and tooling options side by side, then assemble the exact combination you're going to build with — before writing a single line of code.

## 🛠️ Built With

- React (Vite)
- Tailwind CSS
- react-toastify
- JSON (local technology data)

## ✨ Features

1. **Browse & compare technologies** — 15 tools across Frontend, Backend, Database, Language, Styling, DevOps, and Tools categories, each with a rating, difficulty level, and description, loaded dynamically from a JSON file.
2. **Build your stack** — Add technologies to a live "Your Stack" panel with one click; duplicate adds are blocked with a warning, and added cards are visually disabled.
3. **Manage your selection** — Remove any single technology or clear the whole stack at once, with toast notifications confirming every action.

## ❓ React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like markup directly inside JavaScript. It's used because it makes describing what a component's UI should look like much more readable than calling `React.createElement` by hand — it compiles down to that under the hood.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — the component receiving them can't change them. State is data a component manages *internally* and can update over time (for example, with `useState`), which causes the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component hold and update its own local data between renders. In this project it's used in `Technologies.jsx` to store the fetched technology list, the loading flag, and the current "Your Stack" array, and in `Navbar.jsx` to track whether the mobile menu is open.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects — code that reaches outside the component, like fetching data — after the component renders. We needed it because fetching `technologies.json` is an async operation that shouldn't run during render; `useEffect` with an empty dependency array runs it exactly once, when the `Technologies` component first mounts.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell items apart between re-renders, so it knows which items were added, removed, or reordered instead of re-rendering the whole list from scratch. Without a stable unique key, React can mismatch items and cause bugs or lost UI state.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition. In `YourStack.jsx`, when `stack.length === 0` the component renders an empty-state message ("Your stack is empty."); otherwise it renders the list of added technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child as props (e.g. `<TechCard tech={tech} isAdded={...} />`). For a child to send information back up, the parent passes a function down as a prop (e.g. `onAdd`), and the child calls that function with the relevant data — which is exactly how clicking "Add to Stack" in `TechCard` tells `Technologies` to update the stack.

## 📤 Submission

- GitHub Repository Link:
- Live Site Link:
