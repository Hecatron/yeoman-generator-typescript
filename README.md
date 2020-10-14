# yeoman-generator-typescript

This is just a base example of a yeoman generator written in typescript

## Development - Install depends

To install the depends
```
yarn install
```

To compile the typescript
```
yarn run build
```

## Development - Testing

Note this repo is setup to use yarn2 but I had problems running the yo command with yarn2's pnp system.
It can work inside the source directory by running for example
```
yarn pnpify yo .\generators\app
```

But trying to run this outside of the source dir, or a subdir in the source dir results in a module not found error
even when trying to wrap it in pnpify
