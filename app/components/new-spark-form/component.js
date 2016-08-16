import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  credentials: storageFor('auth'),
  store: Ember.inject.service(),
  date: null,

  spark: {
    name: null,
    details: null,
    verification: null,
    criteria: null,
    category: null,
    photo: null,
    // // video: null,
  },

  tagArray: null,

  verifiers: [{
    'id': '1',
    'text': 'Submit Photo',
    'description': '  accept photo submissions to verify spark completion'
    },
    {
      'id': '2',
      'text': 'Submit Video',
      'description': '  accept video submissions to verify spark completion'
    },
    {
      'id': '3',
      'text': 'FitBit',
      'description': '  accept FitBit data submissions to verify spark completion'
    },
    {
      'id': '4',
      'text': 'MyFitnessPal',
      'description': '  accept MyFitnessPal data submissions to verify spark completion'
      },
  ],

  categories: [{
    'id': '1',
    'text': 'Fitness',
    'description': '  a physically-oriented challenge'
    },
    {
      'id': '2',
      'text': 'Wellness',
      'description': '  a challenge related to overall health'
    },
    {
      'id': '3',
      'text': 'Nutrition',
      'description': '  a challenge related to food, diet or cooking'
    },
    {
      'id': '4',
      'text': 'Spirituality',
      'description': '  a challenge related to emotional & psychological wellbeing'
      },
    {
      'id': '5',
      'text': 'Community',
      'description': '  a community or civic related challenge'
      },
  ],

  tags: Ember.computed('model', function() {
     // convert model data into array of objects.
     let allItems = this.get('model').map((item) => {
       return item;
     });
     return allItems;
   }),

  actions: {

    submit () {
      let data = this.get('spark');
      data.deadline = new Date(this.get('date'));
      console.log(this.get('tagArray'));
      this.sendAction('submit', data, this.get('tagArray'));

      this.set('spark.name', null);
      this.set('spark.details', null);
      this.set('spark.verification', null);
      this.set('spark.criteria', null);
      this.set('spark.deadline', null);
      this.set('spark.category', null);
      this.set('spark.photo', null);
    },

    reset () {
      this.set('spark', {});
      console.log(this.get('store').findAll('tag'));
    },
  },
  // didInsertElement: function() {
  //        Ember.run.scheduleOnce('afterRender', this, function() {
  //          return this.get('store').findAll('tag')
  //          .then((taggers) => taggers.toArray().forEach((tagg) => this.get('tagArray').push(tagg)));
  //   });
  // },
});
