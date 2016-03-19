
Accounts.onCreateUser(function(options, user) {
  user.emails = user.emails;
  
  var email = user.emails[0].address;
  var username = email.substring(0, email.indexOf('@'));
  
  user.profile = {name:username};
  return user;
});
