if (Meteor.isClient) {
  Template.example1.events({
    'click button': function (event, template) {
      Signature('example1').clear();
    }
  });

  Template.example1.helpers({
    isEmpty: function () {
      var signature = Signature('example1');
      return signature ? signature.isEmpty() : true;
    }
  });

  Template.example1.onRendered(function () {
    // Resize this signature pad based on the device pixel ratio.
    Signature('example1').resize();
  });

  Template.example2.events({
    'click button': function (event, template) {
      Signature('example2').clear();
    }
  });

  Template.example2.helpers({
    isEmpty: function () {
      var signature = Signature('example2');
      return signature ? signature.isEmpty() : true;
    }
  });

  Template.example2.onRendered(function () {
    // Resize this signature pad based on the device pixel ratio.
    Signature('example2').resize();
  });
}
