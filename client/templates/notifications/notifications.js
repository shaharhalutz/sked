Template.notifications.rendered = function () {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    Router.go('signIn');
  }
};
