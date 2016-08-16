import DS from 'ember-data';

export default DS.Model.extend({
spark: DS.belongsTo('spark'),
tag: DS.belongsTo('tag'),
});
