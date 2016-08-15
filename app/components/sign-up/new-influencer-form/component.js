import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  credentials: storageFor('auth'),

  influencer: {
    firstname: null,
    lastname: null,
    description: null,
    facebook: null,
    twitter: null,
    instagram: null,
    snapchat: null,
    profession: null,
  },

  actions: {

    submit () {
      let data = this.get('influencer');

      this.sendAction('submit', data);

      this.set('influencer.firstname', null);
      this.set('influencer.lastname', null);
      this.set('influencer.description', null);
      this.set('influencer.facebook', null);
      this.set('influencer.twitter', null);
      this.set('influencer.instagram', null);
      this.set('influencer.snapchat', null);
      this.set('influencer.profession', null);
    },

    reset () {
      this.set('influencer', {});
    },
  },
});
