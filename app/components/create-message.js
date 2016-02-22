import Ember from 'ember';

export default Ember.Component.extend({
  newMessage: null,
  actions: {
    submit(){
      this.sendAction('onSubmit', this.get('newMessage'));
    }
  }
});
