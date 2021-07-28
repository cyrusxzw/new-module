# Aesop Global Experience Language

<!-- Tags -->

![Prepare Release build badge](https://img.shields.io/github/workflow/status/aesop/aesop-gel/Prepare%20Release?label=Prepare%20Release%20build&logo=github)
![npm](https://img.shields.io/npm/v/@aesop-engineering/gel)
![Version badge](https://img.shields.io/github/package-json/v/aesop/aesop-gel)
![Pre Release Build badge](https://img.shields.io/github/v/release/aesop/aesop-gel?include_prereleases&label=pre%20release%20build)
![Tag badge](https://img.shields.io/github/v/tag/aesop/aesop-gel)

<!-- End Tags -->

## Tooling Requirements

- **Node** [https://nodejs.org/](https://nodejs.org/) (required version recorded in the [.nvmrc](.nvmrc) file)
- **TypeScript** [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

## Tooling Suggestions

- **Homebrew** [https://brew.sh/](https://brew.sh/)
- **Node Version Manager** [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

It is also recommended to install these plugins into your **IDE / Code Editor** of choice:

- TypeScript
- Babel ([atom](https://atom.io/packages/language-babel))
- Base linter ([atom only](https://atom.io/packages/linter))
- Editor Config ([atom](https://atom.io/packages/editorconfig))
- ESLint ([atom](https://atom.io/packages/linter-eslint)) ([vscode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint))
- Linter UI ([atom only](https://atom.io/packages/linter-ui-default))
- Prettier ([atom](https://atom.io/packages/prettier-atom))
  ([vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode))
- StyleLint ([atom](https://atom.io/packages/linter-stylelint)) ([vscode](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint))

## Usage

Install in your application using the following command

```bash
# to use the most recent stable version
npm install @aesop-engineering/gel --save

# to use the in-development version
npm install github:aesop/aesop-gel --save
```

Import the component/hook/etc that you need in your code

```jsx
import { Heading } from 'aesop-gel/dist/components/Heading'; // or from '@aesop-engineering/gel/dist/components/Heading';

// example usage
const MyAppHeading = () => (
  <Heading theme="dark" level="1" size="large">
    This is a large H1
  </Heading>
);
```

All exposed components, hooks, contexts, types and utilities can be reviewed [here](https://github.com/aesop/aesop-gel/blob/develop/src/index.ts)

## Application Architecture

TBA

## Development

```bash
nvm use && npm ci && npm start
```

### While using a consuming application

You can use the `npm link` command to actively develop on Aesop Gel and have the changes reflected in your consuming app.

```bash
# run inside aesop-gel to create a global link to be used
npm link

# run inside aesop-gel to get a link to the consumer's react
npm link ../aesop-web-ui/node_modules/react

# run inside aesop-web-ui to use your local aesop-gel build
npm link aesop-gel

# finally run this to update the built files on changes
npm run build-watch
```

### VS Code

Visual Studio code struggles to make sense of aliased imports which are being utilised in this project.
To address this you can use a `jsconfig.json` with a sample shown below. More information can be found [here](https://code.visualstudio.com/docs/languages/jsconfig)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

## Production

Rollup builds ES Modules for this project. The following command will also construct the Typescript declaration files.

```bash
npm run build
```

## Git Workflow

This project adopts a simplified version of the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

`feature` (or `update`, or `bugfix` where appropriate) branches are branched from `develop`, and are merged back into `develop` after an approved Pull Request.

`hotfix` branches can be merged into `main` if they originate from `main`.

`main` is always the updated stable version that truthfully represent production code.

### Releasing code

This project follows the [Semantic Versioning](https://semver.org/) standard or `MAJOR.MINOR.PATCH`. The version number is automatically maintained by the [semantic-release](https://github.com/semantic-release/semantic-release) package.

Commits to the `develop` branch will be released on the `develop` channel. These will be tagged as follows `v1.2.3-develop.4`. These can be thought of as 'beta' builds. The final number `.4` in the example above will be incremented until the `develop` branch is merged into `main`.

When `develop` is merged into `main` a release will be created. These will be tagged as `v1.2.3` (Note the `main` should also be merged back into `develop` at this point so both branches contain a 'full' git tag history).

These versions can be referenced in other projects by adding `"aesop-gel": "github:aesop/aesop-gel#1.2.3",` to the `package.json` file. Generally the `main` releases should only be used. However during development and testing it may make sense to use the `develop` or 'beta' builds.

Changes to the version number are calculated automatically via the CI flow. In short commits with a `feat` type will increment the `minor` version, commits with a `fix` type will increment the `patch` version.

See [Commit messages](#commit-messages) below for more information.

### Commit messages

Commit messages follow the [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). Details about each commit message type are explained in this [article](https://medium.com/@menuka/writing-meaningful-git-commit-messages-a62756b65c81). The basis of this is built around `type(scope?): subject` and is enforced by [commitlint](https://github.com/conventional-changelog/commitlint).

#### Examples

`feat(AES-123): add XComponent section`

`fix: issue with XComponent CSS`

`style: clean up whitespace issues`

### Breaking changes

Breaking changes should generally avoid, however they can be made in two ways;

- by adding `!` after the commit type `feat(aes-123)!: change all the APIs!`
- by adding `BREAKING CHANGE` in the commit body

```
  feat(aes-123): change all the APIs!

  BREAKING CHANGE: The APIs have all been rewritten because I felt like it
```

#### Valid commit types

```
build
ci
chore
docs
feat
fix
perf
refactor
revert
style
test
```

## Testing

### Real-time testing feedback

```
npm run test-watch
```

### Component Snapshots

To run Jest snapshots on all component files with a `.spec.js` file, run:

```
npm run test
```

To update existing snapshots for components where their markup changes, run:

```
npm run test -- -u
```

### UI and Design Testing

Story Book is used to visually test and showcase components. Run the following to build the storybook files and serve them on `http://localhost:6006/?path=/story/*`:

```
npm start
```

More on testing with the [Testing Readme](documentation/TESTING.md)

## Code Integrity

### Commenting

It is encouraged to write code that is [Self-documenting](https://en.wikipedia.org/wiki/Self-documenting_code), where as through functional programming, intelligent naming, and clearly laid out code intuitively describes what the code does.

In the event of more complex code, `@TODO` statements or tslint / eslint ignores, use double slash for single line comments that relate to a block of code. Slightly different for css:

```javascript
// single line comment about the following code block
function add(a, b) {
  return a + b;
}
```

```css
/* single line comment about the following code block */
.base {
  color: pink;
}
```

double slash for single line comments to the right of a single statement:

```javascript
const add = (a, b) => a + b; // single line comment about this statement
```

```css
.base {
  /* single line comment about this statement */
  color: pink;
}
```

and JSDoc format for multi line comments:

```javascript
/**
 * multi line comment
 * about the following code block
 */
function add(a, b) {
  return a + b;
}
```

```css
/**
 * multi line comment
 * about the following code block
 */
.base {
  color: pink;
}
```

### Linting

The [.eslintrc](.eslintrc) and [.stylelintrc](.stylelintrc) files govern the code style and syntax rules for JavaScript/TypeScript and CSS files respectively.

The ESLint configuration for this project extends upon the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript).

To run the ESLint task, use:

```
npm run eslint
```

To run the StyleLint task, use:

```
npm run stylelint
```

`npm run lint` is an alias for both.

In regards to typing React components, use [React+TypeScript Cheatsheets](https://github.com/sw-yx/react-typescript-cheatsheet) as a reference. (Thank you @kevin-ho87)

### Prettier

[Prettier](https://github.com/prettier/prettier) is used to maintain code style within the application. The changes to the base Prettier config for this application are configured in the [`.prettierrc`](.prettierrc) file. Use the following task to format CSS and JavaScript files.

```
npm run format
```

### Pre Commit Hook

[Husky](https://github.com/typicode/husky) is used to automatically run `npm run format` as a pre-commit hook, ensuring changes to
source files follow the same formatting. The configurations of Husky is found in [.huskyrc](.huskyrc).

`.huskyrc`

```
{
  "hooks": {
    "pre-commit": "npm run pretty",
  }
}

```

### Issues

Code issues, update requests and development improvements that do not have a JIRA ticket should be made via an [issue submission](https://github.com/aesop/aesop-gel/issues).

Any `@TODO`s in the code base should have a corresponding issue submission.

### Contributing

#### Component directory generator

Use the `generate-component` script to generate the new files for a new component:

```bash
npm run generate-component $component-name <$component-type>
```

[Source code](https://github.com/aesop/aesop-gel/blob/develop/scripts/componentBoilerplate/create.sh)

The `$component-name` is required, where as the optional `$component-type` will generate a component as one of the following options:

- `ref` - A functional component wrapped in React’s `forwardRef` higher order function.
- `withoutChildren` - A functional component that does not accept a `children` prop.
- `withChildren` (default) - A functional component that does accept a `children` prop.

For example:

```bash
npm run generate-component Button
npm run generate-component Icon withoutChildren
npm run generate-component Map ref
```

Pull Requests for any new feature, bug fix or update need to be made with the PR template provided via a [New Pull Request](https://github.com/aesop/aesop-gel/pulls). Every PR needs to be Peer Reviewed before it can be merged.
