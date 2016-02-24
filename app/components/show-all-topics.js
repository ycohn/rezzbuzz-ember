import Ember from 'ember';

export default Ember.Component.extend({
  actions: { 
    subscribe(topic){
      this.sendAction('onSubscribe', topic);
    }
  }
});
