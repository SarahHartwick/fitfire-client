import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  credentials: storageFor('auth'),
  date: null,

  spark: {
    name: null,
    details: null,
    verification: null,
    criteria: null,
    // // photo: null,
    // // video: null,
  },

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

  actions: {

    submit () {
      let data = this.get('spark');
      data.deadline = new Date(this.get('date'));

      this.sendAction('submit', data);

      this.set('spark.name', null);
      this.set('spark.details', null);
      this.set('spark.verification', null);
      this.set('spark.criteria', null);
      this.set('spark.deadline', null);
    },

    reset () {
      this.set('spark', {});
    },
  },
  // didInsertElement: function() {
  //        Ember.run.scheduleOnce('afterRender', this, function() {
  //        this.$('#datetimepicker').datetimepicker({viewMode:'years'});
  //   });
  // },
});
