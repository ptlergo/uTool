[ ![codeship status for BHess2653/uTool](https://codeship.com/projects/f2196120-1bb3-0134-222f-22fb94432a98/status?branch=master)](https://codeship.com/projects/159750)

#uTool

##Install
```
npm install uTool
```
###gulp
install gulp for version bumping
```
npm install -g gulp
```

## Usage
Create a logs directory in root.
`/logs/elog.log`

### debug usage
create logs folder, and log file
`logs/elog.log`

require tool in file and use `debug()`
```javascript
const utool = require('uTool');
utool.debug('output statement', obj);
```

### version bump usage
Using `gulp` the tool can bump either major, minor, or patch.

After importing `package.json` file create a task Using `.patch()`, `.major()`, or `.minor()`.
```javascript
const package = ('./package.json')
gulp.task('patch', ()=> {
  kutil.patch(package.version);
});
```

##Run
Turn debug mode on to run tool
```
DEBUG=true node location-of-server-file
```
