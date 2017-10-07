# Terrafarm Remote Config

These instructions are for setting up the directory in which this README is located.

## Move to directory
```
cd /srv/www/content-library
```

## Set Ownership
```
sudo chown -R `whoami`:`id -gn` /srv/www/content-library
```

## Install
Once source code has been pushed and forwarded to this directory from our git hook,
we need to manually run our installation. This could be automated in the future.
```
cd /srv/www/content-library/app
cp config.example.json config.json
export NODE_ENV=production
npm install
gulp build
npm run update-indices
npm run start-prod
```
