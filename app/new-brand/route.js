import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createSponsor (data) {
      let sponsor= this.get('store').createRecord('sponsor', data);
      sponsor.save()
      .then((sponsor) => this.transitionTo('index'))
      .catch(() => {
        console.log('There was a problem. Please try again.');
      });
    },
  },

});
