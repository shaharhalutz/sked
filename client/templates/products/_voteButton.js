Template._voteButton.events({
  'click': function (event, template) {
    event.preventDefault();

    if (!Meteor.user()) {
      Router.go('signIn');

      return;
    }

    Meteor.call('Products.vote', this._id);
  }
});

Template._voteButton.helpers({
  hasVotedClass: function () {
    if (!Meteor.user()) {
      return;
    }
    if(_(Meteor.user().profile.votedProductIds).contains(this._id)) {
      return 'has-voted';
    }
  }
});
