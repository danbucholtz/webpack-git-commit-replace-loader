## Webpack Git Commit Replace Loader ##

This is a single purpose loader for webpack that will replace a string/regex with the short git commit hash.

## Usage ##

Below is the loader definition.  "toReplace" is the context to replace.
```
{
    test: /VersionUtil\.js$/,
    loader: "webpack-git-commit-replace",
    query: {
        toReplace: "$GIT_COMMIT"
    }
}
```

## Contributing ##

I will accept any pull requests on this if you wish to extend it.
