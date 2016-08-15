import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  details: DS.attr('string'),
  verification: DS.attr('string'),
  criteria: DS.attr('string'),
  photo: DS.attr('string'),
  video: DS.attr('string'),
  deadline: DS.attr('date'),
  user: DS.belongsTo('user'),
  influencer: DS.belongsTo('influencer'),
});
