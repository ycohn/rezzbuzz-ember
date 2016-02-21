import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
    this.route('new');

    this.route('user', {
      path: ':user_id'
    });
  });
  this.route('buildings', function() {
    this.route('new');
    this.route('building', {path: ':building_id'}, function() {
      this.route('topics', function() {
        this.route('topic', {path: ':topic_id'});
        this.route('new');
      });
    });
  });
  this.route('login');
  // this.route('logout');
});

export default Router;
