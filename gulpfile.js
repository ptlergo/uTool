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
  fs.readFile('package.json', (err, data) => {
    console.log(JSON.parse(data));
  });

});
