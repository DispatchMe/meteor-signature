Package.describe({
  name: 'dispatch:signature',
  summary: 'A signature component Meteor package for browser and Cordova.',
  version: '2.0.0',
  git: 'https://github.com/DispatchMe/meteor-signature'
});

Npm.depends({
  'signature_pad': '1.5.3'
});

Package.onUse(function (api) {
  api.versionsFrom('1.3');

  api.use([
    'ecmascript',
    'reactive-var',
    'templating',
    'underscore'
  ], 'web');

  api.addFiles([
    // package
    'signature.js',
    'template.signature.css',
    'template.signature.html',
    'template.signature.js'
  ], 'web');

  api.export('Signature');
});
