exports.debug = (title, obj) => {
  const colors = require('colors');
  const fs = require('fs');
  const seperator = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
  const time = new Date();
  colors.setTheme({
    create: 'green',
    read: 'yellow',
    update: 'magenta',
    delete: 'red',
    error: 'red'
  });
  const output = seperator + title + '\n' + time + seperator + JSON.stringify(obj);

  if (process.env.DEBUG) {
    fs.appendFile('logs/eLog.log', output, 'utf8', (err) =>{
      if (err) throw err;
    });
    console.log(output);
  }
};

// PATCH version bumping
exports.bump = (currv, tag) => {
  const semver = require('semver');

  let newPatch = semver.inc(cuurv, tag);

  return '\nPATCH BUMP: ' + tag + ' ---> ' + newPatch + '\n';

};

// MINOR version bumping
exports.minor = (tag) => {
  const semver = require('semver');

  const newMinor = semver.inc(currv, tag);

  return '\MINOR BUMP: ' + tag + ' ---> ' + newMinor + '\n';

};

// MINOR version bumping
exports.major = (tag) => {
  const semver = require('semver');
  // only accept tag = 'major'
  const newMajor = semver.inc(currv, tag);

  return '\nMAJOR BUMP: ' + tag + ' ---> ' + newMajor + '\n';

};
