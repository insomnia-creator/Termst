yarn install
yarn run build
cp src/manifest.json dist/
mv dist extension
yarn run pack
echo 'Your extension is ready to be installed in Google Chrome! ✨'