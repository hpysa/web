#!/bin/bash

cd ~/web ## Assume your code is in ~/web

git status
git pull 
git add . 
git commit -m "Deploy --- `date +%m`/`date +%d`/`date +%Y` `date +%r`"
git push
