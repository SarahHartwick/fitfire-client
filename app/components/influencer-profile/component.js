import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  store: Ember.inject.service(),
  firstname: null,
  lastname: null,
  description: null,
  editing: false,

  tagArray: [],

  tags: Ember.computed('store', function() {
    let sparks = this.get('influencer.sparks').toArray();
    console.log((sparks));
    let sparkIds = sparks.map((s) => s.get('id'));
    console.log(sparkIds);
    sparkIds.map((s) => {
      return this.get('store').query('tagging', {spark_id: s})
      .then((taggings) => {
        return taggings.toArray();
      })
        .then((taggings) => {
          taggings.map((tagging) => {
            let tagArray = this.get('tagArray');
            if (tagArray.toArray().every((tag) => tag.get('id') !== tagging.get('tag.id')) && tagArray.toArray().length < 18) {
            tagArray.push(tagging.get('tag'));
            this.set('tagArray', tagArray.toArray());
            console.log(tagArray.toArray());
          }
          });

        });

      });
  }),

  isOwned: Ember.computed('influencer.user.id', 'auth.credentials.id', function () {
  if (this.get('influencer.user.id') == this.get('auth.credentials.id')) {
      return true;
  }
  else {
    return false;
  }
}),

actions: {

  submit () {
    this.set('influencer.firstname', this.get('firstname'));
    this.set('influencer.lastname', this.get('lastname'));
    this.set('influencer.description', this.get('description'));
    this.set('editing', false);
    this.sendAction('submit', this.get('influencer'));
  },

  edit () {
    this.set('editing', true);
    this.set('firstname', this.get('influencer.firstname'));
    this.set('lastname', this.get('influencer.lastname'));
    this.set('description', this.get('influencer.description'));
    this.set('influencer.firstname', null);
    this.set('influencer.lastname', null);
    this.set('influencer.description', null);
  },
  },
});
