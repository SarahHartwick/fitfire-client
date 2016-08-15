import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),

  model() {
    return this.get('store').query('profile', {user_id: this.get('credentials.id')})
    .then(function(profiles) {
      return profiles.get('firstObject');
    });
},
// activate () {
// Ember.$('body').addClass('bg-white');
// },
//
// deactivate () {
// Ember.$('body').removeClass('bg-white');
// },

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
