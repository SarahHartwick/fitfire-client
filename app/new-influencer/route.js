import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createInfluencer (data) {
      let influencer= this.get('store').createRecord('influencer', data);
      influencer.save()
      .then((influencer) => this.transitionTo('index'))
      .catch(() => {
        console.log('There was a problem. Please try again.');
      });
    },
  },

});
