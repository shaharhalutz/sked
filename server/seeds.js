// INFO: to delete user : terminal --> meteor mongo ===> db.users.remove({_id:'BHziF85WeJQserCZj'});
// INFO: to remove DB from console type: Meteor.call('removeAllUserData')

// TBD: implement select spell , instead of text input in modal of + button
// TBD: show user cell , with user attributes as progressbars 
// TBD: implement spells collection which affect MP and HP of users

Meteor.startup(function() {
  
  
   return Meteor.methods({

      removeAllUserData: function() {

        Products.remove({});
        Comments.remove({});
         
        // go over all users and remove votedProductIds :
        var users = Meteor.users.find({});
        _(users).each(function (user) {
          if(user && user.profile)
          user.profile.votedProductIds = [];
        });
         
      }

    });
  
  /*
  var users = [
    {
      emails: [{
        address: 'nick@exygen.io',
        verified: false,
        primary: true
      }],
      profile: {
        name: 'nickw'
      },
      services: {
        'meteor-developer': {
          id: '2jefqB8rsQ2q3TuRW',
          username: 'nickw',
          emails: [{
            address: 'nick@exygen.io',
            verified: false,
            primary: true
          }]
        }
      }
    }
  ];

  var products = [
    {
      url: 'https://respond.ly/',
      name: 'Respondly',
      tagline: 'Simple Team Inbox for Email and Twitter'
    },
    {
      url: 'http://versoapp.com/',
      name: 'Verso',
      tagline: 'Allows schools to analyze student progress and measure teacher performance.'
    },
    {
      url: 'https://beta.workpop.com/',
      name: 'Workpop',
      tagline: 'Job marketplace that modernizes the process of hiring for hourly workers.'
    },
    {
      url: 'http://www.classcraft.com/',
      name: 'Classcraft',
      tagline: 'Educational role-playing game that teachers and students play together in the classroom.'
    },
    {
      url: 'http://blonk.co/',
      name: 'Blonk',
      tagline: 'Tinder for job hunting.'
    },
    {
      url: 'https://lookback.io/',
      name: 'LookBack',
      tagline: 'Makes recording mobile user experiences and bugs a breeze.'
    },
    {
      url: 'https://www.cladwell.com/',
      name: 'Cladwell',
      tagline: 'A personal roadmap to dress better. Cladwell makes clothing simple.'
    },
    {
      url: 'https://usercycle.com/',
      name: 'USERcycle',
      tagline: 'Analytics That Grow Your Business'
    },
    {
      url: 'http://assistant.io/',
      name: 'Assistant.io',
      tagline: 'Schedule group meetings painlessly'
    },
    {
      url: 'https://getliquid.io/',
      name: 'Liquid',
      tagline: 'Easily Collect, Analyze & Share Data'
    },
    {
      url: 'http://beats.meteor.com/',
      name: 'Meteor Beats',
      tagline: 'A collaborative and fully reactive drum machine.'
    },
    {
      url: 'https://mixmax.com/',
      name: 'Mixmax',
      tagline: 'Mixmax gives your Gmail superpowers. Schedule meetings 10x faster.'
    }
  ];

  if (Meteor.users.find({}).count() === 0) {
    _(users).each(function (user) {
      Meteor.users.insert(user);
    });
  }

  var author = Meteor.users.find().fetch()[0];
  if (Products.find({}).count() === 0) {
    _(products).each(function (product) {
      Products.insert({
        userId: author._id,
        url: product.url,
        name: product.name,
        tagline: product.tagline,
        createdAt: new Date()
      });
    });
  }
  */
});
