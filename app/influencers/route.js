import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('influencer');
},
// activate () {
// Ember.$('body').addClass('bg-white');
// },
//
// deactivate () {
// Ember.$('body').removeClass('bg-white');
// }
});
