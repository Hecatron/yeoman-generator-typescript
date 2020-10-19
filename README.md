# yeoman-generator-typescript

This is just a base example of a yeoman generator written in typescript
I originally tried to do this using yarn2 but had problems with yeoman supporting pnp
So this repo is setup for yarn v1 which just installs the modules into node_modules/

## Yarn commands

```
# To install the depends
yarn install

# To compile the typescript
yarn build

# To run eslint against the typescript
yarn eslint:check
```

## VSCode

The launch.json file should be setup for debugging the yeoman generator typescript source.
Just open up the index.ts file and launch the debugger

## Running the generator

To run the generator on the disk during development
```
# using a globally installed yeoman
yo path\to\generator

# using a locally installed yeoman via yarn
yarn run:generator
```
