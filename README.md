# Express Typescript Template

## Getting Started

### Install
Fetch dependencies:
```bash
npm install
```

### Build
To run the build, use either of the following:
```bash
# For production build:
node build.js prod
# For development build:
node build.js dev
# or
node build.js
```

### Run
Express app listens on port `3000`.
```bash
npm start
```

### Mongo DB

Run Mongo DB. Express app connects to `express-ts` database [by default](./src/config/env/development.ts).

If you use Docker, you can run the following container:

```bash
docker run --detach --publish 27017:27017 --name express-ts-mongo mongo
```

## Development

### Express

Express app is written in TypeScript and transpiled files are placed in `dist/`. The entry point of the app is [`www.js`](./bin/www.js) module. It runs the transpiled JS files in `dist/`.



#### Debug Express in VS Code

If you use Visual Studio Code, there are [configurations](./.vscode/) to help you with debugging the app.

1. Open app in VS Code
1. Press `Ctrl + Shift + B` (Run Default Build Task) to watch TS files in "src/" and transpile them in background
1. Press F5 to debug TS files

## Configurations

Mongo Db connection string can be set in the [config files](./src/config/env) or as a `APP_MONGO` environment variable.

> If an app configuration is available both in a file and as environment variable, environment variable wins.
