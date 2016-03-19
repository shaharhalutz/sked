{"filter":false,"title":"spellsShow.js","tooltip":"/client/templates/recent/spellsShow.js","undoManager":{"mark":29,"position":29,"stack":[[{"start":{"row":0,"column":0},"end":{"row":52,"column":0},"action":"insert","lines":["Template.productsShow.created = function () {","  this.autorun(function () {","    this.subscription = Meteor.subscribe('product', Router.current().params._id);","  }.bind(this));","};","","Template.productsShow.rendered = function () {","  this.autorun(function () {","    if (!this.subscription.ready()) {","      IonLoading.show();","    } else {","      IonLoading.hide();","    }","  }.bind(this));","};","","Template.productsShow.helpers({","  product: function () {","    return Products.findOne({_id: Router.current().params._id});","  },","","  comments: function () {","    return Comments.find({productId: Router.current().params._id}, {sort: {createdAt: -1}});","  }","});","","Template.productsShow.events({","  'click [data-action=new-comment]': function (event, template) {","    if (Meteor.user()) {","      IonModal.open('newComment', {productId: this._id});","    } else {","      Router.go('signIn');","    }","  },","  'click .product-title': function (event, template) {","      // JOIN BATTLE:","      // create userState for the user entering the battle:  ","","      // first, check that doesn not  already exist:","      if (UserStates.find({productId: this._id,userId:Meteor.userId()}).count() === 0){","          ","        UserStates.insert({","          userId: Meteor.userId(),","          productId: this._id","        });","      }","    ","      Router.go('battleView', {_id: this._id});","      //IonModal.open('battleView', {_id: this._id});","","  }","});",""],"id":1}],[{"start":{"row":18,"column":11},"end":{"row":18,"column":19},"action":"remove","lines":["Products"],"id":2},{"start":{"row":18,"column":11},"end":{"row":18,"column":12},"action":"insert","lines":["S"]}],[{"start":{"row":18,"column":12},"end":{"row":18,"column":13},"action":"insert","lines":["p"],"id":3}],[{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"insert","lines":["e"],"id":4}],[{"start":{"row":18,"column":14},"end":{"row":18,"column":15},"action":"insert","lines":["l"],"id":5}],[{"start":{"row":18,"column":15},"end":{"row":18,"column":16},"action":"insert","lines":["l"],"id":6}],[{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"insert","lines":["s"],"id":7}],[{"start":{"row":17,"column":2},"end":{"row":17,"column":9},"action":"remove","lines":["product"],"id":8},{"start":{"row":17,"column":2},"end":{"row":17,"column":3},"action":"insert","lines":["s"]}],[{"start":{"row":17,"column":3},"end":{"row":17,"column":4},"action":"insert","lines":["p"],"id":9}],[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["e"],"id":10}],[{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["l"],"id":11}],[{"start":{"row":17,"column":6},"end":{"row":17,"column":7},"action":"insert","lines":["l"],"id":12}],[{"start":{"row":19,"column":3},"end":{"row":23,"column":3},"action":"remove","lines":[",","","  comments: function () {","    return Comments.find({productId: Router.current().params._id}, {sort: {createdAt: -1}});","  }"],"id":13}],[{"start":{"row":29,"column":3},"end":{"row":46,"column":3},"action":"remove","lines":[",","  'click .product-title': function (event, template) {","      // JOIN BATTLE:","      // create userState for the user entering the battle:  ","","      // first, check that doesn not  already exist:","      if (UserStates.find({productId: this._id,userId:Meteor.userId()}).count() === 0){","          ","        UserStates.insert({","          userId: Meteor.userId(),","          productId: this._id","        });","      }","    ","      Router.go('battleView', {_id: this._id});","      //IonModal.open('battleView', {_id: this._id});","","  }"],"id":14}],[{"start":{"row":2,"column":42},"end":{"row":2,"column":49},"action":"remove","lines":["product"],"id":15},{"start":{"row":2,"column":42},"end":{"row":2,"column":43},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":43},"end":{"row":2,"column":44},"action":"insert","lines":["p"],"id":16}],[{"start":{"row":2,"column":44},"end":{"row":2,"column":45},"action":"insert","lines":["e"],"id":17}],[{"start":{"row":2,"column":45},"end":{"row":2,"column":46},"action":"insert","lines":["l"],"id":18}],[{"start":{"row":2,"column":46},"end":{"row":2,"column":47},"action":"insert","lines":["l"],"id":19}],[{"start":{"row":2,"column":47},"end":{"row":2,"column":48},"action":"insert","lines":["s"],"id":20}],[{"start":{"row":2,"column":47},"end":{"row":2,"column":48},"action":"remove","lines":["s"],"id":21}],[{"start":{"row":0,"column":9},"end":{"row":0,"column":17},"action":"remove","lines":["products"],"id":22},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["s"]}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["p"],"id":23}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["e"],"id":24}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["l"],"id":25}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["l"],"id":26}],[{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["s"],"id":27}],[{"start":{"row":6,"column":9},"end":{"row":6,"column":21},"action":"remove","lines":["productsShow"],"id":28},{"start":{"row":6,"column":9},"end":{"row":6,"column":19},"action":"insert","lines":["spellsShow"]}],[{"start":{"row":16,"column":9},"end":{"row":16,"column":21},"action":"remove","lines":["productsShow"],"id":29},{"start":{"row":16,"column":9},"end":{"row":16,"column":19},"action":"insert","lines":["spellsShow"]}],[{"start":{"row":22,"column":9},"end":{"row":22,"column":21},"action":"remove","lines":["productsShow"],"id":30},{"start":{"row":22,"column":9},"end":{"row":22,"column":19},"action":"insert","lines":["spellsShow"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":22,"column":19},"end":{"row":22,"column":19},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1449689367000,"hash":"47dd901ea110d97fc7966d1a81c096aad9946e3e"}