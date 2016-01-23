Package.describe({
  name: 'dispatch:signature',
  summary: 'A signature component for meteor (also works with on cordova).',
  version: '1.0.2-rc.1',
  git: 'https://github.com/DispatchMe/meteor-signatures'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');

  api.use([
    // core
    'ecmascript',
    'reactive-var',
    'templating',
    'underscore'
  ], 'web');

  api.addFiles([
    // library
    'vendor/signature_pad.min.js',

    // package
    'signature.js',
    'template.signature.css',
    'template.signature.html',
    'template.signature.js'
  ], 'web');

  api.export('Signature');
});
