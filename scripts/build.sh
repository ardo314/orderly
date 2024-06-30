#!/usr/bin/env bash

cd game
cargo component build --release

cd hosts/npm
npm run generate

cd ../../../frontend
npm run build