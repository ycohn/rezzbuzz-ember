import Ember from 'ember';

export default Ember.Controller.extend({
   model(){
    return this.store.createRecord("user");
  },
  actions: {
    createUser(){
      let user = this.model;
      user.save().then((savedUser) => {
        this.transitionToRoute('login');
      }).catch();
    }
  }
});
