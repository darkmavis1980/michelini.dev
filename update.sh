#!/bin/bash

echo "Fetching changes"
git stash
git fetch
git pull
echo "Installing dependencies"
npm install
echo "Creating build"
npm run build
echo "All done!"
