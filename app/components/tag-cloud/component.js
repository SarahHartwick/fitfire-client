import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tags: Ember.computed ('store', function() {
    return this.get('store').query('tag', {limit:20});
  }),
});
