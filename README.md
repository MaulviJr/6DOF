# 6DOF Viewer

An interactive React + Three.js app that displays six degrees of freedom (6DOF) behavior in a 3D scene.

## What This App Shows

The project visualizes object/camera movement across all six degrees of freedom:

- Translation on X axis (left/right)
- Translation on Y axis (up/down)
- Translation on Z axis (forward/backward)
- Rotation around X axis (roll)
- Rotation around Y axis (pitch)
- Rotation around Z axis (yaw)

## Tech Stack

- React 19
- Vite 7
- Three.js
- Tailwind CSS (available in dependencies)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build production bundle

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the local Vite development server
- `npm run build` builds the app into `dist`
- `npm run lint` runs ESLint
- `npm run preview` previews the built app locally
- `npm run deploy` publishes `dist` to GitHub Pages

## GitHub Pages Deployment

This project is configured for deployment to:

`https://MaulviJr.github.io/6DOF`

### First-time setup

1. Push this project to the `6DOF` GitHub repository.
2. Ensure the default branch is `main` (or update your Pages source accordingly).
3. In GitHub repository settings, set GitHub Pages source to `gh-pages` branch after first deploy.

### Deploy command

```bash
npm run deploy
```

This runs `predeploy` (`npm run build`) and then publishes the `dist` folder to the `gh-pages` branch using `gh-pages`.

## Notes

- Vite `base` is set to `/6DOF/` for GitHub Pages compatibility.
- `homepage` in `package.json` is set to `https://MaulviJr.github.io/6DOF`.
