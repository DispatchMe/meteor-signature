Package.describe({
  name: 'dispatch:signature',
  summary: 'A signature component for meteor (also works with on cordova).',
  version: '1.0.0',
  git: 'https://github.com/DispatchMe/meteor-signatures'
});

Npm.depends({
  'signature_pad': '1.5.1'
});

Package.onUse(function (api) {
  api.use([
    // core
    'ecmascript',
    'reactive-var',
    'templating',
    'underscore'
  ], 'web');

  api.addFiles([
    // library
    '.npm/package/node_modules/signature_pad/signature_pad.min.js',

    // package
    'signature.js',
    'template.signature.css',
    'template.signature.html',
    'template.signature.js'
  ], 'web');

  api.export('Signature');
});
