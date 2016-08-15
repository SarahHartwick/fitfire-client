import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  website: DS.attr('string'),
  industry: DS.attr('string'),
  photo: DS.attr('string'),
  tags: DS.attr('string'),
  user: DS.belongsTo('user'),
});
