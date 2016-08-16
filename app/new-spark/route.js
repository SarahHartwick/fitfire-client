import Ember from 'ember';

export default Ember.Route.extend({

    model() {
      return this.get('store').findAll('tag');
  },
  tagging: {
    spark: null,
    tag: null
    // // photo: null,
    // // video: null,
  },
    actions: {
      createSpark (data, tagData) {
        let spark= this.get('store').createRecord('spark', data);
        spark.save()
        .then((sparker) => {
          tagData.forEach((tagg) => {
            this.get('store').findRecord('tag', +tagg)
              .then((tag) => {
                this.set('tagging.tag', tag);
                this.set('tagging.spark', sparker);
                let tagged = this.get('store').createRecord('tagging', this.get('tagging'));
                tagged.save();
              });
          });
          this.transitionTo('spark', spark);
        })
        .catch(() => {
          console.log('There was a problem. Please try again.');
        });
      },
    },

});
