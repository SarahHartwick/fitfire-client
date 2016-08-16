import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('influencers');
  this.route('brand-profile');
  this.route('new-influencer');
  this.route('new-brand');
  this.route('new-user');
  this.route('new-profile');
  this.route('profile', {path: 'profiles/:profile_id'});
  this.route('profiles');
  this.route('my-profile');
  this.route('sparks');
  this.route('activity-feed');
  this.route('influencer', {path: 'influencers/:influencer_id'});
  this.route('spark', {path: 'sparks/:spark_id'});
  this.route('new-spark');
  this.route('community', {path: 'sparks/community'});
  this.route('wellness', {path: 'sparks/wellness'});
  this.route('nutrition', {path: 'sparks/nutrition'});
  this.route('fitness', {path: 'sparks/fitness'});
  this.route('spirituality', {path: 'sparks/spirituality'});
});

export default Router;
