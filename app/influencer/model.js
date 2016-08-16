import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  description: DS.attr('string'),
  facebook: DS.attr('string'),
  twitter: DS.attr('string'),
  instagram: DS.attr('string'),
  snapchat: DS.attr('string'),
  profession: DS.attr('string'),
  tags: DS.attr('string'),
  photo: DS.attr('string'),
  certification: DS.attr('string'),
  user: DS.belongsTo('user'),
  sparks: DS.hasMany('spark'),
});
