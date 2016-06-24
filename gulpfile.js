const gulp = require('gulp');
const utool = require('./src/utool');
const package = require('./package.json');


gulp.task('default', (newVersion) => {
  utool.debug('default gulp task');
});

gulp.task('patch', () => {
  // current version number
  let currV = package.version;
  // read package.json file
  console.log(currV);
  currV = utool.patch(currV);
  console.log(currV);
  let t = '1.2.1';

});

gulp.task('minor', () => {
  // current version number
  let currV = package.version;
  // read package.json file
  console.log(currV);
  currV = utool.minor(currV);
  console.log(currV);


});

gulp.task('major', () => {
  // current version number
  let currV = package.version;
  // read package.json file
  console.log(currV);
  currV = utool.major(currV);
  console.log(currV);


});
