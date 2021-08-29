rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:frankfang/vuexd-ui-website-1.git &&
git push -f -u origin master &&
cd -
echo https://frankfang.gitee.io/vuexd-ui-website-1/