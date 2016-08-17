import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete(spark, influencer) {
      spark.destroyRecord();
      this.transitionTo('influencer', influencer);
    },
    edit(spark) {
      this.transitionTo('edit', spark);
    },
  },
});
