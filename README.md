# p5-ts-starter-kit

Generate a project with [p5.js](https://p5js.org/) and [typescript](https://www.typescriptlang.org/) working out of the box.

## Installation

Clone the repo

```
git clone https://github.com/pierpo/p5-ts-starter-kit.git
```

Reset the git history

```
mv p5-ts-starter-kit my-awesome-art
cd my-awesome-art
rm -rf .git
git init
git add .
git commit -m "initial commit"
```

Install the dependencies

```
yarn
```

Run the project

```
yarn start
```

You may now open `localhost:8080`. You're good to go :blush:

## Similar projects

This starter kit was greatly inspired by
[Gaweph](https://github.com/Gaweph/p5-typescript-starter)'s one. The main
difference is that here we use the npm distribution of `p5`, use `webpack` and setup tools like `eslint` and `prettier`.
