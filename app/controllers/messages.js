import Ember from 'ember';

export default Ember.Controller.extend({
  model(){
    return this.store.createRecord("message");
  }
});
