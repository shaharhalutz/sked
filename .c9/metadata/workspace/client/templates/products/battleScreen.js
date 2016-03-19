{"filter":false,"title":"battleScreen.js","tooltip":"/client/templates/products/battleScreen.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":35,"column":0},"action":"insert","lines":["Template.productsShow.created = function () {","  this.autorun(function () {","    this.subscription = Meteor.subscribe('product', Router.current().params._id);","  }.bind(this));","};","","Template.productsShow.rendered = function () {","  this.autorun(function () {","    if (!this.subscription.ready()) {","      IonLoading.show();","    } else {","      IonLoading.hide();","    }","  }.bind(this));","};","","Template.productsShow.helpers({","  product: function () {","    return Products.findOne({_id: Router.current().params._id});","  },","","  comments: function () {","    return Comments.find({productId: Router.current().params._id}, {sort: {createdAt: -1}});","  }","});","","Template.productsShow.events({","  'click [data-action=new-comment]': function (event, template) {","    if (Meteor.user()) {","      IonModal.open('newComment', {productId: this._id});","    } else {","      Router.go('signIn');","    }","  }","});",""],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":35,"column":0},"end":{"row":35,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":17,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1448290711815,"hash":"70174418c2309bd926433a6564156af2cb80be53"}