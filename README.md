# Nike Landing Page Project

> Clone Project
```sh
git clone https://github.com/Sebas5158R/Nike-shoes-page.git
```

> 🏠 **Screenshot page**!

![Nike-page](https://github.com/user-attachments/assets/d9b0477a-2732-4b22-ad41-0e55c752870a)


## 🚀 Project Structure

Inside the Astro project, you will see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
|   ├── assets/
|   |   └── svgs
|   |   └── fonts
│   ├── components/
│   │   └── DescriptionAndArrows.astro
│   │   └── Hero.astro
│   │   └── Navbar.astro
│   │   └── NikeData.astro
│   │   └── OptionsSizes.astro
│   │   └── SelectOptions.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── bun.lockb
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build).
