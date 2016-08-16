import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
      save (influencer) {
        influencer.save();
      },
  },
});
