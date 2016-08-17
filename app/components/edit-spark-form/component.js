import Ember from 'ember';

export default Ember.Component.extend({
  date: null,
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
  actions: {
    save() {
      let data = this.get('spark');
      data.deadline = new Date(this.get('date'));
      this.sendAction('save', data);
  },
    reset() {
      this.sendAction('reset', this.get('spark'));
  },
},
});
