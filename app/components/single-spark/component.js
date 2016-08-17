import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isOwned: Ember.computed('spark.user.id', 'auth.credentials.id', function () {
  if (this.get('spark.user.id') == this.get('auth.credentials.id')) {
      return true;
  }
  else {
    return false;
  }
}),
actions : {
  delete() {
    this.sendAction('delete', this.get('spark'), this.get('spark.influencer'));
  },
  edit() {
    this.sendAction('edit', this.get('spark'));
  },
},

});
