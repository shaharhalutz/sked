Router.route('/', {
  name: 'trending'
});

Router.route('/browse', {
  name: 'browse'
});

Router.route('/recent', {
  name: 'recent'
});

Router.route('/products/:_id', {
  name: 'products.show'
});

Router.route('/users/:_id', {
  name: 'users.show'
});

Router.route('/notifications', {
  name: 'notifications'
});

Router.route('/profile', {
  name: 'profile'
});

Router.route('/signIn', {
  name: 'signIn'
});

Router.route('/join', {
  name: 'join'
});