var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes')
var Raven = require('raven-js')

var sentryKey = '494523668c2346d5b209951f6605cea5'
var sentryApp = '93585'
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
  name: 'GitHub Battle',
  branch: 'video4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,

  }
}).install()

ReactDOM.render(
  routes,
  document.getElementById('app')
);
