import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  details: DS.attr('string'),
  verification: DS.attr('string'),
  criteria: DS.attr('string'),
  photo: DS.attr('string'),
  video: DS.attr('string'),
  deadline: DS.attr('date'),
  category: DS.attr('string'),
  taggings: DS.hasMany('tagging'),
  user: DS.belongsTo('user'),
  dateFormat: Ember.computed('deadline', function(){
      return this.get('deadline').toString().split(' ').splice(0,4).join(' '); // returns 2 for the current month (February)
  }),
  influencer: DS.belongsTo('influencer'),
});
