# Getting Started

Clone this repo to a new directory:

```bash
git clone https://github.com/mitchellsimoens/stencil-electron-app-starter my-app
cd my-app
git remote rm origin
```

and run:

```bash
npm ci
npm start
```

To build the app for production, run:

```bash
sudo docker run --rm -ti --env ELECTRON_CACHE="/root/.cache/electron"  --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder"  -v ${PWD}:/project  -v ${PWD##*/}-node-modules:/project/node_modules  -v ~/.cache/electron:/root/.cache/electron  -v ~/.cache/electron-builder:/root/.cache/electron-builder  electronuserland/builder:wine
```

```bash
npx electron-builder --win
```

```bash
npx electron-builder --linux deb
```

## Tailwind CSS

A little note about using Tailwind CSS. First, I have learned to love Tailwind especially with it's JIT mode. However, with web components that have shadow dom, Tailwind styles cannot style within shadow dom. Two ways around it:

1. Do not use shadow dom (shadow dom isn't always needed anyway).
2. Add Tailwind to a component's styles (see [app-header](src/components/app-header) component). The bad part about this is the styles for that component is bloated quite a bit. There is purgecss to minimize that but that also comes at a cost of build times.

So I love Tailwind and definitely see the benefits of it; however, it's not perfect. I don't think every component needs to have shadow dom enabled (think containers vs components) but even components need different hings like font colors and using Tailwind is beneficial there. So I haven't found a solution that I'm completely in love with and ideas are very welcome!

### Thanks to
- [@davembush](https://medium.com/@davembush/typescript-and-electron-the-right-way-141c2e15e4e1)
- [TypeStrong/ts-node](https://github.com/TypeStrong/ts-node)
- [shelljs/shelljs](https://github.com/shelljs/shelljs)
- [sindresorhus/electron-serve](https://github.com/sindresorhus/electron-serve)
- [yan-foto/electron-reload](https://github.com/yan-foto/electron-reload)


### TODO
- https://github.com/ArekSredzki/electron-release-server
