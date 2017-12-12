#!/bin/bash

tar -czvf deploy.tar.gz ./src .babelrc .gitignore package.json webpack.prod.js

## Send with scp the new deploy to aws
