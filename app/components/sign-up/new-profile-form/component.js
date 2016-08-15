import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  credentials: storageFor('auth'),

  profile: {
    firstname: null,
    lastname: null,
    description: null,
  },

  actions: {

    submit () {
      let data = this.get('profile');

      this.sendAction('submit', data);

      this.set('profile.firstname', null);
      this.set('profile.lastname', null);
      this.set('profile.description', null);
    },

    reset () {
      this.set('profile', {});
    },
  },
});
