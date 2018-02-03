# @dwp/commitlint-config-base

Shareable [`commitlint`](https://marionebl.github.io/commitlint/#) config enforcing our commit  convention.  Originally based upon the  [AngularJS Commit Message Guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit) and derived from [@commitlint/config-angular](https://www.npmjs.com/package/@commitlint/config-angular).
Use with [@commitlint/cli](https://npmjs.com/package/@commitlint/cli) and [@commitlint/prompt-cli](https://npmjs.com/package/@commitlint/prompt-cli).

## Getting started

```sh
npm install --save-dev @dwp/commitlint-config-base @commitlint/cli
```

## Rules

Add a `commitlint.config.js` file that looks something like:

```js
    module.exports = require( '@dwp/commitlint-config-base' );
```

You can add your own rules to enhance this, but in doing so please ensure you don't weaken the baseline ruleset.

## Linting

Add `commitlint` to your test suite like this, or see our [package.json](package.json) for an example of how we do it:

```json
    "test": "commitlint --from=develop --to=HEAD"
```
