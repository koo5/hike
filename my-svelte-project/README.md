# hike (a prototype)

The considered usecase is: imagine you have to load, explore, edit and save a json file. Completely eyes-free and keyboard/mouse-free, just voice. The basis is svelte's component system, where each component primarily contains Commands. The whole app state then is a list of windows/dialogs represented by json. But at the same time, this approach allows the programmer to specify less or more detailed GUI elements for any component. 




## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```
