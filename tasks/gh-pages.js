var getDeployMessage = function() {
  var message = '\n\n';

  if (process.env.TRAVIS !== 'true') {
    message += 'Missing environment variables for Travis CI';

    return message;
  }

  message += 'Branch:       ' + process.env.TRAVIS_BRANCH + '\n';
  message += 'SHA:          ' + process.env.TRAVIS_COMMIT + '\n';
  message += 'Range SHA:    ' + process.env.TRAVIS_COMMIT_RANGE + '\n';
  message += 'Build ID:     ' + process.env.TRAVIS_BUILD_ID  + '\n';
  message += 'Build number: ' + process.env.TRAVIS_BUILD_NUMBER + '\n';

  return message;
};

module.exports = {
  options: {
    user: {
      name: 'Todd Burry'
    , email: 'todd@vanillaforums.com'
    }
  , base: 'dist'
  , repo: 'https://' + process.env.GH_OAUTH_TOKEN + '@github.com/' + process.env.GH_OWNER + '/' + process.env.GH_PROJECT_NAME + '.git'
  , silent: true
  , message: 'Publish gh-pages (auto)' + getDeployMessage()
  }
, src: '**/*'
};