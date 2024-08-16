## Deploy 'client/build' subdirectoy to branch 'gh-pages'

cd client && npm run build
cd ..
git subtree push --prefix client/build origin gh-pages