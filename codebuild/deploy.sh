#!/bin/bash

cd ~/hpysa ## Assume your code is in ~/hpysa

git status
git pull 
git add . 
git commit -m "Deploy --- `date +%m`/`date +%d`/`date +%Y` `date +%r`"
git push
