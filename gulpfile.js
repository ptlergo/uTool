const gulp = require('gulp');
const utool = require('./src/utool');
const fs = require('fs');

gulp.task('default', () => {
  utool.debug('default gulp task');
});

gulp.task('patch', () => {

  // // // grab package.json file
  // const pack = gulp.src('./package.json');
  // const tag = '1.0.1';
  // const newtag = utool.patch(tag);
  // // const parsed = JSON.parse(pack);
  // console.log(pack);

  // read package.json file
  fs.readFile('package.json', (err, data) => {
    // parse json data
    jPackage = JSON.parse(data);
    // save 'version' key value
    currV = jPackage.version;
    console.log(currV);

  });


});
