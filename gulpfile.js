const gulp = require('gulp');
const utool = require('./src/utool');

gulp.task('default', () => {
  utool.debug('default gulp task');
});

gulp.task('patch', () => {

  // // grab package.json file
  // gulp.src('./package.json');
  utool.patch('1.1.1');

});
