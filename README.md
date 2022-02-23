## Eslint-Plugin-Krisp

Recommended EsLint plugin by Krishnateja Anumolu

## Using this module

1. Remove all eslint related packages including eslint from your app's package.json. Run `npm install` to remove them from package-lock.json as well.
1. Run `npm install --save-dev eslint-plugin-krisp` to install this package.
1. Update your `.eslintrc.json` to include `"plugin:krisp/recommended"` in the `"extends"` array. You can remove everything else from the file.

```json
// .eslintrc.json
{
  "extends": "plugin:krisp/recommended"
}
```
