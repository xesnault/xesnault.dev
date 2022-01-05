#!/bin/sh

rm -rf public docs
npm run build
mv public docs
