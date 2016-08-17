import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.get('store').query('tagging', {tag_id: params.tag_id})
      .then((taggings) => {
        return taggings.toArray().map((t) => {return t.get('spark')});
      });
  },
});
