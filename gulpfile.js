const gulp = require('gulp');
const utool = require('./src/utool');
const package = require('./package.json');

gulp.task('default', () => {
  utool.debug('default gulp task');
});

gulp.task('patch', () => {

  // read package.json file
  const currV = package.version;
  console.log(currV);
  const newtag = utool.patch(tag);



});
