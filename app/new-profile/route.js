import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createProfile (data) {
      let profile= this.get('store').createRecord('profile', data);
      profile.save()
      .then((profile) => this.transitionTo('profile', profile))
      .catch(() => {
        console.log('There was a problem. Please try again.');
      });
    },
  },

});
