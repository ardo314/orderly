# Orderly

A tile-swapping puzzle game demonstrating the [WebAssembly Component Model](https://component-model.bytecodealliance.org/). The game logic is implemented in Rust and compiled to a WebAssembly component, which is then consumed by a React + TypeScript frontend built with Vite.

## Game Description

The goal is to arrange colored tiles in the correct order by swapping their positions. The game tracks your number of tries and shows how many pieces are in the correct position.

## Project Structure

```
orderly/
├── game/              # Rust-based WebAssembly component
│   ├── src/           # Game logic implementation
│   ├── wit/           # WebAssembly Interface Type definitions
│   └── hosts/npm/     # NPM package wrapper for the WASM component
├── frontend/          # React + TypeScript + Vite web application
│   ├── src/           # Frontend source code
│   └── public/        # Static assets
└── scripts/           # Build scripts
```

## Technologies

- **Backend (Game Logic)**: Rust, WebAssembly Component Model, WIT (WebAssembly Interface Types)
- **Frontend**: React, TypeScript, Vite
- **Build Tools**: Cargo Component, NPM

## Component Interface

The game exposes the following WIT interface:

```wit
resource game {
    constructor(piece-count: u32);
    pieces: func() -> list<u32>;
    is-over: func() -> bool;
    tries: func() -> u32;
    correct-pieces-count: func() -> u32;
    play: func(a: u32, b: u32);
}

shuffled-list: func(length: u32) -> list<u32>;
```

## Building the Project

### Prerequisites

- Rust toolchain with `cargo-component` installed
- Node.js and npm

### Build Steps

**Windows:**
```bash
.\scripts\build.bat
```

**Linux/macOS:**
```bash
./scripts/build.sh
```

This will:
1. Build the Rust WebAssembly component
2. Generate NPM bindings for the component
3. Install frontend dependencies
4. Build the frontend application

## Running the Development Server

```bash
cd frontend
npm run dev
```

Then open your browser to the URL shown in the terminal (typically `http://localhost:5173`).

## How to Play

1. Open https://ardo314.github.io/orderly/
2. Click on a tile to select it
3. Click on another tile to swap positions
4. Continue swapping until all tiles are in the correct order
5. The game tracks your tries and shows progress