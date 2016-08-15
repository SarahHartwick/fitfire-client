import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  description: DS.attr('string'),
  tags: DS.attr('string'),
  photo: DS.attr('string'),
  user: DS.belongsTo('user'),
});
