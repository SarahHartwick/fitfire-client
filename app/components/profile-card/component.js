import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(data) {
      this.sendAction('submit', data);
    },
  },
});
