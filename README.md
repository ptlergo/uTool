[ ![codeship status for BHess2653/uTool](https://codeship.com/projects/f2196120-1bb3-0134-222f-22fb94432a98/status?branch=master)](https://codeship.com/projects/159750)

#uTool

##Install
```
npm install uTool
```

##Usage
create logs folder, and log file
`logs/elog.log`

require tool in file and use `debug()`
```javascript
const utool = require('uTool');
utool.debug('output statement', obj);
```

##Run
Turn debug mode on to run tool
```
DEBUG=true node location-of-server-file
```
