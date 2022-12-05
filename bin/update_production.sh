#! /bin/bash

# use case
# ./bin/update_production.sh

rm -rf dist/
git push origin master
ng build --env=prod
cd dist
git init
git add .
git commit -am "initial commit"
git remote add origin git@github.com:TheRealMarcusChiu/quicktionary-frontend-build.git
git push origin master -f

ssh aws << EOF
  rm -rf quicktionary-frontend-build/
  git https://github.com/TheRealMarcusChiu/quicktionary-frontend-build.git
EOF
