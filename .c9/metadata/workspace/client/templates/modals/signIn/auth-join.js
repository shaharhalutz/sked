{"filter":false,"title":"auth-join.js","tooltip":"/client/templates/modals/signIn/auth-join.js","ace":{"folds":[],"scrolltop":237,"scrollleft":0,"selection":{"start":{"row":41,"column":13},"end":{"row":41,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":21,"state":"start","mode":"ace/mode/javascript"}},"hash":"1f9019abe76941f0b47b42be226f5de1e4d2432c","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":53,"column":0},"action":"insert","lines":["var ERRORS_KEY = 'joinErrors';","","Template.join.onCreated(function() {","  Session.set(ERRORS_KEY, {});","});","","Template.join.helpers({","  errorMessages: function() {","    return _.values(Session.get(ERRORS_KEY));","  },","  errorClass: function(key) {","    return Session.get(ERRORS_KEY)[key] && 'error';","  }","});","","Template.join.events({","  'submit': function(event, template) {","    event.preventDefault();","    var email = template.$('[name=email]').val();","    var password = template.$('[name=password]').val();","    var confirm = template.$('[name=confirm]').val();","","    var errors = {};","","    if (! email) {","      errors.email = 'Email required';","    }","","    if (! password) {","      errors.password = 'Password required';","    }","","    if (confirm !== password) {","      errors.confirm = 'Please confirm your password';","    }","","    Session.set(ERRORS_KEY, errors);","    if (_.keys(errors).length) {","      return;","    }","","    Accounts.createUser({","      email: email,","      password: password","    }, function(error) {","      if (error) {","        return Session.set(ERRORS_KEY, {'none': error.reason});","      }","","      Router.go('home');","    });","  }","});",""],"id":1}],[{"start":{"row":49,"column":17},"end":{"row":49,"column":21},"action":"remove","lines":["home"],"id":2},{"start":{"row":49,"column":17},"end":{"row":49,"column":25},"action":"insert","lines":["trending"]}],[{"start":{"row":49,"column":6},"end":{"row":49,"column":28},"action":"remove","lines":["Router.go('trending');"],"id":3},{"start":{"row":49,"column":6},"end":{"row":49,"column":21},"action":"insert","lines":["Router.go('/');"]}]]},"timestamp":1448218679000}