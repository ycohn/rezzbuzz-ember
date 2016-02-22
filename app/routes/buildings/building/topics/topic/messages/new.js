import Ember from 'ember'; 

export default Ember.Route.extend({
  model(){
    return this.store.createRecord("message");
  },
  actions: {
    addMessage(newMessage){
      debugger;
      let message = this.modelFor(this.routeName);
      let topic = this.modelFor('buildings.building.topics.topic');
      message.set("content", "This is me forcing content in the route");
      message.set("topic", topic);
      message.save().then((savedMessage) => {
        this.transitionTo('buildings.building.topics.topic', savedMessage.topic);
      }).catch();
    }
  }
});