# Contributing

We welcome all contributions!

Before creating a PR, please raise an issue to discuss it.

## Commits

We use [convention commits](https://www.conventionalcommits.org) style of commit messages.

## Style

The codebase is written in TypeScript with strict type-checking. Linting and build checks are run as part of the release validation flow.

You can run `npm run lint` to show any style issues separate from the build.

### Guidelines

* Use Promises instead callbacks
* Files should be 100 lines or less

## Tests

This fork currently does not ship an automated test suite. Validate changes with:

```bash
npm run release:check
```
