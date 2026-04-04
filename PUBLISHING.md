# Publishing `react-financial-charts-next`

This repo is configured for a manual-first release flow.

## 1. Prerequisites

1. Node `>=20`
2. npm account with 2FA configured as needed
3. Access to the GitHub repository: `https://github.com/e7172/new-react-financial-charts`

## 2. Install Dependencies

```bash
npm ci
```

If your local npm cache has permission issues, fix it once:

```bash
sudo chown -R $(id -u):$(id -g) ~/.npm
```

## 3. Run Release Validation

```bash
npm run release:check
```

This validates:
- build
- lint
- tarball packing
- production dependency audit

## 4. Smoke Test in a React 19 App

```bash
cd /tmp
rm -rf rfc-next-react19-smoke
npm create vite@latest rfc-next-react19-smoke -- --template react-ts
cd rfc-next-react19-smoke
npm install react@19 react-dom@19
npm install /ABSOLUTE/PATH/TO/charts/react-financial-charts-next-3.0.0.tgz
npm run build
```

## 5. Smoke Test in a React 18 App

```bash
cd /tmp
rm -rf rfc-next-react18-smoke
npm create vite@latest rfc-next-react18-smoke -- --template react-ts
cd rfc-next-react18-smoke
npm install react@18 react-dom@18
npm install /ABSOLUTE/PATH/TO/charts/react-financial-charts-next-3.0.0.tgz
npm run build
```

## 6. Publish to npm

```bash
npm login
npm publish --workspace react-financial-charts-next --access public
```

## 7. Tag and Push Release to GitHub

```bash
git add -A
git commit -m "release: react-financial-charts-next v3.0.0"
git tag v3.0.0
git push origin <your-branch>
git push origin v3.0.0
```

## 8. Verify Published Package

```bash
npm view react-financial-charts-next version peerDependencies
```

Expected peer dependencies:

- `react: ^18.0.0 || ^19.0.0`
- `react-dom: ^18.0.0 || ^19.0.0`
