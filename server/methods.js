Meteor.methods({
  'Products.vote': function (_id) {
    if (!Meteor.user()) {
      return;
    }

    if (_(Meteor.user().profile.votedProductIds).include(_id)) {
      
      // remove:
      Products.update({_id: _id}, {$inc: {numberOfVotes: -1}, $pull: {voterIds: this.userId}});
      Meteor.users.update({_id: this.userId}, {$pull: {'profile.votedProductIds': _id}});
      return;
    }
    
    // add:
    Products.update({_id: _id}, {$inc: {numberOfVotes: 1}, $addToSet: {voterIds: this.userId}});
    Meteor.users.update({_id: this.userId}, {$addToSet: {'profile.votedProductIds': _id}});
  }
});
