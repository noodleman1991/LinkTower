# Treelink++

Treelink++ is a fork of [Treelink](https://github.com/trevortylerlee/treelink) that adds new features and improvements.

- Improved blog preview cards
- New default colour scheme
- More improvements on the way including featured links

## 🚀 Getting started

Run this in your terminal:
```bash
git clone github.com/mitchell-wallace/treelinkplusplus
cd treelinkplusplus
pnpm install
pnpm run dev
```

To use the contact form, you will need to get an access key from [Web3Forms](https://web3forms.com). Add the access key to the `siteConfig.json` file.

Then read Treelink's [Quick start guide](https://docs.treelink.app/guides/quick-start/) to get started with customisation. Most content from Treelink's docs is still aplicable to Treelink++.

## ✨ Features

- Customizable, with premade themes for light and dark mode
- Custom OpenGraph images per post, with a fallback image
- Icon support for hundreds of sites
- RSS and sitemap generation
- Optional blog
- Optional contact form using [Web3Forms](https://web3forms.com)
- Web vitals: 100 100 100 100

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:3030`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [Astro's documentation](https://github.com/withastro/astro) or jump into Astro's [Discord server](https://astro.build/chat).
