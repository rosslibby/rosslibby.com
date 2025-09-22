# 🔋 rosslibby.com is POWERED BY [THIS REPO]
This repository powers my personal portfolio site: [rosslibby.com](https://rosslibby.com).

# TL;DR
I built this site to showcase not just my work, but _how I work_: deliberate design, thoughful engineering, and attention to detail.

### Stack
- NextJS (React + SSR)
- Context API + custom hooks (clean state management)
- (S)CSS Modules + Sass (handwritten styles, no UI libraries)
- Shiki (beautiful, performant code highlighting)

### Principals
- Handcrafted → I designed and built the UI in its entirety
- Lean + minimal → no heavy frameworks, only what's needed
- Craft first → details matter, from architecture to hover states

<br>

# Why I built it
I believe my portfolio should showcase not only _what I've built_, but also _how I build_. This site is as much about **my process** as it is about **my work**. My goal was to represent how I operate as a developer and highlight my strengths:
- I value clarity and intentionality in design
- I know when to reach for broad-utility solutions and when a problem demands a custom approach
- I care about the details, both in UI/UX and under the hood

## Tech stack & tooling
- **NextJS**: the core framework (React + server-side rendering)
- **React's Context API & custom hooks:** for clean, composable state management
- **(S)CSS Modules:** every style is hand-written. No UI libraries (e.g. Tailwind, Bootstrap, Material UI); just direct, scoped control
- **Sass:** nested selectors keep styles expressive and DRY
- **Shiki:** renders beautifully highlighted code snippets in an immersive way

## Design decisions

### No UI libraries
I designed and implemented every pixel you see. This means I own the look, feel and behavior of the site end-to-end.

### (S)CSS Modules
Scoped styles without global leakage, while still unlocking Sass features.

### Custom state management
I enjoy the organization and stateful purity enforced by React's Context API.

### Shiki
I chose Shiki for syntax highlighting because of its performance and broad language/theme support. (I may or may not have [a side-project](https://codepen.io/rosslibby/pen/XJXbWEE) in which I am unleashing its full capabilities as a web-based code editor 👀)

## Professional/creative perspective

This website reflects how I like to work:

### Synergistic Design x Engineering
One of the staples of this project was seamless collaboration<sup>1</sup> between design and engineering. The two iterated in perfect sync until features felt right.

### Deliberate minimalism
I kept the project lean by avoiding heavy frameworks and over-the-top plugins. That said, I didn't restrict myself to _only the essentials_...<sup>2</sup>

### Attention to craft
Every detail, from component architecture to hover states, is intentional. The polish comes from **care**, not **complexity**.

<br>

---
<br>

> <sup>1</sup> Of course, such effortless cooperation is easier to achieve when I'm both the designer and the engineer 😬

> <sup>2</sup> If you dig, you'll find a dyanmic viewfinder component, and maybe even an experimental documentation API parser 🤫