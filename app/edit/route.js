import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.get('store').findRecord('spark', params.spark_id);
  },
  actions: {
      save (spark) {
        spark.save()
        .then((spark) => this.transitionTo('spark', spark));
      },
      reset (spark) {
        this.transitionTo('spark', spark);
      },
  },
});
