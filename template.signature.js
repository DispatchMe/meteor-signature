Template.Signature.helpers({
  isEmpty: function () {
    var signature = Signature(this.id);
    return signature ? signature.isEmpty() : true;
  }
});

Template.Signature.onRendered(function () {
  var id = this.data.id;
  var options = _.extend({}, this.data, { element: document.getElementById(id) });

  this.signature = Signature(id, options);
});
