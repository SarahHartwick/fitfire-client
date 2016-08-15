import Ember from 'ember';

export default Ember.Route.extend({
  //   activate () {
  //   Ember.$('body').addClass('bg-white');
  // },
  //
  //   deactivate () {
  //   Ember.$('body').removeClass('bg-white');
  // },
    actions: {
      createSpark (data) {
        let spark= this.get('store').createRecord('spark', data);
        spark.save()
        .then((spark) => this.transitionTo('spark', spark))
        .catch(() => {
          console.log('There was a problem. Please try again.');
        });
      },
    },

});
