# Next.js memory-game 🎮

This time I build a memory game with `Next.js` following the design in `Figma` provided by [BeCoder](https://becoder.dev/en/app), a platform I am subscribed to, addressed to developers to increase their skills

## ⚠️ Important

At first glance, parts of the project might seem over-engineered with too much logic split into small pieces, many folders, or a high level of abstraction.

Truth is: you're not wrong. I did over-complicate things a bit. 🫡

But this was intentional. When I'm exploring new tools like `Next.js` or experimenting with `new architectural patterns`, I prefer to build in smaller, more controlled environments. This lets me validate ideas, test patterns, and learn from mistakes without the pressure of a huge app. 🏟️

Once I feel confident, I can easily scale those ideas into larger or production-ready projects.

## Tools 🔨

- **Next.js (App Router architecture) used as the main framework**
- **Webpack 5 — configured as the module bundler**
- **Sass (SCSS) — as a CSS preprocessor for modular styling**
- **Sass as css preprocessors**
- **Redux Toolkit — for structured and scalable state management**
- **Typescript used for static typing and code safety**

## Dependencies setup 📦

This project uses **Yarn Berry (v4)** as the package manager for faster setup
While Yarn Berry defaults use Plug'n'Play (PnP) for module resolution, I’ve chosen to use the classic `node_modules` linker to avoid extra configuration and ensure compatibility with all tooling out-of-the-box.

### One-liner setup script: `nci()` ⚡

You can add this function to your shell (e.g. `.bashrc` or `.zshrc`) to quickly bootstrap the project:

```bash
nci() {
  sudo corepack enable
  corepack prepare yarn@4.9.1 --activate
  yarn set version berry
  echo "nodeLinker: node-modules" > .yarnrc.yml
  rm -rf .pnp.* .yarn
  yarn install
}
```

## Code Style Notes ℹ️

I use a few conventions recurring in my personal projects

- **Snake_case in CSS class names**
  - I find snake_case visually easier to scan and separate logically grouped words (e.g., btn_primary_active), it’s purely for personal comfort. In a team setting, I fully adopt standard conventions like kebab-case or BEM to ensure consistency and collaboration.
- **Short aliases for variables and imports**
  - You might notice concise aliases (like ctx, cfg, or el) throughout the code. I use them when:
    - I'm the sole developer
    - The data source is declared clearly at the top
    - The types are explicit and self-documenting as well as component name

## Final Note 🗒️

I am always open to any suggestion and advice or alternative ways to implement functionalities, so i would be glad to listen your ideas 🧐
Thanks for the time checking out the project ✌🏼
