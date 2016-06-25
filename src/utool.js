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

/***
** version bumping
** currv parameter is the current version number
** tag is the strings ['major', 'minor', 'patch']
*/
exports.bump = (currv, tag) => {
  const semver = require('semver');

  if (tag === 'major'){
    let newPatch = semver.inc(cuurv, tag);
    return '\nPATCH BUMP: ' + tag + ' ---> ' + newPatch + '\n';

  }else if (tag === 'minor'){
    let newPatch = semver.inc(cuurv, tag);


  }else if ( tag === 'patch'){
    let newPatch = semver.inc(cuurv, tag);

  }else {
    return 'error! wrong tag!';
  }
