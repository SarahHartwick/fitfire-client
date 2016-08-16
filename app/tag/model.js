import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  taggings: DS.hasMany('tagging'),
});
