# React Financial Charts Next

This repository is a modernized fork of [react-financial/react-financial-charts](https://github.com/react-financial/react-financial-charts), updated for 2026 tooling and React 18/19 compatibility.

## Package

- npm package: `react-financial-charts-next`
- React peer range: `^18.0.0 || ^19.0.0`
- Node requirement: `>=20`

## Install in Another Project

```bash
npm install react-financial-charts-next
```

Then import from the single package entrypoint:

```ts
import { ChartCanvas, Chart, CandlestickSeries } from "react-financial-charts-next";
```

## Local Development

```bash
npm ci
npm run build
npm run lint
npm run pack:dry-run
npm run audit:prod
```

## Release Readiness Check

```bash
npm run release:check
```

## Publishing

Manual publishing instructions are in [PUBLISHING.md](./PUBLISHING.md).
