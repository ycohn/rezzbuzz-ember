import Ember from 'ember';

export default Ember.Component.extend({
  topic: null,
  actions: {
    subscribe(){
      this.sendAction('onSubscribe', this.get('topic')); 
    }
  }
});
