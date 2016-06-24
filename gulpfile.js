const gulp = require('gulp');
const utool = require('./src/utool');

gulp.task('default', () => {
  utool.debug('default gulp task');
});

gulp.task('patch', () => {
  console.log('PATCH gulp task');
  utool.debug('ddddddddd');
});
