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

/**
 * @function VERSION BUMP
 * @param {String} currv: current version number
 * @param {String} tag: 'major', 'minor', 'patch' keywords
 * @return {Element} element
 */
exports.bump = (currv, tag) => {
  const semver = require('semver');

  if (tag === 'major'){
    let newPatch = semver.inc(currv, tag);
    return '\nPATCH BUMP: ' + currv + ' ---> ' + newPatch + '\n';

  }else if (tag === 'minor'){
    let newPatch = semver.inc(currv, tag);
    return '\nPATCH BUMP: ' + currv + ' ---> ' + newPatch + '\n';

  }else if ( tag === 'patch'){
    let newPatch = semver.inc(currv, tag);
    return '\nPATCH BUMP: ' + currv + ' ---> ' + newPatch + '\n';

  }else {
    return 'error! wrong tag!';
  };
};
