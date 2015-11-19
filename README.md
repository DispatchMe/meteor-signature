Meteor Signature
==============

A signature component for meteor (also works with on cordova).

##Usage
`meteor add dispatch:signature`

```
{{> Signature id="example" label="SIGN HERE"}}
```

```
// Get the signature pad object.
Signature(<ID>);

// Create a signature pad object.
Signature(<ID>, <OPTIONS>);

// Clear the signature pad.
Signature(<ID>).clear();

// Get the current signature as a base64 image.
Signature(<ID>).getSignature();

// Reactively determine if the signature pad is empty.
Signature(<ID>).isEmtpy();

// Resize the signature pad based on the device pixel ratio.
Signature(<ID>).resize();
```
