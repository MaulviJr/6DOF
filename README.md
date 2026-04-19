# Eid Mubarak Cube

An interactive Three.js celebration scene built with React and Vite.

The project renders a 3D gift box that opens as you scroll. When the lid opens enough, a golden "Eid Mubarak" text rises out of the box. The styled version also includes simple fireworks particles for a festive effect.

## Tech Stack

- React 19
- Vite 7
- Three.js
- Tailwind CSS (available in project dependencies)

## Features

- Scroll-driven box opening animation
- Hinged lid animation (top face rotates from a pivot)
- Animated 3D text reveal
- Orbit controls for camera movement (zoom disabled)
- Responsive canvas resize handling
- Scene cleanup on unmount to avoid memory leaks

## Controls

- Scroll down: opens the lid
- Scroll up: closes the lid
- Drag mouse: orbit around the scene

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- npm run dev: starts local Vite dev server
- npm run build: creates production bundle in dist
- npm run lint: runs ESLint
- npm run preview: serves the built app locally
- npm run deploy: publishes dist to GitHub Pages

## Project Structure

```text
src/
	App.jsx
	components/
		ThreeScene.jsx
		ThreeSceneold.jsx
```

## Scene Variants

The main app currently renders ThreeScene by default.

- ThreeScene.jsx: stylized version with festive fireworks effect
- ThreeSceneold.jsx: earlier version without fireworks logic

If you want to switch variants quickly, update the rendered component in src/App.jsx.

## Deployment

This project is configured for GitHub Pages using gh-pages.

```bash
npm run deploy
```

The deployment command runs a production build first and then publishes dist.

## Notes

- Font is loaded from the Three.js examples CDN at runtime.
- A tall page section is intentionally used so scroll progress can drive the animation.
