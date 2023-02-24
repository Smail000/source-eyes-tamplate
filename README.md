
# Source Eyes template

Base for quick start developing web application using React + TypeScipt + Parcel (Frontend) and Express (Backend). You may replace Express on another technology.

# Dependencies

 - Programming Language — [Typescript](https://www.typescriptlang.org/) + [Books/Docs](https://www.typescriptlang.org/docs/handbook/intro.html)
 - WebFramework — [React](https://ru.reactjs.org/) + [Books/Docs](https://flaviocopes.com/book/read/react/)
   - Components pack — [Chakra UI + Docs](https://chakra-ui.com/)
   - Animations — [Framer Motion + Docs](https://www.framer.com/motion/)
   - State managering — [Redux](https://redux.js.org/) + [Docs](https://redux.js.org/introduction/learning-resources)
   - Routing — [React router + Docs](https://reactrouter.com/en/main/start/tutorial)
   - Draggable elements — [React Draggable + Docs](https://www.npmjs.com/package/react-draggable)
   - Framework for visual disigning — [Craft JS + Demo](https://craft.js.org/) + [Docs](https://craft.js.org/docs/overview)
 - Transferring data — [SocketIO + Docs](https://socket.io/)
 - Development dependencies
   - Easy usage for some env — [CrossEnv + Docs](https://www.npmjs.com/package/cross-env)
   - Bundler — [Parcel + Docs](https://parceljs.org/recipes/react/)

Wanna more? Click [here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

# Installing

```
git clone https://github.com/Smail000/source-eyes-tamplate.git
cd source-eyes-tamplate
npm i
```

# Usage

Development mode (parcel base server) (will start server with live reload)
```
npm run parcel:dev
```
Or development mode without server, just compile every new save
```
npm run parcel:watch
```
Production mode
```
npm run parcel:build
```
In both cases all files will export into /build directory.

To run server script in development mode
```
npm run server:dev
```
And production mode
```
npm run server:prod
```

