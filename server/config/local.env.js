'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://127.0.0.1:9000',
  SESSION_SECRET:   'reloja-secret',

  FACEBOOK_ID:      '1856277721288176',
  FACEBOOK_SECRET:  'd9ebf60837e4d18fd3f77871c29d159a',

  TWITTER_ID:       '2lTlo6Rpuc3q3sUZbbg3At3kc',
  TWITTER_SECRET:   'zfPOdX3rU5O55YRlHbinv09c9z2tSwHIPDWyC2Uzmlht5P7fds',

  GOOGLE_ID:        '727440433066-0qhr8dn69mduludequ8mhim55uan8v7s.apps.googleusercontent.com',
  GOOGLE_SECRET:    's9xVx8HYcb6gjtJ3YdsSsFVp',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
