import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  firstname: null,
  lastname: null,
  description: null,
  editing: false,

  isOwned: Ember.computed('profile.user.id', 'auth.credentials.id', function () {
  if (this.get('profile.user.id') == this.get('auth.credentials.id')) {
      return true;
  }
  else {
    return false;
  }
}),

actions: {

  patch () {
    this.set('profile.firstname', this.get('firstname'));
    this.set('profile.lastname', this.get('lastname'));
    this.set('profile.description', this.get('description'));
    this.set('editing', false);
    this.sendAction('patch', this.get('profile'));
  },

  submit (data) {
    this.sendAction('submit', data);
  },

  edit () {
    this.set('editing', true);
    this.set('firstname', this.get('profile.firstname'));
    this.set('lastname', this.get('profile.lastname'));
    this.set('description', this.get('profile.description'));
    this.set('profile.firstname', null);
    this.set('profile.lastname', null);
    this.set('profile.description', null);
  },
  },
});
