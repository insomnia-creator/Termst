# remove previous builds
rm -rf extension
# scripts
yarn install
yarn run build
yarn run theme-compile
cp src/manifest.json dist/
cp -r src/fonts dist/
cp src/loadscript.js dist/js
mv dist extension
yarn run pack
echo 'Your extension is ready to be installed in Google Chrome! ✨'