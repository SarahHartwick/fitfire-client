import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  credentials: storageFor('auth'),

  sponsor: {
    name: null,
    description: null,
    website: null,
  },

  actions: {

    submit () {
      let data = this.get('sponsor');

      this.sendAction('submit', data);

      this.set('sponsor.name', null);

      this.set('sponsor.description', null);

      this.set('sponsor.website', null);
    },

    reset () {
      this.set('sponsor', {});
    },
  },
});
