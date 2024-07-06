#!/usr/bin/env bash

cd game
cargo component build --release

cd hosts/npm
npm ci
npm run generate

cd ../../../frontend
npm ci
npm run build